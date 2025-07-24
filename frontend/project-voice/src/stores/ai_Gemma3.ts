import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import { gemma3Service } from '@/services/Gemma3'

/**
 * AI状态管理Store
 * 负责调用本地模型Gemma3+后端，为辅助词和联想句子组件提供数据
 */
export const useAi_Gemma3Store = defineStore('ai_Gemma3', () => {
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
  const tempInput = ref<string>('')
  const hasTempInput = ref<boolean>(false)
  
  // 防抖定时器
  let debounceTimer: number | null = null
  
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
   * 生成AI建议（单次调用获取所有数据）
   * @param text - 输入文本
   */
  const generateAiSuggestions = async (text: string): Promise<void> => {
    if (!text.trim()) {
      resetAuxiliaryPages()
      suggestionSentences.value = []
      return
    }
    
    // 设置加载状态
    auxiliaryWordsLoading.value = true
    suggestionSentencesLoading.value = true
    auxiliaryWordsError.value = null
    suggestionSentencesError.value = null
    
    try {
      const response = await gemma3Service.getWords(text)
      
      // 处理辅助词
      if (response.words && response.words.length > 0) {
        // 使用 Set 去重，并排除与输入内容相同的词
        const uniqueWords = [...new Set(response.words)].filter(
          word => word !== text
        );
        
        // 将词汇分页，每页11个
        const pages: string[][] = []
        for (let i = 0; i < uniqueWords.length; i += 11) {
          pages.push(uniqueWords.slice(i, i + 11))
        }
        
        // 确保至少有2页，最多3页
        if (pages.length === 0) {
          const defaultPage1 = ['我们', '你好', '什么', '可以', '现在', '今天', '没有', '知道', '这个', '那个', '怎么'];
          const defaultPage2 = ['时候', '地方', '工作', '朋友', '家人', '生活', '感觉', '问题', '希望', '需要', '帮助'];
          pages.push(defaultPage1, defaultPage2);
        } else if (pages.length === 1) {
          const defaultPage2 = ['时候', '地方', '工作', '朋友', '家人', '生活', '感觉', '问题', '希望', '需要', '帮助'];
          pages.push(defaultPage2);
        } else if (pages.length > 3) {
          pages.splice(3);
        }
        
        auxiliaryWordsPages.value = pages
        totalAuxiliaryPages.value = pages.length
        currentAuxiliaryPage.value = 0
        auxiliaryWords.value = pages[0] || []
      }
      
      // 处理联想句子
      if (response.sentences && response.sentences.length > 0) {
        let sentences = [...response.sentences]
        if (sentences.length < 4) {
          const defaultSentences = [
            '今天天气怎么样呢，感觉很不错',
            '你好最近怎么样啊，工作还顺利',
            '我们一起去吃饭吧，你想吃什么',
            '明天有什么计划吗，要不要出去'
          ]
          sentences = [...sentences, ...defaultSentences].slice(0, 4)
        } else if (sentences.length > 4) {
          sentences = sentences.slice(0, 4)
        }
        
        suggestionSentences.value = sentences
      }
      
      console.log('[AI Store] AI建议生成成功:', {
        wordsCount: response.words?.length || 0,
        sentencesCount: response.sentences?.length || 0
      })
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      auxiliaryWordsError.value = errorMessage
      suggestionSentencesError.value = errorMessage
      console.error('[AI Store] AI建议生成失败:', errorMessage)
      
      // 降级到默认数据
      const defaultPage1 = ['我们', '你好', '什么', '可以', '现在', '今天', '没有', '知道', '这个', '那个', '怎么']
      const defaultPage2 = ['时候', '地方', '工作', '朋友', '家人', '生活', '感觉', '问题', '希望', '需要', '帮助']
      auxiliaryWordsPages.value = [defaultPage1, defaultPage2]
      totalAuxiliaryPages.value = 2
      currentAuxiliaryPage.value = 0
      auxiliaryWords.value = defaultPage1
      
      suggestionSentences.value = [
        '今天天气怎么样呢，感觉很不错',
        '你好最近怎么样啊，工作还顺利',
        '我们一起去吃饭吧，你想吃什么',
        '明天有什么计划吗，要不要出去'
      ]
    } finally {
      auxiliaryWordsLoading.value = false
      suggestionSentencesLoading.value = false
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
    setTempInput,
    addTempChar,
    clearTempInput,
    addTextWithClearTemp,
    nextAuxiliaryPage,
    prevAuxiliaryPage,
    resetAuxiliaryPages
  }
})
    
