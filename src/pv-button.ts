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

import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('pv-button')
export class PvButtonElement extends LitElement {
  @property({type: String})
  label = '';

  @property({type: Boolean})
  active = false;

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([active]) button,
    button:focus,
    button:hover {
      background: #2D85F0; /* 深蓝色背景 */
      color: white; /* 白色字体 */
    }

    :host([rounded]) button {
      border-color: #f28b82;
      border-radius: 5vh;
    }

    :host([emotion]) button {
      border-color: #f98ec9;
    }

    button {
      background: #E3F2FD; /* 浅蓝色背景 */
      border-radius: 0.8rem; /* 稍小的圆角 */
      border: solid 0.15rem #90CAF9; /* 稍细的浅蓝色边框 */
      color: #333; /* 深色字体 */
      cursor: pointer;
      font-family: 'Roboto Mono', 'Noto Sans JP', monospace;
      font-size: 48px; /* 字号48 */
      padding: 0.5rem 1rem; /* 减小内边距 */
      height: 5.5vh; /* 稍小的按钮高度 */
      max-height: 5.5vh; /* 限制最大高度 */
      min-width: 3rem; /* 响应式最小宽度 */
      display: flex; /* flex布局 */
      align-items: center; /* 垂直居中 */
      justify-content: center; /* 水平居中 */
      box-sizing: border-box; /* 包含边框和内边距 */
      overflow: hidden; /* 隐藏溢出内容 */
      text-overflow: ellipsis; /* 显示省略号 */
      white-space: nowrap; /* 不换行 */
      transition: all 0.2s ease; /* 添加过渡动画 */
    }
  `;
  render() {
    return html`<button>${this.label}</button>`;
  }
}
