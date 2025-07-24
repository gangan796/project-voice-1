/**
 * 语音合成工具
 * 使用Web Speech API实现文字转语音
 */

export class SpeechService {
  private synth: SpeechSynthesis
  private voices: SpeechSynthesisVoice[] = []
  private voicesLoadedPromise: Promise<void>
  private resolveVoicesLoaded!: () => void

  constructor() {
    this.synth = window.speechSynthesis
    this.voicesLoadedPromise = new Promise(resolve => {
      this.resolveVoicesLoaded = resolve
    })

    this.loadVoices = this.loadVoices.bind(this)

    if ('speechSynthesis' in window) {
      speechSynthesis.onvoiceschanged = this.loadVoices
      // 第一次加载时，如果语音已缓存，可能不会触发 onvoiceschanged，所以手动调用一次
      this.loadVoices()
    } else {
      console.error('[Speech] Speech Synthesis not supported by this browser.')
    }
  }

  /**
   * 加载可用语音列表
   */
  private loadVoices() {
    this.voices = this.synth.getVoices()
    if (this.voices.length > 0) {
      console.log('[Speech] 可用语音列表加载成功, 数量:', this.voices.length)
      this.resolveVoicesLoaded() // 语音列表加载成功，Promise完成
    }
  }

  /**
   * 获取中文语音
   * @param preferFemale - 是否优先女声
   */
  private getChineseVoice(preferFemale: boolean = true): SpeechSynthesisVoice | null {
    // 优先查找中文语音
    const chineseVoices = this.voices.filter(voice => 
      voice.lang.includes('zh') || voice.lang.includes('CN')
    )
    
    if (chineseVoices.length === 0) {
      // 如果没有中文，则在所有语音中查找包含ting或xiao的常见中文语音名称
      const fallbackVoice = this.voices.find(v => v.name.includes('Ting') || v.name.includes('Xiao'))
      return fallbackVoice || this.voices[0] || null
    }
    
    // 根据性别偏好选择
    if (preferFemale) {
      const femaleVoice = chineseVoices.find(v => 
        v.name.includes('female') || v.name.includes('Female') || 
        v.name.includes('女') || v.name.includes('Ting') || v.name.includes('Xiaoxiao')
      )
      return femaleVoice || chineseVoices[0]
    } else {
      const maleVoice = chineseVoices.find(v => 
        v.name.includes('male') || v.name.includes('Male') || 
        v.name.includes('男') || v.name.includes('Yunxi')
      )
      return maleVoice || chineseVoices[0]
    }
  }

  /**
   * 朗读文本
   * @param text - 要朗读的文本
   * @param options - 朗读选项
   */
  async speak(text: string, options?: {
    voiceGender?: 'male' | 'female'
    rate?: number // 语速 0.1-10
    pitch?: number // 音调 0-2
    volume?: number // 音量 0-1
  }): Promise<void> {
    return new Promise((resolve, reject) => {
      // 停止当前朗读
      this.stop()
      
      if (!text.trim()) {
        console.warn('[Speech] 文本为空，跳过朗读')
        resolve()
        return
      }
      
      // 新增：清理文本，移除表情符号等可能导致合成失败的字符
      // 这个正则表达式移除非字母、非数字、非标点、非空格的所有字符
      const sanitizedText = text.replace(/[^\p{L}\p{N}\p{P}\p{Z}.,?!'":;()]/gu, '').trim()

      if (!sanitizedText) {
          console.warn('[Speech] 清理后的文本为空，跳过朗读')
          resolve()
          return
      }

      // 等待语音列表加载完成
      this.voicesLoadedPromise.then(() => {
        if (this.voices.length === 0) {
          console.error('[Speech] 语音列表为空，无法朗读。请检查浏览器是否支持或禁用了语音合成。')
          reject(new Error('语音列表为空'))
          return
        }

        const utterance = new SpeechSynthesisUtterance(sanitizedText)
        
        // 设置语音
        const voice = this.getChineseVoice(options?.voiceGender !== 'male')
        if (voice) {
          utterance.voice = voice
          utterance.lang = voice.lang
        } else {
          console.warn('[Speech] 未找到合适的中文语音，将使用默认语音')
        }
        
        // 设置参数
        utterance.rate = options?.rate ?? 1.0
        utterance.pitch = options?.pitch ?? 1.0
        utterance.volume = options?.volume ?? 1.0
        
        // 事件监听
        utterance.onstart = () => console.log('[Speech] 开始朗读')
        utterance.onend = () => {
          console.log('[Speech] 朗读结束')
          resolve()
        }
        utterance.onerror = (e) => {
          const err = e as SpeechSynthesisErrorEvent
          console.error(`[Speech] 朗读错误: ${err.error}`, e)
          reject(new Error(`朗读错误: ${err.error}`))
        }
        
        // 开始朗读
        this.synth.speak(utterance)
      }).catch(reject)
    })
  }
  
  /**
   * 停止朗读
   */
  stop() {
    this.synth.cancel()
  }
  
  /**
   * 暂停朗读
   */
  pause() {
    this.synth.pause()
  }
  
  /**
   * 恢复朗读
   */
  resume() {
    this.synth.resume()
  }
  
  /**
   * 是否正在朗读
   */
  get isSpeaking(): boolean {
    return this.synth.speaking
  }
}

// 导出单例
export const speechService = new SpeechService() 