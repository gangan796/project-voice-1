<template>
  <div class="auxiliary-words">
    <div class="words-grid">
      <!-- 显示AI生成的辅助词 -->
      <button
        v-for="(word, index) in displayWords"
        :key="`word-${index}`"
        class="word-button"
        :class="{ loading: aiStore.auxiliaryWordsLoading }"
        @click="handleWordClick(word)"
        :disabled="aiStore.auxiliaryWordsLoading"
      >
        {{ word }}
      </button>
      
      <!-- 第四排第三列的左右功能按钮 -->
      <div class="arrow-buttons">
        <button 
          class="arrow-button" 
          @click="handleArrowClick('up')"
          :disabled="isUpButtonDisabled"
        >
          <img :src="upIcon" alt="up" class="arrow-icon-img">
        </button>
        <button 
          class="arrow-button" 
          @click="handleArrowClick('down')"
          :disabled="isDownButtonDisabled"
        >
          <img :src="upIcon" alt="down" class="arrow-icon-img arrow-down">
        </button>
      </div>
    </div>
    
    <!-- 加载状态提示 -->
    <div v-if="aiStore.auxiliaryWordsLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <span class="loading-text">AI生成中...</span>
    </div>
    
    <!-- 错误状态提示 -->
    <div v-if="aiStore.auxiliaryWordsError" class="error-overlay">
      <div class="error-message">{{ aiStore.auxiliaryWordsError }}</div>
      <button class="retry-button" @click="handleRetry">重试</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import upIcon from '@/assets/icon/up.png'
import { useAppStore } from '@/stores/app'
// import { useAi_DeepSeekStore } from '@/stores/ai_DeepSeek' // DeepSeek版本（已注释）
import { useAi_Gemma3Store } from '@/stores/ai_Gemma3' // Gemma3版本
import { useSettingsStore } from '@/stores/settings'

const appStore = useAppStore()
// const aiStore = useAi_DeepSeekStore() // DeepSeek版本（已注释）
const aiStore = useAi_Gemma3Store() // Gemma3版本
const settingsStore = useSettingsStore()

/**
 * 辅助词组件 - 集成AI服务
 */

// 判断当前是否为AI辅助词模式
const isAIWordsMode = computed(() => {
  return aiStore.auxiliaryWords && aiStore.auxiliaryWords.length > 0
})

/**
 * 计算属性：显示的词汇列表
 * 优先显示AI生成的辅助词，如果没有则显示常用语句
 */
const displayWords = computed(() => {
  let wordsToShow: string[]

  if (isAIWordsMode.value) {
    // AI模式，词汇已由aiStore处理分页
    wordsToShow = aiStore.auxiliaryWords
  } else {
    // 常用语句模式，需要手动分页
    const { wordList } = settingsStore.getCommonWordsByType()
    const start = settingsStore.commonWordsPage * 11
    const end = start + 11
    wordsToShow = wordList.slice(start, end)
  }
  
  const result = [...wordsToShow]
  // 补齐到11个词汇
  while (result.length < 11) {
    result.push('')
  }
  
  return result.slice(0, 11)
})

/**
 * 处理词语点击
 * @param word - 点击的词汇
 */
const handleWordClick = (word: string) => {
  if (!word.trim() || aiStore.auxiliaryWordsLoading) {
    return
  }
  
  console.log('[AuxiliaryWords] 选择词汇:', word)
  
  // 使用智能替换：先清除临时输入，再添加词汇
  aiStore.addTextWithClearTemp(word)
}

/**
 * 处理箭头点击
 * @param direction - 方向
 */
const handleArrowClick = (direction: 'up' | 'down') => {
  if (aiStore.auxiliaryWordsLoading) {
    return
  }
  
  console.log('[AuxiliaryWords] 箭头点击:', direction)
  
  if (isAIWordsMode.value) {
    if (direction === 'up') {
      aiStore.prevAuxiliaryPage()
    } else {
      aiStore.nextAuxiliaryPage()
    }
  } else {
    settingsStore.paginateCommonWords(direction === 'up' ? 'prev' : 'next')
  }
}

/**
 * 计算上一页按钮的禁用状态
 */
const isUpButtonDisabled = computed(() => {
  if (aiStore.auxiliaryWordsLoading) return true
  if (isAIWordsMode.value) {
    return aiStore.currentAuxiliaryPage <= 0
  }
  return settingsStore.commonWordsPage <= 0
})

/**
 * 计算下一页按钮的禁用状态
 */
const isDownButtonDisabled = computed(() => {
  if (aiStore.auxiliaryWordsLoading) return true
  if (isAIWordsMode.value) {
    return aiStore.currentAuxiliaryPage >= aiStore.totalAuxiliaryPages - 1
  }
  return settingsStore.commonWordsPage >= settingsStore.totalCommonWordsPages - 1
})

/**
 * 处理重试操作
 */
