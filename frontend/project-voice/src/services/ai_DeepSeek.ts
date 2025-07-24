/**
 * DeepSeek AI 服务
 * 提供辅助词和联想句子的AI生成功能
 */

import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import { prompts } from './prompt'
import { useSettingsStore } from '@/stores/settings'

// DeepSeek API 配置
export interface DeepSeekConfig {
  /** API Key */
  apiKey: string
  /** API Base URL */
  baseUrl: string
  /** 模型名称 */
  model: string
  /** 请求超时时间(ms) */
  timeout: number
  /** 最大重试次数 */
  maxRetries: number
}

// API 请求消息格式
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

// API 响应格式
export interface ChatCompletionResponse {
  id: string
  object: string
  created: number
  model: string
  choices: Array<{
    index: number
    message: {
      role: string
      content: string
    }
    finish_reason: string
  }>
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

// 辅助词生成请求参数
export interface AuxiliaryWordsRequest {
  /** 当前输入的内容 */
  currentInput?: string
  /** 历史输入记录 */
  history?: string[]
  /** 用户偏好的词汇类型 */
  wordType?: 'common' | 'formal' | 'casual'
  /** 需要生成的词汇数量 */
  count?: number
}

// 联想句子生成请求参数
export interface SuggestionSentencesRequest {
  /** 当前输入的内容 */
  currentInput: string
  /** 上下文信息 */
  context?: string
  /** 需要生成的句子数量 */
  count?: number
  /** 句子类型偏好 */
  sentenceType?: 'question' | 'statement' | 'mixed'
}

// 服务响应格式
export interface ServiceResponse<T> {
  success: boolean
  data: T | null
  error?: string
  requestId?: string
}

/**
 * DeepSeek AI 服务类
 */
export class DeepSeekAIService {
  private config: DeepSeekConfig
  private requestId: number = 0
  private httpClient: AxiosInstance

