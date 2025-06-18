/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//主页面的布局

import '@material/web/progress/circular-progress.js';
import './macro-api-client.js';
import './pv-button.js';
import './pv-character-input.js';
import './pv-functions-bar.js';
import './pv-setting-panel.js';
import './pv-suggestion-stripe.js';
import './pv-textarea-wrapper.js';

import {
  configureLocalization,
  LocaleModule,
  localized,
  msg,
  str,
} from '@lit/localize';
import {SignalWatcher} from '@lit-labs/signals';
import {html, LitElement} from 'lit';
import {customElement, property, query, queryAll} from 'lit/decorators.js';

import {AudioManager} from './audio-manager.js';
import {ConfigStorage} from './config-storage.js';
import {CONFIG_DEFAULT, LARGE_MARGIN_LINE_LIMIT} from './constants.js';
import {InputSource, InputSourceKind} from './input-history.js';
import {
  SMALL_KANA_TRIGGER,
  STEGANA,
  STEGANA_INVERT,
} from './keyboards/pv-fifty-key-keyboard.js';
import {LANGUAGES} from './language.js';
import {sourceLocale, targetLocales} from './locale-codes.js';
import * as jaModule from './locales/ja.js';
import {MacroApiClient} from './macro-api-client.js';
import {pvAppStyle} from './pv-app-css.js';
import type {CharacterSelectEvent} from './pv-expand-keypad.js';
import type {PvFunctionsBar} from './pv-functions-bar.js';
import type {PvSettingPanel} from './pv-setting-panel.js';
import type {SuggestionSelectEvent} from './pv-suggestion-stripe.js';
import type {PvTextareaWrapper} from './pv-textarea-wrapper.js';
import {State} from './state.js';

const URL_PARAMS = {
  SENTENCE_MACRO_ID: 'sentenceMacroId',
  WORD_MACRO_ID: 'wordMacroId',
} as const;

const {setLocale} = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: async locale => {
    return new Promise(resolve => {
      switch (locale) {
        case 'ja':
          resolve(jaModule);
          break;
        default:
          resolve({} as LocaleModule);
      }
    });
  },
});

/**
 * Gets the shared prefix among the given strings.
 * @param sentences A list of strings
 * @returns The shared prefix
 */
function getSharedPrefix(sentences: string[]) {
  if (sentences.length === 0) return '';
  const sentenceLengths = sentences.map(s => s.length);
  const minLength = Math.min(...sentenceLengths);
  for (let i = 0; i < minLength; i++) {
    if (new Set(sentences.map(s => s[i])).size !== 1) {
      return sentences[0].slice(0, i);
    }
  }
  return sentences[sentenceLengths.indexOf(minLength)];
}

/**
 * Normalizes the given sentence by:
 * - removing redundant spaces
 * - applying Unicode NFKC normalization to compose Dakuon and Handakuon characters.
 *
 * @param sentence An input sentence
 * @param isLastInputFromSuggestion When true, and if the last input char is a punctuation,
 *     remove a space before the punctuation if any
 * @returns The normalized sentence
 */
function normalize(sentence: string, isLastInputFromSuggestion?: boolean) {
  let result = sentence
    .replaceAll('゛', '\u3099')
    .replaceAll('゜', '\u309a')
    .normalize('NFKC')
    .replaceAll('\u3099', '゛')
    .replaceAll('\u309a', '゜')
    .replace(/^\s+/, '')
    .replace(/\s\s+/, ' ');
  if (isLastInputFromSuggestion) {
    result = result.replace(/ ([,.?!])$/, '$1');
  }
  return result;
}

/**
 * Returns the last sentence from the given string.
 * @param text The whole text.
 * @returns The sentence.
 */
function getLastSentence(text: string) {
  // TODO: Use more robust way to get the sentence that the user is editing.
  const sentences = text
    .split(/[.?。？]/)
    .map(str => str.trim())
    .filter(str => str);
  if (sentences.length === 0) {
    return '';
  }
  return sentences[sentences.length - 1];
}

/**
 * Decorator that plays a click sound when a method is called.
 */