const handleRetry = () => {
  console.log('[AuxiliaryWords] 重试生成辅助词')
  aiStore.retryFailedOperations()
}
</script>

<style scoped>
.auxiliary-words {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  position: relative;
}

.words-grid {
  display: grid;
  grid-template-columns: repeat(3, 7.92vw);
  grid-template-rows: repeat(4, 7.59vh);
  column-gap: 1.3125rem; /* 26px -> 1.36vw */
  row-gap: 0.6875rem; /* 11px -> 0.57vw */
  flex: 1;
}

.word-button {
  height: 7.59vh;
  width: 7.92vw;
  border: 0.13rem solid #959595; /* 2px -> 0.125rem */
  border-radius: 0.75rem; /* 12px -> 0.75rem */
  background: white;
  cursor: pointer;
  font-size: 2.5rem; 
  color: #252525;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.word-button:not(:disabled):hover {
  background: white;
  border-color: #2D85F0;
  color: #2D85F0;
}

.word-button:not(:disabled):active {
  background: #D0F2FF !important;
  transform: scale(0.96);
  color: #2D85F0 !important;
  border: 0.13rem solid #2D85F0 !important;
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

/* 左右箭头按钮容器 */
.arrow-buttons {
  display: flex;
  flex-direction: row;
  gap: 0.65vw; /* 10px -> 0.52vw */
  grid-column: 3;
  grid-row: 4;
  align-items: center;
  justify-content: center;
}

.arrow-button {
  height: 7.59vh;
  width: 3.7vw;
  border: 0.13rem solid #959595;
  border-radius: 0.75rem;
  background: white;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-button:not(:disabled):hover {
  background: white;
  border-color: #2D85F0;
}

.arrow-button:not(:disabled):hover .arrow-icon-img {
  filter: brightness(0) saturate(100%) invert(27%) sepia(96%) saturate(1284%) hue-rotate(208deg) brightness(96%) contrast(97%);
}

.arrow-button:not(:disabled):active {
  transform: scale(0.96);
  background: #D0F2FF !important;
  border: 0.13rem solid #2D85F0 !important;
}

.arrow-button:not(:disabled):active .arrow-icon-img {
  filter: brightness(0) saturate(100%) invert(27%) sepia(96%) saturate(1284%) hue-rotate(208deg) brightness(96%) contrast(97%);
}

.arrow-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.arrow-icon-img {
  width: 2.14vh;
  height: 2.14vh;
  filter: brightness(0) saturate(100%) invert(82%) sepia(0%) saturate(0%) hue-rotate(183deg) brightness(98%) contrast(90%);
  transition: filter 0.15s ease;
}

.arrow-icon-img.arrow-down {
  transform: rotate(180deg);
}

/* 页面指示器 */
.page-indicator {
  position: absolute;
  bottom: -1.56vw; /* -30px -> -1.56vw */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(45, 133, 240, 0.1);
  color: #2D85F0;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.26vw 0.78vw; /* 5px 15px -> 0.26vw 0.78vw */
  border-radius: 1rem;
  border: 1px solid rgba(45, 133, 240, 0.2);
  white-space: nowrap;
  z-index: 5;
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
  gap: 1.04vw; /* 20px -> 1.04vw */
  z-index: 10;
}

.loading-spinner {
  width: 2.08vw; /* 40px -> 2.08vw */
  height: 2.08vw;
  border: 0.21vw solid #e0e0e0; /* 4px -> 0.21vw */
  border-top: 0.21vw solid #2D85F0;
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
  gap: 1.04vw;
  z-index: 10;
}

.error-message {
  font-size: 1rem;
  color: #d32f2f;
  text-align: center;
  max-width: 80%;
}

.retry-button {
  padding: 0.52vw 1.04vw; /* 10px 20px -> 0.52vw 1.04vw */
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
  .auxiliary-words {
    padding: 0.52vw; /* 10px -> 0.52vw */
  }
  
  .words-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 0.52vw;
  }
  
  .word-button {
    height: 3rem;
    width: 100%;
    font-size: 1.2rem;
  }
  
  .arrow-buttons {
    gap: 0.31vw; /* 6px -> 0.31vw */
    grid-column: span 3;
    justify-content: center;
  }
  
  .arrow-button {
    height: 3rem;
    width: 3rem;
  }
  
  .arrow-icon-img {
    width: 2.14vh;
    height: 2.14vh;
  }
  
  .page-indicator {
    font-size: 0.9rem;
    bottom: -1.25vw; /* -24px -> -1.25vw */
    padding: 0.21vw 0.63vw; /* 4px 12px -> 0.21vw 0.63vw */
  }
  
  .loading-spinner {
    width: 1.56vw; /* 30px -> 1.56vw */
    height: 1.56vw;
  }
  
  .loading-text {
    font-size: 1rem;
  }
}
</style> 