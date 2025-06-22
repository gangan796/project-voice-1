/**
 * Vue设置面板包装器
 * 使用Lit Element包装Vue组件，提供与原设置面板相同的API
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createApp, App } from 'vue';
import type { State } from '../state';
import type { SettingsData, VueSettingsPanelWrapper } from './types';
import SettingsPanel from './SettingsPanel';

@customElement('pv-vue-setting-panel')
export class PvVueSettingPanel extends LitElement implements VueSettingsPanelWrapper {
  @property({ type: Object })
  state!: State;

  private vueApp: App | null = null;
  private vueComponent: any = null;

  static styles = css`
    :host {
      display: block;
    }

    #vue-mount-point {
      width: 100%;
      height: 100%;
    }

    /* Vue组件样式 */
    #vue-mount-point .settings-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      font-family: 'Noto Sans JP', 'Roboto', sans-serif;
    }

    #vue-mount-point .settings-modal {
      background: white;
      border-radius: 12px;
      width: 90%;
      max-width: 750px;
      max-height: 85vh;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    #vue-mount-point .settings-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      border-bottom: 1px solid #e0e0e0;
      background: #f8f9fa;
    }

    #vue-mount-point .settings-header h2 {
      margin: 0;
      color: #333;
      font-size: 20px;
      font-weight: 600;
    }

    #vue-mount-point .close-btn {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
      padding: 4px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    #vue-mount-point .close-btn:hover {
      background: #e0e0e0;
      color: #333;
    }

    #vue-mount-point .settings-tabs {
      display: flex;
      flex-direction: column;
      background: #f8f9fa;
      border-right: 1px solid #e0e0e0;
      border-bottom: none;
      width: 100px;
      min-width: 100px;
    }

    #vue-mount-point .tab-btn {
      flex: none;
      padding: 16px 20px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      color: #666;
      transition: all 0.2s;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;
    }

    #vue-mount-point .tab-btn:hover {
      background: rgba(25, 118, 210, 0.1);
      color: #1976d2;
    }

    #vue-mount-point .tab-btn.active {
      background: rgba(111, 201, 255, 0.11);
      color: #2D85F0;
      font-weight: 600;
      border-right: 3px solid #2D85F0;
    }

    #vue-mount-point .settings-body {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    #vue-mount-point .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 20px 16px;
    }

    #vue-mount-point .tab-panel {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    #vue-mount-point .setting-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }

    #vue-mount-point .setting-label {
      font-weight: 600;
      color: #333333;
      font-size: 16px;
      margin-bottom: 8px;
    }

    #vue-mount-point .setting-select,
    #vue-mount-point .setting-textarea {
      padding: 12px 16px;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      font-size: 14px;
      transition: border-color 0.2s;
      font-family: inherit;
      background: white;
      height: 300px;
      width: 100%;
      box-sizing: border-box;
    }

    #vue-mount-point .setting-select:focus,
    #vue-mount-point .setting-textarea:focus {
      outline: none;
      border-color: #1976d2;
      box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
    }

    #vue-mount-point .radio-group {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-left: 6px;
    }

    #vue-mount-point .radio-item {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 14px;
      color: #666666;
    }

    #vue-mount-point .radio-item input[type="radio"] {
      width: 16px;
      height: 16px;
      accent-color: #1976d2;
      cursor: pointer;
    }

    #vue-mount-point .radio-text {
      user-select: none;
    }

    #vue-mount-point .ai-title-container {
      display: flex;
      gap: 21px;
      align-items: center;
      margin-bottom: 8px;
      margin-left: 12px;
    }

    #vue-mount-point .ai-mode-description {
      font-size: 12px;
      color: #999999;
      line-height: 1.4;
      white-space: nowrap;
      margin-top: 2px;
    }

    #vue-mount-point .switch-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
      background: #f8f9fa;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.2s;
      position: relative;
      font-size: 14px;
      color: #333333;
    }

    #vue-mount-point .switch-group:hover {
      background: #e3f2fd;
    }

    #vue-mount-point .switch-input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }

    #vue-mount-point .switch-slider {
      width: 32px;
      height: 16px;
      background: #ccc;
      border-radius: 8px;
      position: relative;
      transition: background 0.3s;
    }

    #vue-mount-point .switch-slider::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: white;
      top: 2px;
      left: 2px;
      transition: transform 0.3s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    #vue-mount-point .switch-input:checked + .switch-slider {
      background: #1976d2;
    }

    #vue-mount-point .switch-input:checked + .switch-slider::before {
      transform: translateX(16px);
    }



    #vue-mount-point .setting-range-inline::-webkit-slider-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #1976d2;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      border: 2px solid white;
    }

    #vue-mount-point .setting-range-inline::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #1976d2;
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    #vue-mount-point .setting-range-inline::-webkit-slider-track {
      height: 4px;
      border-radius: 2px;
      background: #e0e0e0;
    }

    #vue-mount-point .setting-range-inline::-moz-range-track {
      height: 4px;
      border-radius: 2px;
      background: #e0e0e0;
      border: none;
    }

    /* TTS语音选项样式 */
    #vue-mount-point .voice-option-group {
      margin-top: 16px;
      margin-bottom: 32px;
    }

    #vue-mount-point .voice-option-row {
      display: flex;
      gap: 30px;
    }

    #vue-mount-point .voice-option-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 40px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      cursor: pointer;
      background: white;
      transition: all 0.2s;
      position: relative;
    }

    #vue-mount-point .voice-option-item:hover {
      border-color: #2D85F0;
      background: rgba(45, 133, 240, 0.1);
    }

    #vue-mount-point .voice-option-item input[type="radio"]:checked + .voice-option-text {
      color: #2D85F0;
      font-weight: 600;
    }

    #vue-mount-point .voice-option-item:has(input[type="radio"]:checked) {
      border-color: #2D85F0;
      background: rgba(45, 133, 240, 0.1);
    }

    #vue-mount-point .voice-option-item input[type="radio"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    #vue-mount-point .voice-option-text {
      font-size: 16px;
      color: #333333;
      user-select: none;
      cursor: pointer;
      font-weight: 400;
    }

    /* 语音设置特定样式 */
    #vue-mount-point .range-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }

    #vue-mount-point .range-group:first-of-type {
      margin-top: 0px;
    }

    #vue-mount-point .range-container {
      display: flex;
      align-items: center;
      gap: 16px;
      width: 100%;
    }

    #vue-mount-point .range-label-text {
      font-size: 16px;
      color: #333333;
      font-weight: 600;
      min-width: 48px;
      flex-shrink: 0;
    }

    #vue-mount-point .range-value {
      font-size: 16px;
      color: #1976d2;
      font-weight: 600;
      min-width: 40px;
      text-align: right;
      flex-shrink: 0;
    }

    #vue-mount-point .setting-range-inline {
      flex: 1;
      height: 4px;
      border-radius: 2px;
      background: #e0e0e0;
      outline: none;
      appearance: none;
      margin: 0;
      box-sizing: border-box;
    }

    #vue-mount-point .settings-footer {
      padding: 20px 24px;
      border-top: 1px solid #e0e0e0;
      background: #f8f9fa;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }

    #vue-mount-point .btn-primary,
    #vue-mount-point .btn-secondary {
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }

    #vue-mount-point .btn-primary {
      background: #1976d2;
      color: white;
    }

    #vue-mount-point .btn-primary:hover {
      background: #1565c0;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
    }

    #vue-mount-point .btn-secondary {
      background: #f5f5f5;
      color: #666;
      border: 1px solid #ddd;
    }

    #vue-mount-point .btn-secondary:hover {
      background: #e8e8e8;
      color: #333;
    }

    #vue-mount-point .settings-content::-webkit-scrollbar {
      width: 6px;
    }

    #vue-mount-point .settings-content::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
    }

    #vue-mount-point .settings-content::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 3px;
    }

    #vue-mount-point .settings-content::-webkit-scrollbar-thumb:hover {
      background: #a0a0a0;
    }

    /* 配置设置切换按钮样式 */
    #vue-mount-point .config-switch-buttons {
      display: flex;
      gap: 12px;
      margin-bottom: 24px;
    }

    #vue-mount-point .config-switch-btn {
      flex: 1;
      padding: 12px 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: white;
      color: #666;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    #vue-mount-point .config-switch-btn:hover {
      border-color: #2D85F0;
      color: #2D85F0;
      background: rgba(45, 133, 240, 0.05);
    }

    #vue-mount-point .config-switch-btn.active {
      background: #2D85F0;
      color: white;
      border-color: #2D85F0;
    }

    #vue-mount-point .config-switch-btn.active:hover {
      background: #1976d2;
      border-color: #1976d2;
    }
  `;

  constructor() {
    super();
  }

  /**
   * 属性更新时重新创建Vue应用
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('state') && this.vueApp && this.vueComponent) {
      // 重新创建Vue应用以确保状态正确传递
      this.vueApp.unmount();
      this.createVueApp();
    }
  }

  /**
   * 组件首次更新后创建Vue应用
   */
  protected firstUpdated(): void {
    this.createVueApp();
  }

  /**
   * 创建Vue应用实例
   */
  private createVueApp(): void {
    const mountPoint = this.shadowRoot?.getElementById('vue-mount-point');
    if (!mountPoint) return;

    try {
      // 创建Vue应用
      this.vueApp = createApp(SettingsPanel, {
        state: this.state,
        'onOk-click': (data: any) => {
          this.dispatchEvent(new CustomEvent('ok-click', {
            detail: data,
            bubbles: true,
            composed: true
          }));
        },
        'onCancel-click': () => {
          this.dispatchEvent(new CustomEvent('cancel-click', {
            bubbles: true,
            composed: true
          }));
        },
        'onSettings-change': (data: any) => {
          this.dispatchEvent(new CustomEvent('settings-change', {
            detail: data,
            bubbles: true,
            composed: true
          }));
        }
      });

      // 挂载Vue组件
      this.vueComponent = this.vueApp.mount(mountPoint);

    } catch (error) {
      console.error('创建Vue应用失败:', error);
    }
  }



  /**
   * 显示设置面板
   */
  show(): void {
    if (this.vueComponent?.show) {
      this.vueComponent.show();
    }
  }

  /**
   * 隐藏设置面板
   */
  hide(): void {
    if (this.vueComponent?.hide) {
      this.vueComponent.hide();
    }
  }

  /**
   * 更新设置数据
   */
  updateSettings(data: Partial<SettingsData>): void {
    if (this.vueComponent?.updateSettings) {
      this.vueComponent.updateSettings(data);
    }
  }

  /**
   * 渲染方法
   */
  render() {
    return html`
      <div id="vue-mount-point"></div>
    `;
  }

  /**
   * 组件断开连接时清理
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();
    
    if (this.vueApp) {
      this.vueApp.unmount();
      this.vueApp = null;
      this.vueComponent = null;
    }
  }
} 