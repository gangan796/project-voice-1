/**
 * 语音合成工具
 * 使用百度语音合成API实现文字转语音
 */

import { BaiduTTSService, type TTSOptions } from '@/services/baiduTTS'

export class SpeechService {
  private baiduTTS: BaiduTTSService | null = null
  private isInitialized: boolean = false

  constructor() {
    this.initializeBaiduTTS()
  }

  /**
   * 初始化百度语音合成服务
   */
  private initializeBaiduTTS() {
    try {
      // 直接使用API密钥，请替换为您的实际密钥
      const apiKey = 'q3MRHRDk4DK8HJLIpVn6hxHO'
      const secretKey = '7XEk4TXVWwCQ2zqrUAlpsYbwRxUBkwHH'
      /*
      if (apiKey === 'YOUR_API_KEY' || secretKey === 'YOUR_SECRET_KEY') {
        console.warn('[Speech] 百度API密钥未配置，请在代码中设置实际的API Key和Secret Key')
        return
      }*/

      this.baiduTTS = new BaiduTTSService({
        apiKey,
        secretKey,
        per: 0, // 默认女声
        spd: 5, // 默认语速
        pit: 5, // 默认音调
        vol: 8, // 默认音量
        aue: 3  // mp3格式
      })

      this.isInitialized = true
      console.log('[Speech] 百度语音合成服务初始化成功')
    } catch (error) {
      console.error('[Speech] 百度语音合成服务初始化失败:', error)
    }
  }

  /**
   * 朗读文本
   * @param text - 要朗读的文本
   * @param options - 朗读选项
   */
  async speak(text: string, options?: {
    voiceGender?: 'male' | 'female'
    rate?: number // 语速 0.1-2.0
    pitch?: number // 音调 0.1-2.0
    volume?: number // 音量 0-1
  }): Promise<void> {
    try {
      // 检查服务是否初始化
      if (!this.isInitialized || !this.baiduTTS) {
        console.warn('[Speech] 百度语音合成服务未初始化，请检查API配置')
        throw new Error('语音合成服务未初始化')
      }

      // 停止当前朗读
      this.stop()
      
      if (!text.trim()) {
        console.warn('[Speech] 文本为空，跳过朗读')
        return
      }

      console.log('[Speech] 开始朗读:', { 
        text, 
        voiceGender: options?.voiceGender,
        rate: options?.rate,
        pitch: options?.pitch,
        volume: options?.volume 
      })

      // 调用百度语音合成
      await this.baiduTTS.synthesize(text, {
        voiceGender: options?.voiceGender || 'female', // 默认女声
        rate: options?.rate || 1.0,
        pitch: options?.pitch || 1.0,
        volume: options?.volume || 0.8
      })

      console.log('[Speech] 朗读完成')
    } catch (error) {
      console.error('[Speech] 朗读失败:', error)
      throw error
    }
  }
  
  /**
   * 停止朗读
   */
  stop() {
    if (this.baiduTTS) {
      this.baiduTTS.stop()
    }
  }
  
  /**
   * 暂停朗读
   */
  pause() {
    if (this.baiduTTS) {
      this.baiduTTS.pause()
    }
  }
  
  /**
   * 恢复朗读
   */
  resume() {
    if (this.baiduTTS) {
      this.baiduTTS.resume()
    }
  }
  
  /**
   * 是否正在朗读
   */
  get isSpeaking(): boolean {
    return this.baiduTTS ? this.baiduTTS.isPlaying : false
  }
}

// 导出单例
export const speechService = new SpeechService() 