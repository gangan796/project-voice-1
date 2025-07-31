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
   * 过滤输入文本，只保留中文字符
   * @param inputText 原始输入文本
   * @returns 过滤后的文本（只保留中文字符）
   */
  private filterInputText(inputText: string): string {
    if (!inputText) return '';
    
    // 使用正则表达式匹配中文字符（包括中文标点符号）
    const chineseRegex = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g;
    const chineseChars = inputText.match(chineseRegex);
    
    return chineseChars ? chineseChars.join('') : '';
  }

  /**
   * 过滤掉句子中以输入文本开头的部分
   * @param sentence 原始句子
   * @param inputText 输入文本
   * @returns 过滤后的句子
   */
  private filterInputPrefix(sentence: string, inputText: string): string {
    if (!inputText || !sentence) return sentence;
    
    // 去除首尾空格
    const cleanInput = inputText.trim();
    const cleanSentence = sentence.trim();
    
    // 如果句子以输入文本开头，则去掉这部分
    if (cleanSentence.startsWith(cleanInput)) {
      return cleanSentence.substring(cleanInput.length).trim();
    }
    
    return cleanSentence;
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
    const filteredWords = this.filterNumberPrefix(rawData.words);
    const filteredSentences = this.filterNumberPrefix(rawData.sentences);
    
    // 过滤掉与输入文本重复的词汇
    const uniqueWords = filteredWords.filter(word => word !== text && word.trim() !== text.trim());
    
    // 过滤输入文本，只保留中文字符
    const filteredInputText = this.filterInputText(text);
    console.log('原始输入文本:', text);
    console.log('过滤后输入文本:', filteredInputText);
    
    // 过滤掉句子中以输入文本开头的部分
    const processedSentences = filteredSentences.map(sentence => 
      this.filterInputPrefix(sentence, filteredInputText || text)
    ).filter(sentence => sentence.trim().length > 0); // 过滤掉空句子
    
    console.log('过滤前联想句子', filteredSentences);
    console.log('过滤后联想句子', processedSentences);
    return {
      words: uniqueWords,
      sentences: processedSentences
    };
  };
}

export const gemma3Service = new Gemma3();