function playClickSound() {
  return function (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: PvAppElement, ...args: unknown[]) {
      if (this.state.enableEarcons) AudioManager.playClick();
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

@customElement('pv-app')
@localized()
export class PvAppElement extends SignalWatcher(LitElement) {
  private apiClient: MacroApiClient;
  private stateInternal: State;

  constructor(
    state: State | null = null,
    apiClient: MacroApiClient | null = null,
  ) {
    super();
    this.stateInternal = state ?? new State();
    this.apiClient = apiClient ?? new MacroApiClient();
  }

  get state(): State {
    return this.stateInternal;
  }

  @property({type: Array})
  suggestions: string[] = [];

  @property({type: Array})
  words: string[] = [];

  @property({type: Boolean})
  isLoading = false;

  @query('pv-textarea-wrapper')
  private textField?: PvTextareaWrapper;

  @query('pv-functions-bar')
  functionsBar?: PvFunctionsBar;

  @query('pv-setting-panel')
  private settingPanel?: PvSettingPanel;

  @property({type: String, attribute: 'feature-locale'})
  locale = 'cn';

  @property({type: String, attribute: 'feature-sentence-macro-id'})
  private sentenceMacroId: string | null = null;

  @property({type: String, attribute: 'feature-languages'})
  languageLabels = 'chineseWithSingleRowKeyboard,englishWithSingleRowKeyboard';

  private languageIndex = 0;
  private keyboardIndex = 0;

  @query('.language-name')
  private languageName?: HTMLElement;

  static styles = pvAppStyle;

  connectedCallback() {
    super.connectedCallback();

    this.stateInternal = new State(); // 让State类自己处理ConfigStorage的初始化

    setLocale(this.locale ? this.locale : 'cn');

    this.stateInternal.features = {
      languages: this.languageLabels.split(','),
      sentenceMacroId: this.sentenceMacroId,
      wordMacroId: null,
    };

    if (this.stateInternal.checkedLanguages.length === 0) {
      this.stateInternal.checkedLanguages =
        this.stateInternal.features.languages;
    }
    this.stateInternal.lang = LANGUAGES[this.stateInternal.checkedLanguages[0]];
    this.stateInternal.keyboard =
      this.stateInternal.lang.keyboards[this.keyboardIndex];

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has(URL_PARAMS.SENTENCE_MACRO_ID)) {
      this.stateInternal.features.sentenceMacroId = urlParams.get(
        URL_PARAMS.SENTENCE_MACRO_ID,
      );
    }
    if (urlParams.has(URL_PARAMS.WORD_MACRO_ID)) {
      this.stateInternal.features.wordMacroId = urlParams.get(
        URL_PARAMS.WORD_MACRO_ID,
      );
    }

    // This behavior is a bit tricky. The default initial phrases are stored
    // to local storage. So initial phrases won't be changed by switching input
    // language.
    if (!this.stateInternal.initialPhrases.some(str => str)) {
      this.stateInternal.initialPhrases =
        this.stateInternal.lang.initialPhrases;
    }
  }

  private isBlank() {
    return this.textField && this.textField.value === '';
  }

  private updateSentences(suggestions: string[]) {
    if (!this.stateInternal.sentenceSmallMargin) {
      suggestions = suggestions.slice(0, LARGE_MARGIN_LINE_LIMIT);
    }
    this.suggestions = suggestions.map(s => normalize(s));
  }

  private updateWords(words: string[]) {
    this.words = words.map(w => normalize(w));
  }

  private timeoutId: number | undefined;
  private inFlightRequests = 0;

  private prevCallsMs: number[] = [];

  /**
   * Returns delay in ms before calling fetchSuggestions() depending on recent
   * qps of updateSuggestions(). Returns 0 when qps = 1.
   */
  private delayBeforeFetchMs() {
    return Math.min(150 * (this.prevCallsMs.length - 1), 300);
  }

  async updateSuggestions() {
    window.clearTimeout(this.timeoutId);

    const now = Date.now();
    this.prevCallsMs.push(now);
    this.prevCallsMs = this.prevCallsMs.filter(item => item > now - 1000);

    if (this.isBlank()) {
      this.apiClient.abortFetch();
      this.isLoading = false;
      this.suggestions = [];
      this.words = [];
      return;
    }

    this.timeoutId = window.setTimeout(async () => {
      this.inFlightRequests++;
      this.isLoading = true;
      const result = await this.apiClient.fetchSuggestions(
        this.textField!.value ?? '',
        this.stateInternal.lang.promptName,
        this.stateInternal.model,
        {
          sentenceMacroId:
            this.state.features.sentenceMacroId ??
            this.stateInternal.sentenceMacroId,
          wordMacroId:
            this.state.features.wordMacroId ?? this.stateInternal.wordMacroId,
          persona: this.stateInternal.persona,
        },
      );
      this.inFlightRequests--;
      if (this.inFlightRequests === 0) {
        this.isLoading = false;
      }
      if (!result) {
        return;
      }
      const [sentences, words] = result;
      this.updateSentences(sentences);
      this.updateWords(words);
      this.requestUpdate();
    }, this.delayBeforeFetchMs());
  }

  /**
   * Composes a sentence updated based on the incoming character.
   * @param currentSentence The current sentence to update.
   * @param incomingCharacter The character to append or a control character.
   * @returns The updated sentence after processing the incoming character.
   */
  static composeUpdatedSentence(
    currentSentence: string,
    incomingCharacter: string,
  ) {
    if (incomingCharacter === SMALL_KANA_TRIGGER) {
      const lastCharacter = currentSentence.slice(-1)[0];
      if ([...STEGANA.keys()].includes(lastCharacter)) {
        return currentSentence.slice(0, -1) + STEGANA.get(lastCharacter);
      } else if ([...STEGANA_INVERT.keys()].includes(lastCharacter)) {
        return currentSentence.slice(0, -1) + STEGANA_INVERT.get(lastCharacter);
      } else {
        return currentSentence;
      }
    }
    return currentSentence + incomingCharacter;
  }

  @playClickSound()
  private onCharacterSelect(e: CharacterSelectEvent) {
    if (!this.textField) return;
    if (e.detail === 'backspace') {
      this.textField.textBackspace();
      return;
    }
    const normalized = normalize(
      PvAppElement.composeUpdatedSentence(this.textField.value, e.detail),
      this.textField.isLastInputSuggested(),
    );
    this.textField.setTextFieldValue(normalized, [InputSource.CHARACTER]);
  }

  @playClickSound()
  private onSuggestedWordClick(word: string) {
    const text = this.textField?.value ?? '';
    const concat = this.stateInternal.lang.appendWord(text, word);
    const normalized = normalize(concat);
    this.textField?.setTextFieldValue(normalized, [InputSource.SUGGESTED_WORD]);
  }

  @playClickSound()
  private onSettingClick() {
    this.settingPanel!.show();
  }

  @playClickSound()
  private onUndoClick() {
    this.textField?.textUndo();
  }

  @playClickSound()
  private onBackspaceClick() {
    this.textField?.textBackspace();
  }

  @playClickSound()
  private onDeleteClick() {
    this.textField?.textDelete();
  }

  private switchLanguage() {
    this.state.lang =
      LANGUAGES[this.state.checkedLanguages[this.languageIndex]];
    this.keyboardIndex = 0;
    this.state.keyboard = this.state.lang.keyboards[this.keyboardIndex];
    this.updateSuggestions();
    if (this.languageName) {
      this.languageName.setAttribute('active', 'true');
      setTimeout(() => {
        this.languageName?.removeAttribute('active');
      }, 750);
    }
  }

  @playClickSound()
  private onLanguageChangeClick() {
    this.languageIndex =
      (this.languageIndex + 1) % this.state.checkedLanguages.length;
    this.switchLanguage();
  }

  @playClickSound()
  private onKeyboardChangeClick() {
    this.keyboardIndex =
      (this.keyboardIndex + 1) % this.state.lang.keyboards.length;
    this.state.keyboard = this.state.lang.keyboards[this.keyboardIndex];
    this.updateSuggestions();
  }

  @playClickSound()
  private onContentCopyClick() {
    this.textField?.contentCopy();
  }

  @playClickSound()
  private onKeypadHandlerClick() {}

  // TODO: Call this event handler whenever the dialog is closed.
  private onOkClick() {
    const index = this.state.checkedLanguages.findIndex(
      label => LANGUAGES[label] === this.state.lang,
    );
    if (index === -1) {
      this.languageIndex = 0;
      this.switchLanguage();
    }
  }

  @playClickSound()
  private onSuggestionSelect(e: SuggestionSelectEvent) {
    const [value, index] = e.detail;
    if (this.textField) {
      this.textField.setTextFieldValue(value, [
        {kind: InputSourceKind.SUGGESTED_SENTENCE, index},
      ]);
    }
  }

  private renderSuggestions() {
    const hasSuggestions = this.state.initialPhrases.length > 0;

    // Render actual suggestions or placeholders
    if (hasSuggestions) {
      return html`
        ${this.state.initialPhrases.map((phrase) => html`
          <li class="sentence-item">
            <pv-suggestion-stripe 
              .state=${this.stateInternal}
              .suggestion=${phrase}
              @select=${this.onSuggestionSelect}
            ></pv-suggestion-stripe>
          </li>
        `)}
        ${this.renderPlaceholders(this.state.initialPhrases.length, this.MAX_SENTENCE_SUGGESTIONS - this.state.initialPhrases.length, 'sentence-placeholder')}
      `;
    } else {
      // Render only placeholders if no suggestions
      return html`
        ${this.renderPlaceholders(0, this.MAX_SENTENCE_SUGGESTIONS, 'sentence-placeholder')}
      `;
    }
  }

  private renderPlaceholders(startIndex: number, count: number, className: string) {
    const placeholders = [];
    for (let i = 0; i < count; i++) {
      placeholders.push(html`<li class="${className}"></li>`);
    }
    return placeholders;
  }

  /**
   * 独立的清除按钮点击处理函数
   */
  @playClickSound()
  private handleClearButtonClick() {
    if (this.textField) {
      // 清除前先保存到历史记录
      const currentText = this.textField.value;
      if (currentText && currentText.trim().length > 0) {
        this.saveToHistory(currentText.trim());
      }
      this.textField.textDelete();
    }
  }

  /**
   * 独立的历史记录按钮点击处理函数
   */
  @playClickSound()
  private handleHistoryButtonClick() {
    // 获取历史记录
    const history = this.getInputHistory();
    
    if (history.length === 0) {
      console.log('暂无历史记录');
      return;
    }
    
    // 显示历史记录选择界面
    this.showHistoryDialog(history);
  }

  /**
   * 获取输入历史记录
   */
  private getInputHistory(): string[] {
    try {
      const stored = localStorage.getItem('input_history');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('读取历史记录失败:', error);
      return [];
    }
  }

  /**
   * 保存输入历史记录
   */
  private saveToHistory(text: string) {
    if (!text || text.trim().length === 0) return;
    
    try {
      const history = this.getInputHistory();
      const trimmedText = text.trim();
      
      // 如果已存在相同记录，先移除
      const index = history.indexOf(trimmedText);
      if (index !== -1) {
        history.splice(index, 1);
      }
      
      // 添加到开头
      history.unshift(trimmedText);
      
      // 限制历史记录数量为20条
      if (history.length > 20) {
        history.splice(20);
      }
      
      localStorage.setItem('input_history', JSON.stringify(history));
    } catch (error) {
      console.error('保存历史记录失败:', error);
    }
  }

  /**
   * 显示历史记录选择对话框
   */
  private showHistoryDialog(history: string[]) {
    const dialog = document.createElement('div');
    dialog.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
      background: white;
      border-radius: 12px;
      padding: 20px;
      max-width: 600px;
      max-height: 400px;
      overflow-y: auto;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    
    const title = document.createElement('h3');
    title.textContent = '历史记录';
    title.style.cssText = 'margin-top: 0; margin-bottom: 15px; color: #333;';
    content.appendChild(title);
    
    const list = document.createElement('div');
    list.style.cssText = 'margin-bottom: 15px;';
    
    history.forEach((item, index) => {
      const historyItem = document.createElement('div');
      historyItem.style.cssText = `
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: background 0.2s;
        word-break: break-all;
      `;
      historyItem.textContent = item;
      
      historyItem.addEventListener('mouseenter', () => {
        historyItem.style.background = '#f0f8ff';
      });
      
      historyItem.addEventListener('mouseleave', () => {
        historyItem.style.background = 'white';
      });
      
      historyItem.addEventListener('click', () => {
        if (this.textField) {
          this.textField.setTextFieldValue(item, []);
          this.updateSuggestions();
        }
        document.body.removeChild(dialog);
      });
      
      list.appendChild(historyItem);
    });
    
    content.appendChild(list);
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '关闭';
    closeBtn.style.cssText = `
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 8px 16px;
      cursor: pointer;
      float: right;
    `;
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(dialog);
    });
    
    content.appendChild(closeBtn);
    dialog.appendChild(content);
    document.body.appendChild(dialog);
    
    // 点击背景关闭
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        document.body.removeChild(dialog);
      }
    });
  }

  protected render() {
    const words = this.isBlank()
      ? this.stateInternal.initialPhrases
      : this.words;

    // 确保候选字/词始终有12个元素，不足时用空字符串补齐
    const candidateCount = 12; // 4行3列
    const wordsToDisplay = [...words];
    while (wordsToDisplay.length < candidateCount) {
      wordsToDisplay.push(''); // 用空字符串作为占位符
    }

    // 生成候选字/词的HTML结构 (4x3 网格)
    const bodyOfWordSuggestions = wordsToDisplay.map((word) => {
      if (!word) {
        return html`<div class="candidate-placeholder"></div>`; // 占位符
      }
      return html`
        <button
          class="candidate-btn"
          @click="${() => this.onSuggestedWordClick(word)}"
        >
          ${word}
        </button>
      `;
    });

    const hasCandidateWords = wordsToDisplay.some(w => w && w.trim() !== '');

    // 定义句子显示数量
    const maxSentenceSuggestions = 4;
    // 根据实际建议和占位符创建要显示的句子列表
    const sentencesToRender = [];

    // 填充实际建议
    for (let i = 0; i < Math.min(this.suggestions.length, maxSentenceSuggestions); i++) {
      sentencesToRender.push(this.suggestions[i]);
    }

    // 填充占位符
    while (sentencesToRender.length < maxSentenceSuggestions) {
      sentencesToRender.push(''); // 用空字符串作为占位符
    }

    const bodyOfSentenceSuggestions = sentencesToRender.map((suggestion) => {
      if (!suggestion) {
        return html`<li><div class="sentence-placeholder"></div></li>`; // 占位符
      }
      const text = normalize(this.textField?.value ?? '');
      const sharedOffset = getSharedPrefix([suggestion, text]);
      return html` <li
        class="${this.stateInternal.sentenceSmallMargin ? 'tight' : ''}"
      >
        <pv-suggestion-stripe
          .state=${this.stateInternal}
          .offset="${sharedOffset}"
          .suggestion="${suggestion}"
          @select="${this.onSuggestionSelect}"
        ></pv-suggestion-stripe>
      </li>`;
    });

    return html`
      <div class="container">
        <div class="left-panel">
          <div class="keypad">
            <pv-character-input
              .state=${this.stateInternal}
              @character-select=${this.onCharacterSelect}
              @keypad-handler-click=${this.onKeypadHandlerClick}
            ></pv-character-input>
          </div>
          <ul class="word-suggestions">
            ${bodyOfWordSuggestions}
          </ul>
        </div>
        <div class="center-panel">
          <div class="suggestions">
            <ul class="sentence-suggestions">
              ${bodyOfSentenceSuggestions}
            </ul>
            <div class="loader ${this.isLoading ? 'loading' : ''}">
              <md-circular-progress indeterminate></md-circular-progress>
            </div>
          </div>
          <div class="input-area">
            <pv-textarea-wrapper
              .state=${this.stateInternal}
              @text-update=${() => {
                this.updateSuggestions();
              }}
            ></pv-textarea-wrapper>
            <!-- 添加两个功能，清除与历史记录 -->
            <div class="function-buttons">
              <button @click=${this.handleClearButtonClick}>
              <md-icon class="fb-icon">delete</md-icon>
              清除
              </button>
              <button @click=${this.handleHistoryButtonClick}>
              <md-icon class="fb-icon">history</md-icon>
              历史记录
              </button>
            </div>
          </div>
        </div>
        <div class="right-panel">
          <pv-functions-bar
            .state=${this.stateInternal}
            @undo-click=${this.onUndoClick}
            @backspace-click=${this.onBackspaceClick}
            @delete-click=${this.onDeleteClick}
            @language-change-click=${this.onLanguageChangeClick}
            @keyboard-change-click=${this.onKeyboardChangeClick}
            @content-copy-click=${this.onContentCopyClick}
            @setting-click=${this.onSettingClick}
          ></pv-functions-bar>
        </div>
      </div>

      <pv-setting-panel
        .state=${this.stateInternal}
        @ok-click=${this.onOkClick}
      ></pv-setting-panel>
    `;
  }

  protected MAX_SENTENCE_SUGGESTIONS = 5; // 定义最大句子联想数量

  override firstUpdated() {
    this.state.loadState();
  }
}

export const TEST_ONLY = {
  getSharedPrefix,
  normalize,
  PvAppElement,
};
