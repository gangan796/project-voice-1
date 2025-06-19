/**
 * Vue设置模块入口文件
 * 导出所有类型和组件
 */

// 导出类型
export type {
  SettingsPanelProps,
  SettingsData,
  TabInfo,
  VoiceInfo,
  SettingsPanelEvents,
  VueSettingsPanelWrapper
} from './types';

// 导出Vue包装器组件
export { PvVueSettingPanel } from './VueSettingsPanelWrapper';

// 注册组件（确保组件被注册到自定义元素注册表）
import './VueSettingsPanelWrapper'; 