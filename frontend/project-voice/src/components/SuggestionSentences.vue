<template>
  <div class="suggestion-sentences">
    <!-- 联想句子网格 - 按行显示 -->
    <div class="sentences-container">
      <!-- 每个句子拆分后的一行 -->
      <div 
        v-for="(sentenceWords, sentenceIndex) in splitSentences" 
        :key="`sentence-${sentenceIndex}`"
        class="sentence-row"
      >
        <button
          v-for="(word, wordIndex) in sentenceWords"
          :key="`word-${sentenceIndex}-${wordIndex}`"
          class="word-button"
          :class="{ 
            loading: aiStore.suggestionSentencesLoading,
            highlighted: isHighlighted(sentenceIndex, wordIndex)
          }"
          @click="handleWordClick(sentenceIndex, wordIndex)"
          @mouseenter="handleMouseEnter(sentenceIndex, wordIndex)"
          @mouseleave="handleMouseLeave"
          :disabled="aiStore.suggestionSentencesLoading"
          v-show="word && word.trim()"
        >
          {{ word }}
        </button>
      </div>
    </div>
    
    <!-- 加载状态 -->
    <div v-if="aiStore.suggestionSentencesLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <span class="loading-text">AI生成中...</span>
    </div>
    
    <!-- 错误状态 -->
    <div v-if="aiStore.suggestionSentencesError" class="error-overlay">
      <div class="error-message">{{ aiStore.suggestionSentencesError }}</div>
      <button class="retry-button" @click="handleRetry">重试</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
// import { useAi_DeepSeekStore } from '@/stores/ai_DeepSeek' // DeepSeek版本（已注释）
import { useAi_Store } from '@/stores/ai' // Gemma3版本

// const aiStore = useAi_DeepSeekStore() // DeepSeek版本（已注释）
const aiStore = useAi_Store() // Gemma3版本

/**
 * 联想句子组件 - 将句子拆分为1-3字的按钮，支持连续悬浮
 */

// 悬浮状态管理
const hoveredSentence = ref<number>(-1)
const hoveredWordIndex = ref<number>(-1)

/**
 * 将句子按1-3个字智能拆分（基于中文语义）
 * @param sentence - 要拆分的句子
 * @returns 拆分后的词汇数组
 */
const splitSentence = (sentence: string): string[] => {
  if (!sentence || !sentence.trim()) return []
  
  const words: string[] = []
  let i = 0
  
  while (i < sentence.length) {
    let foundWord = false
    // 按单字处理（一字一格）
    if (!foundWord) {
      const char = sentence.charAt(i)
      // 标点符号独立成为一个按钮
      words.push(char)
      i += 1
    }
  }
  
  return words
}

/**
 * 判断是否是好的3字词汇
 * @param word - 3字词汇
 * @returns 是否保留为3字词
 */
const isGoodThreeCharWord = (word: string): boolean => {
  // 常见的3字词汇模式
  const threeCharPatterns = [
    // 疑问词
    '什么样', '怎么样', '为什么', '哪里来', '去哪里',
    // 常见动词短语
    '不知道', '没关系', '不要了', '好不好', '可以吗',
    '想要去', '喜欢吃', '能不能', '会不会', '要不要',
    // 时间词
    '昨天晚', '今天早', '明天下', '这个月', '下个月',
    // 地点词
    '在哪里', '到那里', '从这里', '去那边', '在这边',
    // 状态词
    '很好吃', '不太好', '太贵了', '很便宜', '非常棒'
  ]
  
  return threeCharPatterns.includes(word)
}

/**
 * 判断是否是好的2字词汇
 * @param word - 2字词汇
 * @returns 是否保留为2字词
 */
const isGoodTwoCharWord = (word: string): boolean => {
  // 避免拆分的2字词汇
  const twoCharPatterns = [
    // 人称代词
    '我们', '你们', '他们', '她们', '它们',
    // 常用动词
    '去吃', '要去', '想要', '喜欢', '讨厌', '觉得', '认为',
    '可以', '应该', '需要', '必须', '能够', '愿意', '希望',
    // 形容词
    '很好', '不错', '太贵', '便宜', '漂亮', '难看', '舒服',
    '好吃', '难吃', '有趣', '无聊', '开心', '难过', '生气',
    // 时间词
    '今天', '明天', '昨天', '现在', '以后', '之前', '刚才',
    '早上', '下午', '晚上', '中午', '深夜', '凌晨',
    // 地点词
    '这里', '那里', '哪里', '家里', '外面', '里面', '上面', '下面',
    // 疑问词
    '什么', '怎么', '为何', '哪个', '多少', '几点',
    // 否定词
    '不是', '没有', '不会', '不能', '不要', '别的',
    // 连接词
    '但是', '可是', '然后', '接着', '因为', '所以', '如果'
  ]
  
  return twoCharPatterns.includes(word)
}

/**
 * 判断是否是标点符号
 * @param char - 字符
 * @returns 是否是标点符号
 */
const isPunctuation = (char: string): boolean => {
  // 使用正则表达式匹配中文标点符号
  return /[。，！？；：、""''（）《》【】]/.test(char)
}

/**
 * 计算属性：将AI返回的句子拆分为按钮组
 * 严格限制为6行，超出部分直接截断
 */
