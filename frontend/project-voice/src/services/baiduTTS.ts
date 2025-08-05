/**
 * 百度语音合成API服务
 * 提供文字转语音功能，使用axios进行HTTP请求
 */

import axios from 'axios'

// 创建axios实例
const axiosInstance = axios.create({
  timeout: 30000, // 30秒超时
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 代理服务器配置
const PROXY_CONFIG = {
  // 使用本地代理服务器
  baseURL: `${window.location.origin}/api/proxy`,
  // 或者使用第三方CORS代理（测试用，生产环境请使用自己的代理）
  // corsProxy: 'https://cors-anywhere.herokuapp.com/'
}

export interface BaiduTTSConfig {
  apiKey: string
  secretKey: string
  /** 语音人 默认为0（女声） */
  per?: number
  /** 语速 0-15 默认为5 */
  spd?: number
  /** 音调 0-15 默认为5 */
  pit?: number
  /** 音量 0-15 默认为5 */
  vol?: number
  /** 音频格式 3为mp3 4为pcm-16k 5为pcm-8k 6为wav */
  aue?: number
}

export interface TTSOptions {
  /** 语音性别 */
  voiceGender?: 'male' | 'female'
  /** 语速 0.1-2.0 */
  rate?: number
  /** 音调 0.1-2.0 */
  pitch?: number
  /** 音量 0-1 */
  volume?: number
}

export class BaiduTTSService {
  private config: BaiduTTSConfig
  private accessToken: string = ''
  private tokenExpireTime: number = 0
  private currentAudio: HTMLAudioElement | null = null

  constructor(config: BaiduTTSConfig) {
    this.config = {
      per: 0, // 默认女声
      spd: 5, // 默认语速
      pit: 5, // 默认音调
      vol: 5, // 默认音量
      aue: 3, // 默认mp3格式
      ...config
    }
  }

  /**
   * 获取访问令牌
   */
  private async getAccessToken(): Promise<string> {
    // 检查token是否过期
    if (this.accessToken && Date.now() < this.tokenExpireTime) {
      return this.accessToken
    }

    try {
      // 使用Vite代理直接调用百度API
      const response = await axiosInstance.post('/baidu-api/oauth/2.0/token', null, {
        params: {
          grant_type: 'client_credentials',
          client_id: this.config.apiKey,
          client_secret: this.config.secretKey
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      const data = response.data
      
      if (data.error) {
        throw new Error(`获取访问令牌失败: ${data.error_description}`)
      }

      this.accessToken = data.access_token
      // 提前5分钟过期
      this.tokenExpireTime = Date.now() + (data.expires_in - 300) * 1000
      
      return this.accessToken
    } catch (error) {
      console.error('[BaiduTTS] 获取访问令牌失败:', error)
      throw error
    }
  }

  /**
   * 将选项转换为百度API参数
   */
  private convertOptions(options?: TTSOptions) {
    const params = { ...this.config }

    if (options) {
      // 语音性别
      if (options.voiceGender === 'male') {
        params.per = 1 // 男声
      } else if (options.voiceGender === 'female') {
        params.per = 0 // 女声
      }

      // 语速 (0.1-2.0 转换为 0-15)
      if (options.rate !== undefined) {
        params.spd = Math.round((options.rate - 0.1) / 1.9 * 15)
        params.spd = Math.max(0, Math.min(15, params.spd))
      }

      // 音调 (0.1-2.0 转换为 0-15)
      if (options.pitch !== undefined) {
        params.pit = Math.round((options.pitch - 0.1) / 1.9 * 15)
        params.pit = Math.max(0, Math.min(15, params.pit))
      }

      // 音量 (0-1 转换为 0-15)
      if (options.volume !== undefined) {
        params.vol = Math.round(options.volume * 15)
        params.vol = Math.max(0, Math.min(15, params.vol))
      }
    }

    return params
  }

  /**
   * 语音合成
   * @param text 要合成的文本
   * @param options 合成选项
   */
  async synthesize(text: string, options?: TTSOptions): Promise<void> {
    if (!text.trim()) {
      console.warn('[BaiduTTS] 文本为空，跳过合成')
      return
    }

    // 清理文本，移除可能导致合成失败的字符
    const sanitizedText = text.replace(/[^\w\s\u4e00-\u9fff.,?!'\":;()\-]/g, '').trim()
    
    if (!sanitizedText) {
      console.warn('[BaiduTTS] 清理后的文本为空，跳过合成')
      return
    }

    try {
      // 停止当前播放
      this.stop()

      // 获取访问令牌
      const accessToken = await this.getAccessToken()
      
      // 转换参数
      const params = this.convertOptions(options)
      
      // 构建请求参数
      const requestParams = new URLSearchParams({
        tex: sanitizedText,
        tok: accessToken,
        cuid: 'web_client',
        ctp: '1',
        lan: 'zh',
        per: params.per!.toString(),
        spd: params.spd!.toString(),
        pit: params.pit!.toString(),
        vol: params.vol!.toString(),
        aue: params.aue!.toString()
      });

      console.log('[BaiduTTS] 开始语音合成:', {
        text: sanitizedText,
        params: {
          per: params.per,
          spd: params.spd,
          pit: params.pit,
          vol: params.vol,
          aue: params.aue
        }
      });

      // 使用正确的百度TTS API路径
      const response = await axiosInstance.post('/baidu-tts/text2audio', requestParams, {
        responseType: 'blob',
        validateStatus: (status) => status < 400,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'audio/*'
        }
      });

      // 检查响应类型
      const contentType = response.headers['content-type'] || response.headers['Content-Type']
      console.log('[BaiduTTS] 响应类型:', contentType)
      
      if (contentType && contentType.includes('application/json')) {
        // 如果返回JSON，说明有错误
        const errorText = await response.data.text()
        const errorData = JSON.parse(errorText)  
        console.error('[BaiduTTS] API错误:', errorData)
        throw new Error(`语音合成失败: ${errorData.err_msg || errorData.error_msg || '未知错误'}`)
      }

      // 获取音频数据
      const audioBlob = response.data
      console.log('[BaiduTTS] 音频数据大小:', audioBlob.size, 'bytes')
      
      if (audioBlob.size === 0) {
        throw new Error('返回的音频数据为空')
      }
      const audioUrl = URL.createObjectURL(audioBlob)

      // 播放音频
      await this.playAudio(audioUrl)

      // 清理URL对象
      URL.revokeObjectURL(audioUrl)

      console.log('[BaiduTTS] 语音合成完成')

    } catch (error) {
      console.error('[BaiduTTS] 语音合成失败:', error)
      throw error
    }
  }

  /**
   * 播放音频
   */
  private async playAudio(audioUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.currentAudio = new Audio(audioUrl)
      
      // 设置音量（防止过小）
      this.currentAudio.volume = 0.8
      
      this.currentAudio.onended = () => {
        console.log('[BaiduTTS] 播放完成')
        resolve()
      }
      
      this.currentAudio.onerror = (e) => {
        console.error('[BaiduTTS] 播放错误:', e)
        const error = this.currentAudio?.error
        if (error) {
          console.error('[BaiduTTS] 详细错误信息:', {
            code: error.code,
            message: error.message
          })
        }
        reject(new Error('音频播放失败'))
      }
      
      this.currentAudio.onloadstart = () => {
        console.log('[BaiduTTS] 开始加载音频')
      }
      
      this.currentAudio.oncanplay = () => {
        console.log('[BaiduTTS] 音频已加载，可以播放')
      }
      
      this.currentAudio.onloadeddata = () => {
        console.log('[BaiduTTS] 音频数据已加载')
      }

      // 用户交互后才能播放音频，使用 play() 方法
      this.currentAudio.play().catch((playError) => {
        console.error('[BaiduTTS] 播放失败:', playError)
        // 如果是用户交互限制，提示用户点击
        if (playError.name === 'NotAllowedError') {
          console.warn('[BaiduTTS] 需要用户交互后才能播放音频')
        }
        reject(playError)
      })
    })
  }

  /**
   * 停止播放
   */
  stop(): void {
    if (this.currentAudio) {
      this.currentAudio.pause()
      this.currentAudio.currentTime = 0
      this.currentAudio = null
    }
  }

  /**
   * 暂停播放
   */
  pause(): void {
    if (this.currentAudio && !this.currentAudio.paused) {
      this.currentAudio.pause()
    }
  }

  /**
   * 恢复播放
   */
  resume(): void {
    if (this.currentAudio && this.currentAudio.paused) {
      this.currentAudio.play().catch(console.error)
    }
  }

  /**
   * 是否正在播放
   */
  get isPlaying(): boolean {
    return this.currentAudio !== null && !this.currentAudio.paused
  }
}