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

import './keyboards/pv-single-row-keyboard.js';
import './keyboards/pv-qwerty-keyboard.js';
import './keyboards/pv-fifty-key-keyboard.js';

import {msg} from '@lit/localize';
import {html, TemplateResult} from 'lit';
import {literal, StaticValue} from 'lit/static-html.js';

declare class TinySegmenter {
  segment(text: string): string[];
}

declare global {
  interface Window {
    TinySegmenter: typeof TinySegmenter;
  }
}

export interface Language {
  /**
   * The locale code of the language, e.g. 'en-US'. Used for speech synthesis,
   * etc.
   */
  readonly code: string;

  /**
   * The name of the language in English, e.g. 'Japanese'. Used to fill the
   * [[language]] placeholder of prompts.
   */
  readonly promptName: string;

  /** List of the available keyboards for this language in tag name. */
  readonly keyboards: StaticValue[];

  /** Default initial phrases. */
  readonly initialPhrases: string[];

  /** AI configs for this language. */
  readonly aiConfigs: {
    [key: string]: {model: string; sentence: string; word: string};
  };

  // Renders the language name in a human readable way.
  render(): TemplateResult;

  /**
   * Segments a sentence in the language into words.
   *
   * For example, Japanese doesn't separate words with spaces. We need a
   * specific segment / join logic for such languages.
   */
  segment(sentence: string): string[];

  /** Joins words in the language into a sentence. */
  join(words: string[]): string;

  /**
   * Appends a word to the input text in a language specific manner.
   *
   * For example, we insert a space before the appended word in English.
   * Language specific append logic for such languages will be implemented
   * in this method.
   */
  appendWord(text: string, word: string): string;
}

abstract class LatinScriptLanguage implements Language {
  code = '';
  promptName = '';
  keyboards: StaticValue[] = [];
  initialPhrases: string[] = [];
  aiConfigs = {
    classic: {
      model: 'gemma3:4b',
      sentence: 'SentenceGeneric20250311',
      word: 'WordGeneric20240628',
    },
    fast: {
      model: 'gemma3:4b',
      sentence: 'SentenceGeneric20250311',
      word: 'WordGeneric20240628',
    },
    smart: {
      model: 'gemma3:4b',
      sentence: 'SentenceGeneric20250311',
      word: 'WordGeneric20240628',
    },
  };

  abstract render(): TemplateResult;

  segment(sentence: string) {
    return sentence.split(' ');
  }

  join(words: string[]) {
    // Remove extra space before punctuation caused by punctuation split, and add a trailing space.
    // For example,
    // 'Yes , I can .' => 'Yes, I can. '
    // 'What is .NET framework ?' => 'What is .NET framework? '
    return words.join(' ').replace(/ ([.,!?]+( |$))/g, '$1') + ' ';
  }

  appendWord(text: string, word: string) {
    if (word.startsWith('-')) {
      return text + word.slice(1) + ' ';
    }
    return text + ' ' + word + ' ';
  }
}

abstract class English extends LatinScriptLanguage {
  code = 'en-US';
  promptName = 'English';
  initialPhrases = [
    'I',
    'You',
    'They',
    'What',
    'Why',
    'When',
    'Where',
    'How',
    'Who',
    'Can',
    'Could you',
    'Would you',
    'Do you',
  ];
}

class EnglishWithSingleRowKeyboard extends English {
  keyboards = [literal`pv-alphanumeric-single-row-keyboard`];
  override render() {
    return html`${msg('English (single-row keyboard)')}`;
  }
}


abstract class Chinese implements Language {
  code = 'zh-CN';
  promptName = 'Chinese';
  keyboards: StaticValue[] = [];
  separetor = '';
  initialPhrases = ['你', '我', '他', '她', '它', '好', '今天', '昨天', '明天'];
  emotions: string[] = [];
  aiConfigs = {
    classic: {
      model: 'gemma3:4b',
      sentence: 'SentenceGeneric20250311',
      word: 'WordGeneric20240628',
    },
    fast: {
      model: 'gemma3:4b',
      sentence: 'SentenceGeneric20250311',
      word: 'WordGeneric20240628',
    },
    smart: {
      model: 'gemma3:4b',
      sentence: 'SentenceGeneric20250311',
      word: 'WordGeneric20240628',
    },
  };
  abstract render(): TemplateResult;
  segment(sentence: string) {
    let result = [];
    for (let i = 0; i < sentence.length; i++) {
      result.push(sentence[i]);
    }
    return result;
  }
  join(words: string[]) {
    return words.join('');
  }
  appendWord(text: string, word: string) {
    // Remove pinyin part if any.
    // TODO: This is way too hacky. Please use a more reliable way.
    text = text.replace(/[a-z]+$/, '');
    if (word.startsWith('-')) {
      return text + word.slice(1);
    }
    return text + word;
  }
}
class ChineseWithSingleRowKeyboard extends Chinese {
  keyboards = [literal`pv-alphanumeric-single-row-keyboard`];
  render() {
    return html`${msg('Chinese (single-row keyboard)')}`;
  }
}

export const LANGUAGES: {[name: string]: Language} = {
  englishWithSingleRowKeyboard: new EnglishWithSingleRowKeyboard(),
  chineseWithSingleRowKeyboard: new ChineseWithSingleRowKeyboard(),
};