const splitSentences = computed(() => {
  const sentences = aiStore.suggestionSentences
  const result: string[][] = []
  
  // 严格只取前6个句子，超出部分直接忽略
  const targetSentences = sentences.slice(0, 6)
  
  // 补充空行到6行
  while (targetSentences.length < 6) {
    targetSentences.push('')
  }
  
  // 将每个句子拆分为按钮，控制在合理范围内
  targetSentences.forEach(sentence => {
    if (sentence && sentence.trim()) {
      const words = splitSentence(sentence)
      // 适当限制按钮数量，确保不超出容器范围
      const limitedWords = words.slice(0, 12) // 最多12个按钮
      result.push(limitedWords)
    } else {
      result.push([]) // 空行
    }
  })
  
  return result
})

/**
 * 判断某个词汇是否应该高亮显示
 * @param sentenceIndex - 句子索引
 * @param wordIndex - 词汇索引
 * @returns 是否高亮
 */
const isHighlighted = (sentenceIndex: number, wordIndex: number): boolean => {
  if (hoveredSentence.value !== sentenceIndex) {
    return false
  }
  
  // 当前悬浮的句子中，从开头到悬浮位置的所有词汇都高亮
  return wordIndex <= hoveredWordIndex.value
}

/**
 * 处理鼠标进入事件
 * @param sentenceIndex - 句子索引
 * @param wordIndex - 词汇索引
 */
const handleMouseEnter = (sentenceIndex: number, wordIndex: number) => {
  hoveredSentence.value = sentenceIndex
  hoveredWordIndex.value = wordIndex
}

/**
 * 处理鼠标离开事件
 */
const handleMouseLeave = () => {
  hoveredSentence.value = -1
  hoveredWordIndex.value = -1
}

/**
 * 处理词汇点击
 * @param sentenceIndex - 句子索引
 * @param wordIndex - 词汇索引
 */
const handleWordClick = (sentenceIndex: number, wordIndex: number) => {
  if (aiStore.suggestionSentencesLoading) {
    return
  }
  
  const sentenceWords = splitSentences.value[sentenceIndex]
  if (!sentenceWords || wordIndex >= sentenceWords.length) {
    return
  }
  
  // 获取从句子开头到点击位置的所有词汇
  const wordsToAdd = sentenceWords.slice(0, wordIndex + 1)
  const textToAdd = wordsToAdd.join('')
  
  console.log('[SuggestionSentences] 选择词汇组合:', textToAdd)
  
  // 将输出直接发送到左侧面板
  aiStore.addTextWithClearTemp(textToAdd)
  
  // 清除悬浮状态
  handleMouseLeave()
}

/**
 * 处理重试操作
 */
const handleRetry = () => {
  console.log('[SuggestionSentences] 重试生成联想句子')
  aiStore.retryFailedOperations()
}
</script>

<style scoped>
.suggestion-sentences {
  width: 100%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  position: relative;
  
}

/* 联想句子容器 */
.sentences-container {
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;
  width: 100%;
  flex: 1;
  /* 严格限制为4行，超出部分完全隐藏 */
  height: calc(4 * (8.89vh + 0.8rem));
  overflow: hidden;
}

/* 每行句子的容器 */
.sentence-row {
  display: flex;
  flex-wrap: wrap; /* 允许换行，防止超出容器 */
  gap: 0.5rem;
  min-height: 8.89vh; /* 最小高度 */
  align-items: center; /* 垂直居中 */
  overflow: hidden; /* 隐藏溢出内容 */
  width: 100%; /* 确保占满容器宽度 */
  padding-right: 0; /* 移除右侧padding */
}

/* 词汇按钮样式 */
.word-button {
  height: 8.89vh;
  width:5vw;
  font-size: 3rem;
  border-radius: 0.75rem;
  border: 2px solid #D4EFFF;
  background: #D4EFFF;
  cursor: pointer;
  color: #000;
  transition: all 0.2s;
  white-space: nowrap;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0; /* 不允许按钮缩小，保持内容完整显示 */
  overflow: visible; /* 允许内容正常显示 */
}

/* 高亮状态（连续悬浮效果） */
.word-button.highlighted {
  background: #2D85F0;
  border-color: #2D85F0;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(45, 133, 240, 0.3);
}

.word-button:not(:disabled):active {
  background: #1B5DAD;
  border-color: #1B5DAD;
  color: white;
  transform: translateY(0px);
  box-shadow: 0 2px 4px rgba(45, 133, 240, 0.3);
}

/* 加载状态样式 */
.word-button.loading {
  opacity: 0.6;
  cursor: not-allowed;
}

.word-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 加载覆盖层 */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 10;
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid #e0e0e0;
  border-top: 0.2rem solid #2D85F0;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  font-size: 1.2rem;
  color: #666;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 错误覆盖层 */
.error-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 240, 240, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 10;
}

.error-message {
  font-size: 1rem;
  color: #d32f2f;
  text-align: center;
  max-width: 80%;
}

.retry-button {
  padding: 0.5rem 1rem;
  background: #2D85F0;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.retry-button:hover {
  background: #1B5DAD;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .sentences-container {
    gap: 0.5rem;
    padding: 0.5rem;
    /* 严格限制为6行 */
    height: calc(6 * (6vh + 0.5rem));
    max-height: calc(6 * (6vh + 0.5rem));
  }
  
  .sentence-row {
    gap: 0.5rem;
    min-height: 6vh; /* 最小高度 */
    overflow: hidden; /* 隐藏溢出内容 */
    padding-right: 0; /* 移除右侧padding */
  }
  
  .word-button {
    height: 6vh;
    width: auto; /* 移动端也让宽度自动调整 */
    min-width: fit-content; /* 最小宽度为内容宽度 */
    max-width: none; /* 移除最大宽度限制 */
    font-size: 2rem;
    padding: 0 0.8rem; /* 移动端适中的padding */
  }
  
  .loading-spinner {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .loading-text {
    font-size: 1rem;
  }
}
</style> 