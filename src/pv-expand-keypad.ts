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
import {customElement, property, query, queryAll} from 'lit/decorators.js';

export class CharacterSelectEvent extends CustomEvent<string> {}

@customElement('pv-expand-keypad')
export class PvExpandKeypadElement extends LitElement {
  /**
   * A label for the handler button.
   */
  @property({type: String, reflect: true})
  label = '';

  /**
   * A list of characters to select. Each list item corresponds to a row, and
   * each character in a list item corresponds to a keypad.
   *
   * e.g. `['abc', 'def']` becomes:
   * ```
   * [a] [b] [c]
   * [d] [e] [f]
   * ```
   */
  @property({type: Array})
  value: string[] = [];

  /**
   * Whether the keypad is open.
   */
  @property({type: Boolean, reflect: true})
  open = false;

  /**
   * Whether to expand the keypad from the left edge of the container.
   */
  @property({type: Boolean, reflect: true})
  expandAtOrigin = false;

  /**
   * Approximate number of characters to show on the handler.
   *
   * This value is used to scale the font size of the button label.
   */
  @property({type: Number})
  numCharsOnHandler = 3;

  @queryAll('button')
  allButtons?: HTMLButtonElement[];

  @query('button.handler')
  handlerButton?: HTMLButtonElement;

  @query('.keypad-popup')
  keypadPopup?: HTMLDivElement;

  @query('ul.container')
  container?: HTMLUListElement;

  @queryAll('ul.container button')
  focusibleButtons?: HTMLButtonElement[];

  @query('li button')
  firstKeypad?: HTMLButtonElement;

  @queryAll('ul.row')
  expandedKeypadRows?: HTMLUListElement[];

  private onKeydownWhileOpenWithThis = this.onKeydownWhileOpen.bind(this);
  private resizeObserver?: ResizeObserver;
  private closeTimeout?: number;

  static styles = css`
    button.handler {
      align-items: center;
      aspect-ratio: 1;
      background: var(--color-surface, white);
      border-radius: 20%;
      border: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      color: var(--color-on-surface);
      cursor: pointer;
      display: flex;
      font-family: 'Roboto Mono', 'Noto Sans JP', monospace;
      justify-content: center;
      max-width: 10rem;
      min-width: 2rem;
      width: 100%;
      height: 100%;
    }

    /* 针对标点符号按钮设置特殊高度 */
    :host([label=".,!?"]) button.handler {
      height: 103px;
    }

    button.handler:hover,
    button.handler:focus,
    :host([open]) button.handler {
      background: var(--color-primary, yellow);
      color: white;
    }

    .close {
      font-family: 'Material Symbols Outlined';
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .keypad-popup {
      display: none;
      left: 0;
      position: absolute;
      top: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.73); /* #000000 透明度73% */
      height: 11.67vh; /* 指定高度 */
      border-radius: 20px; /* 圆角 */
      padding: 0 3rem; /* 左右内边距增加空间 */
    }

    :host([open]) .keypad-popup {
      display: flex; /* flex布局居中 */
      align-items: center; /* 垂直居中 */
      justify-content: center; /* 水平居中 */
    }

    ul.container {
      display: flex;
      gap: 3rem; /* 进一步扩大按钮之间的间距 */
      margin: 0;
      padding: 0;
      height: 100%;
      align-items: center;
    }

    ul.row {
      display: flex;
      flex-direction: row;
      gap: 1.5rem; /* 进一步扩大按钮间水平间距 */
      margin: 0;
      padding: 0;
    }

    :host([open]) .keypad-popup ul.container button,
    :host([open]) .keypad-popup ul.row button {
      /* margin-bottom is not needed for horizontal layout */
      background: transparent !important; /* 透明背景 */
      border: none !important; /* 去掉边框 */
      color: #C0C4CF !important; /* 未选中字体颜色 */
      font-size: 4.6875rem !important; /* 未选中字号 */
      transition: all 0.3s ease !important; /* 过渡动画 */
      box-shadow: none !important; /* 去掉阴影 */
      border-radius: 0 !important; /* 去掉圆角 */
      min-width: auto !important; /* 自动宽度 */
      width: auto !important; /* 自动宽度 */
      height: auto !important; /* 自动高度 */
      aspect-ratio: unset !important; /* 取消宽高比限制 */
      max-width: none !important; /* 取消最大宽度限制 */
      font-family: inherit !important; /* 继承字体 */
    }

    :host([open]) .keypad-popup ul.container button:hover,
    :host([open]) .keypad-popup ul.row button:hover {
      background: transparent !important; /* 悬浮时保持透明背景 */
      color: #FFFFFF !important; /* 选中后字体颜色 */
      font-size: 6.25rem !important; /* 选中字号 */
      transform: none !important; /* 不使用transform放大，用字号变化 */
      box-shadow: none !important; /* 不要阴影效果 */
    }

    :host([open]) .keypad-popup ul.container button:focus,
    :host([open]) .keypad-popup ul.row button:focus {
      background: transparent !important; /* 焦点时也保持透明背景 */
      color: #C0C4CF !important; /* 焦点时保持未选中颜色 */
      font-size: 4.6875rem !important; /* 焦点时保持未选中字号 */
      transform: none !important; /* 焦点时不放大，避免默认悬浮效果 */
      box-shadow: none !important; /* 不要阴影效果 */
      outline: none !important; /* 去掉焦点轮廓 */
    }

    .backdrop {
      display: none !important; /* 完全隐藏背景遮罩 */
    }
  `;