  constructor(config?: Partial<DeepSeekConfig>) {
    this.config = {
      apiKey: config?.apiKey || 'sk-e2a0a76caab14d12998b7279dd6e6599', // DeepSeek API Key，这是隐私，不可泄露
      baseUrl: config?.baseUrl || 'https://api.deepseek.com',
      model: config?.model || 'deepseek-chat',
      timeout: config?.timeout || 30000,
      maxRetries: config?.maxRetries || 3,
      ...config
    }
    
    // 初始化axios实例
    this.httpClient = axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    // 请求拦截器 - 添加认证头
    this.httpClient.interceptors.request.use(
      (config) => {
        if (this.config.apiKey) {
          config.headers.Authorization = `Bearer ${this.config.apiKey}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )
    
    // 响应拦截器 - 统一错误处理
    this.httpClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.code === 'ECONNABORTED') {
          return Promise.reject(new Error('请求超时'))
        }
        if (error.response) {
          // 服务器返回错误状态码
          const status = error.response.status
          const message = error.response.data?.error?.message || error.response.statusText
          return Promise.reject(new Error(`HTTP ${status}: ${message}`))
        }
        if (error.request) {
          // 网络错误
          return Promise.reject(new Error('网络连接失败'))
        }
        return Promise.reject(error)
      }
    )
  }

  /**
   * 更新配置
   */
  updateConfig(config: Partial<DeepSeekConfig>): void {
    this.config = { ...this.config, ...config }
    
    // 更新axios实例配置
    if (config.baseUrl) {
      this.httpClient.defaults.baseURL = this.config.baseUrl
    }
    if (config.timeout) {
      this.httpClient.defaults.timeout = this.config.timeout
    }
    if (config.apiKey) {
      this.httpClient.defaults.headers.Authorization = `Bearer ${this.config.apiKey}`
    }
  }

  /**
   * 生成请求ID
   */
  private generateRequestId(): string {
    return `req_${Date.now()}_${++this.requestId}`
  }

  /**
   * 调用DeepSeek Chat API
   */
  private async callChatAPI(
    messages: ChatMessage[],
    requestId: string
  ): Promise<ChatCompletionResponse> {
    if (!this.config.apiKey) {
      throw new Error('DeepSeek API Key 未配置')
    }

    const requestBody = {
      model: this.config.model,
      messages,
      stream: false,
      temperature: 0.7,
      max_tokens: 2000
    }

    try {
      console.log(`[${requestId}] 发送API请求:`, {
        model: this.config.model,
        messageCount: messages.length
      })

      const response: AxiosResponse<ChatCompletionResponse> = await this.httpClient.post(
        '/chat/completions',
        requestBody
      )

      console.log(`[${requestId}] API请求成功:`, {
        status: response.status,
        usage: response.data.usage
      })

      return response.data
    } catch (error) {
      // axios拦截器已经处理了错误转换，这里直接抛出
      throw error
    }
  }

  /**
   * 带重试的API调用
   */
  private async callWithRetry<T>(
    operation: () => Promise<T>,
    requestId: string
  ): Promise<T> {
    let lastError: Error | null = null
    
    for (let attempt = 1; attempt <= this.config.maxRetries; attempt++) {
      try {
        console.log(`[${requestId}] 尝试第 ${attempt} 次请求`)
        return await operation()
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error))
        console.warn(`[${requestId}] 第 ${attempt} 次请求失败:`, lastError.message)
        
        if (attempt < this.config.maxRetries) {
          // 指数退避策略
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000)
          console.log(`[${requestId}] 等待 ${delay}ms 后重试`)
          await new Promise(resolve => setTimeout(resolve, delay))
        }
      }
    }
    
    throw lastError || new Error('重试失败')
  }

  /**
   * 生成辅助词
   * 根据当前输入和历史记录，生成相关的辅助词汇
   */
  async generateAuxiliaryWords(
    request: AuxiliaryWordsRequest
  ): Promise<ServiceResponse<string[]>> {
    const requestId = this.generateRequestId()
    
    try {
      console.log(`[${requestId}] 开始生成辅助词`)
      
      const settingsStore = useSettingsStore()
      // 构建提示词
      let systemPrompt = prompts.auxiliaryWordsPrompt
      
      // 动态添加用户输入偏好（如果有的话）
      if (settingsStore.inputPreference && settingsStore.inputPreference.trim()) {
        systemPrompt += `\n\n用户输入偏好：\n${settingsStore.inputPreference.trim()}\n请根据以上用户偏好调整生成的词汇类型和风格。`
      }

      let userPrompt = `请为以下内容生成辅助词汇：`
      
      if (request.currentInput) {
        userPrompt += `\n当前输入：${request.currentInput}`
      }
      
      if (request.history && request.history.length > 0) {
        userPrompt += `\n历史输入：${request.history.slice(-3).join('、')}`
      }

      if (request.wordType) {
        const typeMap = {
          common: '常用词汇',
          formal: '正式用词',
          casual: '口语化词汇'
        }
        userPrompt += `\n词汇类型偏好：${typeMap[request.wordType]}`
      }

      userPrompt += `\n请生成${request.count || 11}个相关的中文词汇。`

      const messages: ChatMessage[] = [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]

      const response = await this.callWithRetry(
        () => this.callChatAPI(messages, requestId),
        requestId
      )

      if (!response.choices || response.choices.length === 0) {
        throw new Error('API返回数据格式错误')
      }

      const content = response.choices[0].message.content.trim()
      
      // 解析返回的词汇
      const words = content
        .split(/[,，、\s]+/)
        .map(word => word.trim())
        .filter(word => {
          // 过滤条件：1-3个字符，且不能是单个英文字母
          return word.length > 0 && 
                 word.length <= 3 && 
                 !/^[a-zA-Z]$/.test(word) && // 排除单个英文字母
                 /[\u4e00-\u9fa5]/.test(word) // 必须包含中文字符
        })
        .slice(0, request.count || 11)

      console.log(`[${requestId}] 生成辅助词成功:`, words)

      return {
        success: true,
        data: words,
        requestId
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      console.error(`[${requestId}] 生成辅助词失败:`, errorMessage)

      return {
        success: false,
        data: null,
        error: errorMessage,
        requestId
      }
    }
  }

  /**
   * 生成联想句子
   * 根据当前输入内容，生成相关的联想句子
   */
  async generateSuggestionSentences(
    request: SuggestionSentencesRequest
  ): Promise<ServiceResponse<string[]>> {
    const requestId = this.generateRequestId()
    
    try {
      console.log(`[${requestId}] 开始生成联想句子`)
      
      const settingsStore = useSettingsStore()
      // 构建提示词
      let systemPrompt = prompts.suggestionSentencesPrompt
      
      // 动态添加用户输入偏好（如果有的话）
      if (settingsStore.inputPreference && settingsStore.inputPreference.trim()) {
        systemPrompt += `\n\n用户输入偏好：\n${settingsStore.inputPreference.trim()}\n请根据以上用户偏好调整生成的句子内容和风格。`
      }

      let userPrompt = `请为以下内容生成联想句子：\n当前输入：${request.currentInput}`
      
      if (request.context) {
        userPrompt += `\n上下文：${request.context}`
      }

      if (request.sentenceType) {
        const typeMap = {
          question: '疑问句为主',
          statement: '陈述句为主',
          mixed: '混合类型'
        }
        userPrompt += `\n句子类型偏好：${typeMap[request.sentenceType]}`
      }

      userPrompt += `\n请生成${(request.count || 4) + 2}个完整的中文句子作为候选。`

      const messages: ChatMessage[] = [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]

      const response = await this.callWithRetry(
        () => this.callChatAPI(messages, requestId),
        requestId
      )

      if (!response.choices || response.choices.length === 0) {
        throw new Error('API返回数据格式错误')
      }

      const content = response.choices[0].message.content.trim()
      console.log(`[${requestId}] AI返回内容:`, content)
      
      // 解析返回的句子
      let sentences = content
        .split(/\n+/)
        .map(sentence => sentence.trim().replace(/，/g, ','))
        .filter(sentence => {
          // 放宽过滤条件：8-20个字符，且包含中文
          return sentence.length >= 8 && 
                 sentence.length <= 20 && 
                 /[\u4e00-\u9fa5]/.test(sentence) && // 包含中文字符
                 sentence.length > 0 // 确保不是空字符串
        })

      console.log(`[${requestId}] 过滤后的句子:`, sentences)

      // 确保严格返回4个句子
      const targetCount = request.count || 4
      
      if (sentences.length >= targetCount) {
        // 有足够的句子，取前4个
        sentences = sentences.slice(0, targetCount)
      } else if (sentences.length > 0) {
        // 句子不够，需要补充
        const originalSentences = [...sentences] // 保存原始句子
        while (sentences.length < targetCount) {
          // 循环使用原始句子进行补充
          const indexToRepeat = (sentences.length - originalSentences.length) % originalSentences.length
          sentences.push(originalSentences[indexToRepeat])
        }
      } else {
        // 没有符合条件的句子，使用默认句子
        const defaultSentences = [
          "我需要帮助。",
          "请问有什么事吗？", 
          "我感觉不舒服。",
          "谢谢你的关心。"
        ]
        sentences = defaultSentences.slice(0, targetCount)
      }

      console.log(`[${requestId}] 最终返回句子:`, sentences)

      return {
        success: true,
        data: sentences,
        requestId
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      console.error(`[${requestId}] 生成联想句子失败:`, errorMessage)

      return {
        success: false,
        data: null,
        error: errorMessage,
        requestId
      }
    }
  }

  /**
   * 检查API配置是否有效
   */
  async checkApiConnection(): Promise<ServiceResponse<boolean>> {
    const requestId = this.generateRequestId()
    
    try {
      console.log(`[${requestId}] 检查API连接`)
      
      const messages: ChatMessage[] = [
        { role: 'system', content: '你是一个AI助手。' },
        { role: 'user', content: '测试连接' }
      ]

      await this.callWithRetry(
        () => this.callChatAPI(messages, requestId),
        requestId
      )

      console.log(`[${requestId}] API连接正常`)

      return {
        success: true,
        data: true,
        requestId
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      console.error(`[${requestId}] API连接失败:`, errorMessage)

      return {
        success: false,
        data: false,
        error: errorMessage,
        requestId
      }
    }
  }
}

/**
 * 默认DeepSeek服务实例
 */
export const deepSeekService = new DeepSeekAIService()
