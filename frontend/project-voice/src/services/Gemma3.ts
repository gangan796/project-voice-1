import axios from 'axios';
import type { AxiosInstance } from 'axios'; 
import { useSettingsStore } from '@/stores/settings';

/**
 * 接口响应数据类型定义
 */
interface ApiResponse {
  words: string[];
  sentences: string[];
}

/**
 * 过滤后的响应数据类型定义
 */
interface FilteredResponse {
  words: string[];
  sentences: string[];
}

/**
 * Gemma3后端服务类
 */
class Gemma3 {
  // 创建axios实例 - 使用vite代理
  private gemma3API: AxiosInstance = axios.create({
    baseURL: '/api', // 使用vite代理
    timeout: 15000, // 增加超时时间到15秒
    headers: {
      'Content-Type': 'application/json',
    },
  });
  /**
   * 过滤返回数据中的序号前缀（如"1. "）
   * @param items 原始字符串数组
   * @returns 过滤后的字符串数组
   */
  private filterNumberPrefix(items: string[]): string[] {
    return items.map(item => item.replace(/^\d+\.\s*/, ''));
  }

  /**
   * 获取辅助词和联想句子
   * @param text 输入文本
   * @returns Promise<FilteredResponse> 过滤后的响应数据
   */
  async getWords(text: string): Promise<FilteredResponse> {
    const settingsStore = useSettingsStore();
    const inputPreference = settingsStore.inputPreference;
    
    let response;
    if (inputPreference && inputPreference.trim()) {
      response = await this.gemma3API.post('/complete', { text, inputPreference });
    } else {
      response = await this.gemma3API.post('/complete', { text });
    }
    
    const rawData: ApiResponse = response.data;
    
    // 过滤掉序号前缀
    return {
      words: this.filterNumberPrefix(rawData.words),
      sentences: this.filterNumberPrefix(rawData.sentences)
    };
  };
}

export const gemma3Service = new Gemma3();
