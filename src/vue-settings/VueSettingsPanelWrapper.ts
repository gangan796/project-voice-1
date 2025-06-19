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
      max-width: 600px;
      max-height: 80vh;
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
      background: #f8f9fa;
      border-bottom: 1px solid #e0e0e0;
    }

    #vue-mount-point .tab-btn {
      flex: 1;
      padding: 16px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      color: #666;
      transition: all 0.2s;
    }

    #vue-mount-point .tab-btn:hover {
      background: rgba(25, 118, 210, 0.1);
      color: #1976d2;
    }

    #vue-mount-point .tab-btn.active {
      background: #1976d2;
      color: white;
      font-weight: 600;
    }

    #vue-mount-point .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
    }

    #vue-mount-point .tab-panel {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    #vue-mount-point .setting-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    #vue-mount-point .setting-label {
      font-weight: 600;
      color: #333;
      font-size: 14px;
    }

    #vue-mount-point .setting-select,
    #vue-mount-point .setting-textarea {
      padding: 12px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 14px;
      transition: border-color 0.2s;
      font-family: inherit;
    }

    #vue-mount-point .setting-select:focus,
    #vue-mount-point .setting-textarea:focus {
      outline: none;
      border-color: #1976d2;
      box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
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
      width: 48px;
      height: 24px;
      background: #ccc;
      border-radius: 12px;
      position: relative;
      transition: background 0.3s;
    }

    #vue-mount-point .switch-slider::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
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
      transform: translateX(24px);
    }

    #vue-mount-point .setting-range {
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: #e0e0e0;
      outline: none;
      appearance: none;
    }

    #vue-mount-point .setting-range::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #1976d2;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    #vue-mount-point .setting-range::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #1976d2;
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
  `;

  constructor() {
    super();
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
        state: this.state
      });

      // 挂载Vue组件
      this.vueComponent = this.vueApp.mount(mountPoint);

      // 监听Vue组件事件
      this.setupEventListeners();

    } catch (error) {
      console.error('创建Vue应用失败:', error);
    }
  }

  /**
   * 设置事件监听器
   */
  private setupEventListeners(): void {
    if (!this.vueComponent) return;

    // Vue 3 不再有 $on 方法，我们直接在组件实例上监听事件
    // 这里我们通过修改Vue组件的emit来重定向事件
    const originalEmit = this.vueComponent.emit || this.vueComponent.$emit;
    if (originalEmit) {
      this.vueComponent.emit = this.vueComponent.$emit = (event: string, ...args: any[]) => {
        // 先调用原始的emit
        originalEmit.call(this.vueComponent, event, ...args);
        
        // 然后转发到Lit Element
        switch (event) {
          case 'ok-click':
            this.dispatchEvent(new CustomEvent('ok-click', {
              detail: args[0],
              bubbles: true,
              composed: true
            }));
            break;
          case 'cancel-click':
            this.dispatchEvent(new CustomEvent('cancel-click', {
              bubbles: true,
              composed: true
            }));
            break;
          case 'settings-change':
            this.dispatchEvent(new CustomEvent('settings-change', {
              detail: args[0],
              bubbles: true,
              composed: true
            }));
            break;
        }
      };
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