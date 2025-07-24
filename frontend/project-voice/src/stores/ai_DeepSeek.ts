import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { deepSeekService } from '@/services/ai_DeepSeek'
import type { AuxiliaryWordsRequest, SuggestionSentencesRequest } from '@/services/ai_DeepSeek'
import { useAppStore } from './app'

/**
 * AI状态管理Store
 * 负责调用DeepSeek服务，为辅助词和联想句子组件提供数据
 */
export const useAi_DeepSeekStore = defineStore('ai_DeepSeek', () => {
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
  const tempInput = ref<string>('')
  const hasTempInput = ref<boolean>(false)
  
  // 防抖定时器
  let debounceTimer: number | null = null
  
  // 获取app store中的文本
  const appStore = useAppStore()
  
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
   */
  const setTempInput = (text: string): void => {
    tempInput.value = text
    hasTempInput.value = text.length > 0
    console.log('[AI Store] 设置临时输入:', text)
  }
  
  /**
   * 添加临时输入字符
   * @param char - 要添加的字符
   */
  const addTempChar = (char: string): void => {
    tempInput.value += char
    hasTempInput.value = true
    console.log('[AI Store] 添加临时字符:', char, '总临时输入:', tempInput.value)
  }
  
  /**
   * 清除临时输入
   */
  const clearTempInput = (): void => {
    if (hasTempInput.value && tempInput.value) {
      // 从app store的文本中移除临时输入
      const currentText = appStore.text
      if (currentText.endsWith(tempInput.value)) {
        appStore.text = currentText.slice(0, -tempInput.value.length)
        console.log('[AI Store] 清除临时输入:', tempInput.value)
      }
    }
    
    tempInput.value = ''
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
   * 生成辅助词
   * @param text - 输入文本
   */
  const generateAuxiliaryWords = async (text: string): Promise<void> => {
    if (!text.trim()) {
      resetAuxiliaryPages()
      return
    }
    
    auxiliaryWordsLoading.value = true
    auxiliaryWordsError.value = null
    
    try {
      // 生成辅助词数据 - 单次调用获取更多词汇
      const request: AuxiliaryWordsRequest = {
        currentInput: text,
        history: inputHistory.value.slice(-3),
        wordType: 'common',
        count: 25 // 一次获取25个词汇，足够分2-3页
      }
      
      const response = await deepSeekService.generateAuxiliaryWords(request)
      
      if (response.success && response.data) {
        // 使用 Set 去重，并排除与输入内容相同的词
        const uniqueWords = [...new Set(response.data)].filter(
          word => word !== request.currentInput
        );
        
        // 将词汇分页，每页11个
        const pages: string[][] = []
        for (let i = 0; i < uniqueWords.length; i += 11) {
          pages.push(uniqueWords.slice(i, i + 11))
        }
        
        // 确保至少有2页，最多3页
        if (pages.length === 0) {
          // 如果AI没有返回任何有效词汇，使用两页默认词
          const defaultPage1 = ['我们', '你好', '什么', '可以', '现在', '今天', '没有', '知道', '这个', '那个', '怎么'];
          const defaultPage2 = ['时候', '地方', '工作', '朋友', '家人', '生活', '感觉', '问题', '希望', '需要', '帮助'];
          pages.push(defaultPage1, defaultPage2);
        } else if (pages.length === 1) {
          // 如果只有一页，补充一页默认词
          const defaultPage2 = ['时候', '地方', '工作', '朋友', '家人', '生活', '感觉', '问题', '希望', '需要', '帮助'];
          pages.push(defaultPage2);
        } else if (pages.length > 3) {
          // 如果超过3页，截断
          pages.splice(3);
        }
        
        // 更新状态
        auxiliaryWordsPages.value = pages
        totalAuxiliaryPages.value = pages.length
        currentAuxiliaryPage.value = 0
        auxiliaryWords.value = pages[0] || []
        
        console.log('[AI Store] 辅助词生成成功:', {
          totalWords: uniqueWords.length,
          totalPages: totalAuxiliaryPages.value,
          wordsPerPage: pages.map(page => page.length),
          currentPage: currentAuxiliaryPage.value + 1
        })
      } else {
        throw new Error(response.error || '生成辅助词失败')
      }
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      auxiliaryWordsError.value = errorMessage
      console.error('[AI Store] 辅助词生成失败:', errorMessage)
      
      // 降级到默认数据（2页）
      const defaultPage1 = ['我们', '你好', '什么', '可以', '现在', '今天', '没有', '知道', '这个', '那个', '怎么']
      const defaultPage2 = ['时候', '地方', '工作', '朋友', '家人', '生活', '感觉', '问题', '希望', '需要', '帮助']
      
      auxiliaryWordsPages.value = [defaultPage1, defaultPage2]
      totalAuxiliaryPages.value = 2
      currentAuxiliaryPage.value = 0
      auxiliaryWords.value = defaultPage1
    } finally {
      auxiliaryWordsLoading.value = false
    }
  }
  
  /**
   * 生成联想句子
   * @param text - 输入文本
   */
  const generateSuggestionSentences = async (text: string): Promise<void> => {
    if (!text.trim()) {
      suggestionSentences.value = []
      return
    }
    
    suggestionSentencesLoading.value = true
    suggestionSentencesError.value = null
    
    try {
      const request: SuggestionSentencesRequest = {
        currentInput: text,
        context: inputHistory.value.slice(-2).join('，'), // 最近2条作为上下文
        count: 4, // 联想句子组件需要4个句子
        sentenceType: 'mixed'
      }
      
      const response = await deepSeekService.generateSuggestionSentences(request)
      
      if (response.success && response.data) {
        suggestionSentences.value = response.data
        console.log('[AI Store] 联想句子生成成功:', response.data)
      } else {
        throw new Error(response.error || '生成联想句子失败')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      suggestionSentencesError.value = errorMessage
      console.error('[AI Store] 联想句子生成失败:', errorMessage)
      
      // 降级到默认数据
      suggestionSentences.value = [
        '今天天气怎么样呢，感觉很不错',
        '你好最近怎么样啊，工作还顺利',
        '我们一起去吃饭吧，你想吃什么',
        '明天有什么计划吗，要不要出去',
        '这个周末做什么呢，有好建议吗'
      ]
    } finally {
      suggestionSentencesLoading.value = false
    }
  }
  
  /**
   * 同时生成辅助词和联想句子
   * @param text - 输入文本
   */
  const generateBothSuggestions = async (text: string): Promise<void> => {
    if (!text.trim()) {
      auxiliaryWords.value = []
      suggestionSentences.value = []
      return
    }
    
    console.log('[AI Store] 开始生成AI建议，输入文本:', text)
    console.log('[AI Store] 临时输入状态:', { hasTempInput: hasTempInput.value, tempInput: tempInput.value })
    
    // 并行调用两个API
    await Promise.allSettled([
      generateAuxiliaryWords(text),
      generateSuggestionSentences(text)
    ])
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
    
    // 设置新的防抖定时器
    debounceTimer = window.setTimeout(() => {
      generateBothSuggestions(text)
    }, 800) // 800ms防抖延迟
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
   * 重试失败的生成操作
   */
  const retryFailedOperations = (): void => {
    const currentText = appStore.text
    
    if (auxiliaryWordsError.value) {
      generateAuxiliaryWords(currentText)
    }
    
    if (suggestionSentencesError.value) {
      generateSuggestionSentences(currentText)
    }
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
      generateAuxiliaryWords,
      generateSuggestionSentences,
      generateBothSuggestions,
      updateInputHistory,
      handleTextChange,
      refreshSuggestions,
      clearAll,
      retryFailedOperations,
      setTempInput,
      addTempChar,
      clearTempInput,
      addTextWithClearTemp,
      nextAuxiliaryPage,
      prevAuxiliaryPage,
      resetAuxiliaryPages
    }
})