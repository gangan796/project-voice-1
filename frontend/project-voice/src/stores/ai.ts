import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import { AI_APIService } from '@/services/AI_API'
import sensitiveWordsData from '@/assets/prompt.json'

/**
 * 检测文本中是否包含敏感词
 * @param text 待检测的文本
 * @returns 是否包含敏感词
 */
const containsSensitiveWords = (text: string): boolean => {
  if (!text || !text.trim()) return false
  
  const lowerText = text.toLowerCase()
  
  // 遍历所有敏感词约束
  for (const constraint of sensitiveWordsData.constraints) {
    for (const word of constraint.words) {
      if (lowerText.includes(word.toLowerCase())) {
        console.log(`[敏感词检测] 发现敏感词: "${word}" (类型: ${constraint.type})`)
        return true
      }
    }
  }
  
  return false
}

/**
 * 生成安全提示句子
 * @returns 安全提示句子数组
 */
const generateSafePromptSentences = (): string[] => {
  return [
    '请输入适当的内容，我们支持健康积极的交流',
    '为了营造良好的使用环境，请避免敏感内容',
    '让我们一起创造正面积极的对话体验',
    '建议您选择其他话题进行输入和交流'
  ]
}

/**
 * AI状态管理Store
 * 负责调用本地模型Gemma3+后端，为辅助词和联想句子组件提供数据
 */
