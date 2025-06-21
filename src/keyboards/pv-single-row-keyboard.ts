/**
 * Copyright 2025 Google LLC
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

import '../pv-expand-keypad.js';

import {css, html, LitElement} from 'lit';
import {customElement, property, queryAll} from 'lit/decorators.js';

import type {PvExpandKeypadElement} from '../pv-expand-keypad.js';
import {State} from '../state.js';

type Key = {label: string; value: string[]};

export const ALPHANUMERIC_SINGLE_ROW_KEYGRID: Key[][] = [
  [
    {label: 'abc', value: ['abc']},
    {label: 'def', value: ['def']},
    {label: 'ghi', value: ['ghi']},
    {label: 'jkl', value: ['jkl']},
    {label: 'mno', value: ['mno']},
    {label: 'pqrs', value: ['pqrs']},
    {label: 'tuv', value: ['tuv']},
    {label: 'wxyz', value: ['wxyz']},
    {label: '0~9', value: ['01234', '56789']},
    {label: '.,!?', value: ['␣.,!?']},
  ],
];

export const HIRAGANA_SINGLE_ROW_KEYGRID: Key[][] = [
  [
    {label: 'あ', value: ['あいうえお', 'ぁぃぅぇぉ']},
    {label: 'か', value: ['かきくけこ', 'がぎぐげご']},
    {label: 'さ', value: ['さしすせそ', 'ざじずぜぞ']},
    {label: 'た', value: ['たちつてとっ', 'だぢづでど']},
    {label: 'な', value: ['なにぬねの']},
    {label: 'は', value: ['はひふへほ', 'ばびぶべぼ', 'ぱぴぷぺぽ']},
    {label: 'ま', value: ['まみむめも']},
    {label: 'や', value: ['やゆよ', 'ゃゅょ']},
    {label: 'ら', value: ['らりるれろ']},
    {label: 'わ', value: ['わをん']},
    {label: '゛゜', value: ['。、ー？！', '␣゛゜']},
  ],
];

export const FRENCH_SINGLE_ROW_KEYGRID: Key[][] = [
  [
    {label: 'abc', value: ['abc', 'àâç']},
    {label: 'def', value: ['def', 'èéêë']},
    {label: 'ghi', value: ['ghi', 'îï']},
    {label: 'jkl', value: ['jkl']},
    {label: 'mno', value: ['mno', 'ôœ']},
    {label: 'pqrs', value: ['pqrs']},
    {label: 'tuv', value: ['tuv', 'ùûü']},
    {label: 'wxyz', value: ['wxyz', 'ÿ']},
    {label: '0~9', value: ['01234', '56789']},
    {label: '.,!?', value: ['␣.,!?']},
  ],
];

export const GERMAN_SINGLE_ROW_KEYGRID: Key[][] = [
  [
    {label: 'abc', value: ['abc', 'ä']},
    {label: 'def', value: ['def']},
    {label: 'ghi', value: ['ghi']},
    {label: 'jkl', value: ['jkl']},
    {label: 'mno', value: ['mno', 'ö']},
    {label: 'pqrs', value: ['pqrs']},
    {label: 'tuv', value: ['tuv', 'ü']},
    {label: 'wxyz', value: ['wxyz']},
    {label: '0~9', value: ['01234', '56789']},
    {label: '.,!?', value: ['␣.,!?']},
  ],
];

export const SWEDISH_SINGLE_ROW_KEYGRID: Key[][] = [
  [
    {label: 'abc', value: ['abc', 'åä']},
    {label: 'def', value: ['def']},
    {label: 'ghi', value: ['ghi']},
    {label: 'jkl', value: ['jkl']},
    {label: 'mno', value: ['mno', 'ö']},
    {label: 'pqrs', value: ['pqrs']},
    {label: 'tuv', value: ['tuv', 'ü']},
    {label: 'wxyz', value: ['wxyz']},
    {label: '0~9', value: ['01234', '56789']},
    {label: '.,!?', value: ['␣.,!?']},
  ],
];
//新增九宫格数据结构
export const ALPHANUMERIC_NINE_KEY_KEYGRID: Key[][] = [
  [
    {label: 'abc', value: ['abc']},
    {label: 'def', value: ['def']},
    {label: 'ghi', value: ['ghi']},
  ],
  [
    {label: 'jkl', value: ['jkl']},
    {label: 'mno', value: ['mno']},
    {label: 'pqrs', value: ['pqrs']},
  ],
  [
    {label: 'tuv', value: ['tuv']},
    {label: 'wxyz', value: ['wxyz']},
    {label: '0~9', value: ['01234', '56789']},
  ],
];

// UI设计图风格九宫格数据结构
const NINE_KEY_GRID: Key[][] = [
  [
    {label: '0-9', value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']},
    {label: 'ABC', value: ['a', 'b', 'c']},
    {label: 'DEF', value: ['d', 'e', 'f']},
  ],
  [
    {label: 'GHI', value: ['g', 'h', 'i']},
    {label: 'JKL', value: ['j', 'h', 'l']},
    {label: 'MNO', value: ['m', 'n', 'o']},
  ],
  [
    {label: 'PQRS', value: ['p', 'q', 'r', 's']},
    {label: 'TUV', value: ['t', 'u', 'v']},
    {label: 'WXYZ', value: ['w', 'x', 'y', 'z']},
  ],
];
const PUNCTUATION_KEY = {label: '.,!?', value: ['.', ',', '!', '?']};
const DELETE_KEY = {label: '删除', value: ['backspace']};

export class PvSingleRowKeyboard extends LitElement {
  constructor(public keygrid: Key[][]) {
    super();
  }

  @property({type: Object})
  private state?: State;

  @queryAll('pv-expand-keypad')
  keypads?: PvExpandKeypadElement[];

  static styles = css`
    :host {
      position: relative;
    }

    ul {
      display: flex;
      gap: 0.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      flex: 1;
      max-width: 9rem;
    }
  `;

  protected firstUpdated() {
    this.addEventListener('keypad-open', (e: Event) => {
      const target = e.composedPath()[0];
      this.keypads?.forEach(keypad => {
        keypad.open = keypad === target;
      });
    });
  }

  render() {
    return this.keygrid.map(
      keys => html`
        <ul>
          ${keys.map(
            keypad => html`
              <li>
                <pv-expand-keypad
                  .label=${keypad.label}
                  .value=${keypad.value}
                  ?expandAtOrigin=${this.state?.expandAtOrigin || false}
                ></pv-expand-keypad>
              </li>
            `,
          )}
        </ul>
      `,
    );
  }
}

@customElement('pv-alphanumeric-single-row-keyboard')
export class PvAlphanumericSingleRowKeyboard extends PvSingleRowKeyboard {
  constructor() {
    super(ALPHANUMERIC_SINGLE_ROW_KEYGRID);
  }
}

@customElement('pv-hiragana-single-row-keyboard')
export class PvHiraganaSingleRowKeyboard extends PvSingleRowKeyboard {
  constructor() {
    super(HIRAGANA_SINGLE_ROW_KEYGRID);
  }
}

@customElement('pv-french-single-row-keyboard')
export class PvFrenchSingleRowKeyboard extends PvSingleRowKeyboard {
  constructor() {
    super(FRENCH_SINGLE_ROW_KEYGRID);
  }
}

@customElement('pv-german-single-row-keyboard')
export class PvGermanSingleRowKeyboard extends PvSingleRowKeyboard {
  constructor() {
    super(GERMAN_SINGLE_ROW_KEYGRID);
  }
}

@customElement('pv-swedish-single-row-keyboard')
export class PvSwedishSingleRowKeyboard extends PvSingleRowKeyboard {
  constructor() {
    super(SWEDISH_SINGLE_ROW_KEYGRID);
  }
}
// 新建九宫格键盘组件
@customElement('pv-alphanumeric-nine-key-keyboard')
export class PvAlphanumericNineKeyKeyboard extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 597px; /* 整体九宫格区域宽度 */
    }
    .nine-key-grid {
      display: grid;
      grid-template-columns: repeat(3, 165px); /* 3列，每列按钮宽度165px */
      grid-template-rows: repeat(4, 148px); /* 4行，每行按钮高度148px */
      gap: 20px 14px; /* 垂直间距20px，水平间距14px */
      width: calc(3 * 165px + 2 * 14px); /* 精确计算网格总宽度 */
      max-width: 100%; /* 防止超出父容器 */
      margin-inline: auto; /* 居中显示 */
      margin-bottom: 20px; /* 九宫格与下方按钮或候选字/词的间距 */
    }
    .key-btn {
      background: #fff;
      border: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 30px; /* 九宫格按钮圆角 */
      font-size: 1.2rem;
      height: 148px; /* 占满网格单元格高度 */
      width: 165px; /* 占满网格单元格宽度 */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
    }
    .key-btn:active {
      background: #e3f2fd;
    }
    .delete-btn {
      background: #fff;
      border: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 30px; /* 删除按钮圆角 */
      font-size: 1.2rem;
      height: 103px; /* 删除按钮高度 */
      width: 344px; /* 删除按钮宽度 */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
      gap: 0.4vw; /* 响应式图标与文字之间的间距 */
    }
    .delete-btn img {
      width: 2.4vw; /* 响应式图标宽度 */
      height: 10vh; /* 响应式图标高度 */
      object-fit: contain; /* 保持图标比例 */
      min-width: 16px; /* 最小宽度保证可用性 */
      min-height: 16px; /* 最小高度保证可用性 */
      max-width: 70px; /* 最大宽度限制 */
      max-height: 70px; /* 最大高度限制 */
    }
    .delete-btn:hover {
      background: var(--color-primary, yellow);
      color: #333;
    }
    .delete-btn:active {
      background: #e3f2fd;
    }
    .punctuation-key-btn {
      background: #fff;
      border: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 30px; /* 标点符号按钮圆角 */
      font-size: 1.2rem;
      height: 103px; /* 标点符号按钮高度 */
      width: 165px; /* 标点符号按钮宽度 */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
    }
    .punctuation-key-btn:active {
      background: #e3f2fd;
    }
    .bottom-row {
      display: flex;
      justify-content: center; /* 居中对齐 */
      gap: 14px; /* 标点符号按钮与删除按钮之间的水平间距 */
      width: calc(165px + 14px + 344px); /* 精确计算下方按钮行总宽度 */
      max-width: 100%; /* 防止超出父容器 */
      margin-inline: auto; /* 居中显示 */
    }
  `;

  private _onKeyClick(value: string) {
    this.dispatchEvent(
      new CustomEvent('character-select', {
        detail: value,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="keyboard-area">
        <div class="nine-key-grid">
          ${NINE_KEY_GRID.flat().map(
            key => {
              console.log('key value:', key.value);
              return html`
                <pv-expand-keypad
                  .label=${key.label}
                  .value=${key.value}
                  @select=${(e: CustomEvent) => this._onKeyClick(e.detail)}
                ></pv-expand-keypad>
              `;
            }
          )}
          <pv-expand-keypad
            .label=${PUNCTUATION_KEY.label}
            .value=${PUNCTUATION_KEY.value}
            @select=${(e: CustomEvent) => this._onKeyClick(e.detail)}
          ></pv-expand-keypad>
          <button
            class="key-btn delete-btn"
            @click=${() => this._onKeyClick(DELETE_KEY.value[0])}
          >
            <img src="/static/icon/delete.png" alt="删除" />
            删除
          </button>
        </div>
      </div>
    `;
  }
}