  /**
   * Traps the focus within the expanded keypad.
   * @param e A keydown event
   */
  private onKeydownWhileOpen(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.open = false;
      return;
    }
    if (e.key === 'Tab' && this.shadowRoot && this.focusibleButtons) {
      const activeElement = this.shadowRoot.activeElement;
      if (e.shiftKey && activeElement === this.focusibleButtons[0]) {
        this.focusibleButtons[this.focusibleButtons.length - 1].focus();
        e.preventDefault();
      } else if (
        !e.shiftKey &&
        activeElement ===
          this.focusibleButtons[this.focusibleButtons.length - 1]
      ) {
        this.focusibleButtons[0].focus();
        e.preventDefault();
      }
    }
  }

  private onKeypadOpen() {
    if (!this.keypadPopup) return;
    if (!this.expandedKeypadRows) return;
    if (!this.handlerButton) return;
    if (this.expandAtOrigin) {
      this.keypadPopup.style.position = 'absolute';
      this.keypadPopup.style.top = '0';
      this.keypadPopup.style.left = '0';
    } else {
      const handlerBBox = this.handlerButton.getBoundingClientRect();
      this.keypadPopup.style.position = 'fixed';
      this.keypadPopup.style.top = `${handlerBBox.bottom + 5}px`;
      this.keypadPopup.style.left = `${handlerBBox.left}px`;

      // Reset transform before measuring.
      this.keypadPopup.style.transform = '';
      // Measure and apply transform for overflow.
      const popupBBox = this.keypadPopup.getBoundingClientRect();
      if (popupBBox.right > window.innerWidth) {
        this.keypadPopup.style.transform = `translateX(${
          window.innerWidth - popupBBox.right - 16
        }px)`;
      }
    }
    this.firstKeypad?.focus();
    this.addEventListener('keydown', this.onKeydownWhileOpenWithThis);
    this.dispatchEvent(
      new Event('keypad-open', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  private onKeypadClose() {
    this.removeEventListener('keydown', this.onKeydownWhileOpenWithThis);
    this.handlerButton?.focus();
  }

  /**
   * 延迟关闭弹出区域，给用户时间移动鼠标
   */
  private scheduleClose() {
    // 清除之前的延迟关闭
    if (this.closeTimeout) {
      window.clearTimeout(this.closeTimeout);
    }
    // 设置新的延迟关闭
    this.closeTimeout = window.setTimeout(() => {
      this.open = false;
      this.closeTimeout = undefined;
    }, 150); // 150ms延迟，给用户足够时间但不会太长
  }

  /**
   * 取消延迟关闭
   */
  private cancelClose() {
    if (this.closeTimeout) {
      window.clearTimeout(this.closeTimeout);
      this.closeTimeout = undefined;
    }
  }

  protected firstUpdated() {
    this.resizeObserver = new ResizeObserver(() => {
      if (!this.handlerButton) return;
      const width = this.handlerButton.getBoundingClientRect().width;
      this.allButtons?.forEach(button => {
        if (button !== this.handlerButton) button.style.width = `${width}px`;
        button.style.fontSize = `${width / this.numCharsOnHandler}px`;
      });
    });
    this.resizeObserver.observe(this.handlerButton!);
  }

  protected updated(changedProperties: Map<string, string | number | boolean>) {
    const oldOpenValue = changedProperties.get('open');
    if (oldOpenValue === true) {
      this.onKeypadClose();
    } else if (oldOpenValue === false) {
      this.onKeypadOpen();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
    // 清理延迟关闭timeout
    if (this.closeTimeout) {
      window.clearTimeout(this.closeTimeout);
    }
  }

  protected render() {
    return html`<button
        class="handler"
        @mouseenter="${() => {
          this.cancelClose(); // 取消任何延迟关闭
          this.open = true;
          this.dispatchEvent(
            new CharacterSelectEvent('keypad-handler-click', {
              detail: 'open',
              bubbles: true,
              composed: true,
            }),
          );
        }}"
        @mouseleave="${() => {
          // 延迟关闭，给用户时间移动到弹出区域
          this.scheduleClose();
        }}"
      >
        ${this.label}
      </button>
      <div class="keypad-popup"
        @mouseenter="${() => {
          // 鼠标进入弹出区域时取消关闭并保持打开状态
          this.cancelClose();
          this.open = true;
        }}"
        @mouseleave="${() => {
          // 延迟关闭，给用户时间重新悬浮
          this.scheduleClose();
        }}"
      >
        <ul class="container">
          ${this.value.map(
            (row) =>
              html`<li>
                <ul class="row">
                  ${row.split('').map(
                    (c) =>
                      html`<li>
                        <button
                          @click="${() => {
                            this.open = false;
                            const characterToSend = c.replace('␣', ' ');
                            this.dispatchEvent(
                              new CharacterSelectEvent('character-select', {
                                detail: characterToSend,
                                bubbles: true,
                                composed: true,
                              }),
                            );
                          }}"
                        >
                          ${c}
                        </button>
                      </li>`
                  )}
                </ul>
              </li>`
          )}
        </ul>
      </div>`;
  }
}