export const useAi_Store = defineStore('ai', () => {
  const appStore = useAppStore()
  
  // 辅助词相关状态
  const auxiliaryWords = ref<string[]>([])
  const auxiliaryWordsLoading = ref(false)
  const auxiliaryWordsError = ref<string | null>(null)
  
  // 辅助词翻页相关状态
  const auxiliaryWordsPages = ref<string[][]>([]) // 存储多页辅助词数据
  const currentAuxiliaryPage = ref(0) // 当前页索引
  const totalAuxiliaryPages = ref(0) // 总页数
  
  // 联想句子相关状态
  const suggestionSentences = ref<string[]>([])
  const suggestionSentencesLoading = ref(false)
  const suggestionSentencesError = ref<string | null>(null)
  
  // 历史输入记录（用于AI生成参考）
  const inputHistory = ref<string[]>([])
  
  // 临时输入管理（九宫格键盘输入的字母）
  const tempInput = ref<number>(0)
  const hasTempInput = ref<boolean>(false)
  
  // 防抖定时器
  let debounceTimer: number | null = null
  
  // 请求限流相关状态
  let isRequestPending = false // 当前是否有请求正在进行
  let lastRequestTime = 0 // 上次请求时间
  const MIN_REQUEST_INTERVAL = 5000 // 最小请求间隔 5秒（更保守）
  const requestCache = new Map<string, { data: any, timestamp: number }>() // 请求缓存
  const CACHE_DURATION = 60000 // 缓存有效期 60秒（延长缓存时间）
  
  /**
   * 计算属性：是否有任何加载状态
   */
  const isLoading = computed(() => {
    return auxiliaryWordsLoading.value || suggestionSentencesLoading.value
  })
  
  /**
   * 计算属性：是否有任何错误
   */
  const hasError = computed(() => {
    return auxiliaryWordsError.value || suggestionSentencesError.value
  })
  
  /**
   * 设置临时输入
   * @param text - 临时输入的文本
  const setTempInput = (text: string): void => {
    tempInput.value = text
    hasTempInput.value = text.length > 0
    console.log('[AI Store] 设置临时输入:', text)
  }*/
  
  /**
   * 根据字母输入来计算临时输入的长度
   */
  const addTempChar = (): void => {
    tempInput.value += 1
    hasTempInput.value = true
    console.log('[AI Store] 总临时输入:', tempInput.value)
  }
  
  /**
   * 清除临时输入
   */
  const clearTempInput = (): void => {
    // 判断有无临时输入
    if (hasTempInput.value) {
      appStore.text = appStore.text.slice(0, -tempInput.value)
    }
    
    tempInput.value = 0
    hasTempInput.value = false
  }
  
  /**
   * 添加文本并清除临时输入
   * @param text - 要添加的文本
  */
  const addTextWithClearTemp = (text: string): void => {
    // 先清除临时输入
    clearTempInput()
    
    // 添加新文本
    appStore.text = appStore.text + text
    
    console.log('[AI Store] 添加文本并清除临时输入:', text)
  }
  
  /**
   * 切换到下一页辅助词
   */
  const nextAuxiliaryPage = (): void => {
    if (currentAuxiliaryPage.value < totalAuxiliaryPages.value - 1) {
      currentAuxiliaryPage.value++
      auxiliaryWords.value = auxiliaryWordsPages.value[currentAuxiliaryPage.value] || []
      console.log('[AI Store] 切换到下一页:', currentAuxiliaryPage.value + 1, '/', totalAuxiliaryPages.value)
    }
  }
  
  /**
   * 切换到上一页辅助词
   */
  const prevAuxiliaryPage = (): void => {
    if (currentAuxiliaryPage.value > 0) {
      currentAuxiliaryPage.value--
      auxiliaryWords.value = auxiliaryWordsPages.value[currentAuxiliaryPage.value] || []
      console.log('[AI Store] 切换到上一页:', currentAuxiliaryPage.value + 1, '/', totalAuxiliaryPages.value)
    }
  }
  
  /**
   * 重置翻页状态
   */
  const resetAuxiliaryPages = (): void => {
    auxiliaryWordsPages.value = []
    currentAuxiliaryPage.value = 0
    totalAuxiliaryPages.value = 0
    auxiliaryWords.value = []
  }
  
  /**
   * 检查缓存是否有效
   * @param text 输入文本
   * @returns 缓存的数据或null
   */
  const getCachedData = (text: string) => {
    const cached = requestCache.get(text)
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log('[AI Store] 使用缓存数据:', text)
      return cached.data
    }
    return null
  }

  /**
   * 设置缓存数据
   * @param text 输入文本
   * @param data 响应数据
   */
  const setCachedData = (text: string, data: any) => {
    requestCache.set(text, {
      data,
      timestamp: Date.now()
    })
    
    // 清理过期缓存，最多保留20个
    if (requestCache.size > 20) {
      const entries = Array.from(requestCache.entries())
      entries.sort((a, b) => a[1].timestamp - b[1].timestamp)
      for (let i = 0; i < 5; i++) {
        requestCache.delete(entries[i][0])
      }
    }
  }

  /**
   * 生成AI建议（单次调用获取所有数据）
   * @param text - 输入文本
   */
  const generateAiSuggestions = async (text: string): Promise<void> => {
    if (!text.trim()) {
      resetAuxiliaryPages()
      suggestionSentences.value = []
      return
    }
    
    // 检查是否有正在进行的请求
    if (isRequestPending) {
      console.log('[AI Store] 有请求正在进行中，跳过此次请求')
      return
    }
    
    // 检查请求时间间隔
    const now = Date.now()
    if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
      console.log('[AI Store] 请求过于频繁，跳过此次请求')
      return
    }
    
    // 检查缓存
    const cachedData = getCachedData(text)
    if (cachedData) {
      // 使用缓存数据
      auxiliaryWordsPages.value = cachedData.auxiliaryWordsPages
      totalAuxiliaryPages.value = cachedData.totalAuxiliaryPages
      currentAuxiliaryPage.value = 0
      auxiliaryWords.value = cachedData.auxiliaryWordsPages[0] || []
      suggestionSentences.value = cachedData.suggestionSentences
      auxiliaryWordsError.value = null
      suggestionSentencesError.value = null
      auxiliaryWordsLoading.value = false
      suggestionSentencesLoading.value = false
      return
    }
    
    // 敏感词检测 - 如果包含敏感词，不调用API，直接显示空白
    if (containsSensitiveWords(text)) {
      console.log('[AI Store] 检测到敏感词，不调用API，显示空白内容')
      
      // 清空辅助词
      resetAuxiliaryPages()
      
      // 联想句子显示为空白
      suggestionSentences.value = []
      
      // 设置错误信息提示用户
      auxiliaryWordsError.value = '输入包含敏感内容，请修改后重试'
      suggestionSentencesError.value = null
      
      // 不设置加载状态，直接返回
      auxiliaryWordsLoading.value = false
      suggestionSentencesLoading.value = false
      
      return
    }
    
    // 设置请求状态和时间
    isRequestPending = true
    lastRequestTime = now
    
    // 设置加载状态
    auxiliaryWordsLoading.value = true
    suggestionSentencesLoading.value = true
    auxiliaryWordsError.value = null
    suggestionSentencesError.value = null
    
    try {
      const response = await AI_APIService.getWords(text)
      
      // 处理辅助词
      let pages: string[][] = []
      if (response.words && response.words.length > 0) {
        // 使用 Set 去重，并排除与输入内容相同的词
        const uniqueWords = [...new Set(response.words)].filter(
          word => word !== text
        );
        
        // 将词汇分页，每页11个
        for (let i = 0; i < uniqueWords.length; i += 11) {
          pages.push(uniqueWords.slice(i, i + 11))
        }
        
        auxiliaryWordsPages.value = pages
        totalAuxiliaryPages.value = pages.length
        currentAuxiliaryPage.value = 0
        auxiliaryWords.value = pages[0] || []
      }
      
      // 处理联想句子
      let sentences: string[] = []
      if (response.sentences && response.sentences.length > 0) {
        sentences = [...response.sentences]
        if (sentences.length > 4) {
          sentences = sentences.slice(0, 4)
        }
        
        suggestionSentences.value = sentences
      }
      
      // 缓存结果
      setCachedData(text, {
        auxiliaryWordsPages: pages,
        totalAuxiliaryPages: pages.length,
        suggestionSentences: sentences
      })
      
      console.log('[AI Store] AI建议生成成功:', {
        wordsCount: response.words?.length || 0,
        sentencesCount: response.sentences?.length || 0
      })
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      auxiliaryWordsError.value = errorMessage
      suggestionSentencesError.value = errorMessage
      console.error('[AI Store] AI建议生成失败:', errorMessage)
      
      // 如果是429错误（配额超限），延长限流时间
      if (errorMessage.includes('429') || errorMessage.includes('quota')) {
        console.log('[AI Store] API配额超限，延长限流时间')
        lastRequestTime = now + 30000 // 额外等待30秒  
      }
      
      // 不再使用默认数据，保持空状态
      auxiliaryWordsPages.value = []
      totalAuxiliaryPages.value = 0
      currentAuxiliaryPage.value = 0
      auxiliaryWords.value = []
      suggestionSentences.value = []
    } finally {
      auxiliaryWordsLoading.value = false
      suggestionSentencesLoading.value = false
      isRequestPending = false
    }
  }
  
  /**
   * 同时生成辅助词和联想句子（使用单次调用）
   * @param text - 输入文本
   */
  const generateBothSuggestions = async (text: string): Promise<void> => {
    await generateAiSuggestions(text)
  }
  
  /**
   * 获取AI生成的辅助词和联想句子（兼容旧接口）
   */
  const generateAiContent = async () => {
    await generateBothSuggestions(appStore.text)
  }
  
  /**
   * 更新输入历史
   * @param text - 完成的输入文本
   */
  const updateInputHistory = (text: string): void => {
    if (text.trim() && !inputHistory.value.includes(text)) {
      inputHistory.value.push(text)
      
      // 保持历史记录在10条以内
      if (inputHistory.value.length > 10) {
        inputHistory.value.shift()
      }
    }
  }
  
  /**
   * 防抖处理文本变化
   * @param text - 输入文本
   */
  const handleTextChange = (text: string): void => {
    // 清除之前的定时器
    if (debounceTimer) {
      window.clearTimeout(debounceTimer)
    }
    
    // 如果包含敏感词，立即处理，不等防抖
    if (containsSensitiveWords(text)) {
      generateBothSuggestions(text)
      return
    }
    
    // 设置新的防抖定时器
    debounceTimer = window.setTimeout(() => {
      generateBothSuggestions(text)
    }, 1500) // 1.5秒防抖延迟（延长防抖时间）
  }
  
  /**
   * 立即刷新AI建议（不防抖）
   */
  const refreshSuggestions = (): void => {
    if (debounceTimer) {
      window.clearTimeout(debounceTimer)
    }
    generateBothSuggestions(appStore.text)
  }
  
  /**
   * 清除所有数据
   */
  const clearAll = (): void => {
    resetAuxiliaryPages()
    suggestionSentences.value = []
    auxiliaryWordsError.value = null
    suggestionSentencesError.value = null
    inputHistory.value = []
    clearTempInput()
    
    if (debounceTimer) {
      window.clearTimeout(debounceTimer)
    }
  }
  
  /**
   * 清除AI生成的内容
   */
  const clearAiContent = () => {
    resetAuxiliaryPages()
    suggestionSentences.value = []
    auxiliaryWordsError.value = null
    suggestionSentencesError.value = null
  }
  
  /**
   * 重试失败的生成操作
   */
  const retryFailedOperations = (): void => {
    const currentText = appStore.text
    generateAiSuggestions(currentText)
  }
  
  // 监听app store中的文本变化
  watch(
    () => appStore.text,
    (newText) => {
      handleTextChange(newText)
    },
    { immediate: false } // 不立即执行，避免初始化时的空文本触发
  )
  
  return {
    // 状态
    auxiliaryWords,
    auxiliaryWordsLoading,
    auxiliaryWordsError,
    auxiliaryWordsPages,
    currentAuxiliaryPage,
    totalAuxiliaryPages,
    suggestionSentences,
    suggestionSentencesLoading,
    suggestionSentencesError,
    inputHistory,
    tempInput,
    hasTempInput,
    
    // 计算属性
    isLoading,
    hasError,
    
    // 方法
    generateAiSuggestions,
    generateBothSuggestions,
    generateAiContent,
    updateInputHistory,
    handleTextChange,
    refreshSuggestions,
    clearAll,
    clearAiContent,
    retryFailedOperations,
    // setTempInput,
    addTempChar,
    clearTempInput,
    addTextWithClearTemp,
    nextAuxiliaryPage,
    prevAuxiliaryPage,
    resetAuxiliaryPages
  }
})
    
