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

  static styles = css`
    button {
      align-items: center;
      aspect-ratio: 1;
      background: var(--color-surface, white);
      border-radius: 20%;
      border: solid 3px #81c995;
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

    button:hover,
    button:focus {
      background: var(--color-primary, yellow);
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
    }

    :host([open]) .keypad-popup {
      display: block;
    }

    ul.container {
      display: flex;
      gap: 0.5rem;
    }

    ul.row {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }

    ul button {
      /* margin-bottom is not needed for horizontal layout */
    }

    .backdrop {
      background: rgba(0, 0, 0, 0.5);
      display: none;
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
    }

    :host([open]) .backdrop {
      display: block;
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
  }

  protected render() {
    return html`<button
        class="handler"
        @click="${() => {
          this.open = true;
          this.dispatchEvent(
            new CharacterSelectEvent('keypad-handler-click', {
              detail: 'open',
              bubbles: true,
              composed: true,
            }),
          );
        }}"
      >
        ${this.label}
      </button>
      <div class="keypad-popup">
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
      </div>
      <div
        class="backdrop"
        @click="${() => {
          this.open = false;
        }}"
      ></div>`;
  }
}
