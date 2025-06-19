/**
 * Vue设置组件类型声明
 */

import { State } from '../state';

/**
 * 设置面板组件的 Props 类型
 */
export interface SettingsPanelProps {
  state: State;
}

/**
 * 设置项的数据类型
 */
export interface SettingsData {
  /** AI配置模式 */
  aiConfig: 'fast' | 'smart' | 'classic';
  /** 是否总是在原点展开 */
  expandAtOrigin: boolean;
  /** 是否使用较小句子边距 */
  sentenceSmallMargin: boolean;
  /** 是否启用提示音 */
  enableEarcons: boolean;
  /** 角色设定 */
  persona: string;
  /** 初始短语列表 */
  initialPhrases: string[];
  /** TTS语音名称 */
  voiceName: string;
  /** 语音语速 */
  voiceSpeakingRate: number;
  /** 语音音调 */
  voicePitch: number;
}

/**
 * 标签页信息类型
 */
export interface TabInfo {
  name: string;
  key: string;
}

/**
 * 语音信息类型
 */
export interface VoiceInfo {
  name: string;
  lang: string;
}

/**
 * 设置面板事件类型
 */
export interface SettingsPanelEvents {
  /** 设置确认事件 */
  'ok-click': CustomEvent<SettingsData>;
  /** 设置取消事件 */
  'cancel-click': CustomEvent<void>;
  /** 设置更改事件 */
  'settings-change': CustomEvent<Partial<SettingsData>>;
}

/**
 * Vue设置面板包装器类型
 */
export interface VueSettingsPanelWrapper {
  /** 显示设置面板 */
  show(): void;
  /** 隐藏设置面板 */
  hide(): void;
  /** 更新设置数据 */
  updateSettings(data: Partial<SettingsData>): void;
} 