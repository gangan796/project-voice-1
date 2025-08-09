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
 * 后端服务类
 * 提供与后端API交互的方法
 */
class AI_API {
  // 创建axios实例 - 使用vite代理
  private AI_API: AxiosInstance = axios.create({
    baseURL: '/api', // 使用vite代理
    timeout: 25000, // 增加超时时间到25秒
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
   * 过滤输入文本，只保留中文字符和中文标点符号
   * @param inputText 原始输入文本
   * @returns 过滤后的文本（只保留中文字符和中文标点符号）
   */
  private filterInputText(inputText: string): string {
    if (!inputText) return '';
    
    // 使用正则表达式匹配中文字符和中文标点符号
    // \u4e00-\u9fff: 中日韩统一表意文字
    // \u3400-\u4dbf: 中日韩统一表意文字扩展A
    // \uf900-\ufaff: 中日韩兼容表意文字
    // \u3000-\u303f: 中日韩符号和标点
    // \uff00-\uffef: 全角ASCII、全角标点符号、半角片假名、全角片假名、半角韩文字母
    const chineseRegex = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3000-\u303f\uff00-\uffef]/g;
    const chineseChars = inputText.match(chineseRegex);
    
    return chineseChars ? chineseChars.join('') : '';
  }

  /**
   * 过滤掉句子中与输入文本重复的部分
   * @param sentence 原始句子
   * @param inputText 输入文本
   * @returns 过滤后的句子
   */
  private filterInputPrefix(sentence: string, inputText: string): string {
    if (!inputText || !sentence) return sentence;
    
    // 去除首尾空格
    const cleanInput = inputText.trim();
    const cleanSentence = sentence.trim();
    
    // 如果输入文本完全包含了句子内容，返回空字符串（没有新内容）
    if (cleanInput.includes(cleanSentence)) {
      console.log(`过滤句子: "${cleanSentence}" 被输入文本完全包含`);
      return '';
    }
    
    // 如果句子以输入文本开头，则去掉输入文本部分
    if (cleanSentence.startsWith(cleanInput)) {
      const filtered = cleanSentence.substring(cleanInput.length).trim();
      console.log(`过滤句子: "${cleanSentence}" -> "${filtered}"`);
      return filtered;
    }
    
    // 查找公共前缀并过滤
    let commonPrefixLength = 0;
    const minLength = Math.min(cleanInput.length, cleanSentence.length);
    
    for (let i = 0; i < minLength; i++) {
      if (cleanInput[i] === cleanSentence[i]) {
        commonPrefixLength = i + 1;
      } else {
        break;
      }
    }
    
    // 如果有显著的公共前缀（超过5个字符），则去掉公共前缀
    if (commonPrefixLength > 5) {
      const filtered = cleanSentence.substring(commonPrefixLength).trim();
      console.log(`过滤公共前缀: "${cleanSentence}" -> "${filtered}"`);
      return filtered;
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
      response = await this.AI_API.post('/complete', { text, inputPreference });
    } else {
      response = await this.AI_API.post('/complete', { text });
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

export const AI_APIService = new AI_API();
