<template>
  <div class="center-view">
    <!-- 联想句子区域 -->
    <div class="suggestion-section">
      <SuggestionSentences />
    </div>
    <!-- 输入法附加提示词区域 -->
    <div class="quick-phrases-section">
      <button 
        class="arrow-button arrow-button-left" 
        @click="handleArrowClick('left')"
        :disabled="isLeftButtonDisabled"
        aria-label="向左"
      >
        <span aria-hidden="true"><img src="@/assets/icon/Polygon 16.png" alt="左" /></span>
      </button>
      <div class="phrases-container" :class="{ 'align-right': isLastPage }">
        <button
          v-for="(phrase, index) in visibleQuickPhrases"
          :key="`phrase-${index}`"
          :class="getPhraseButtonClass(phrase)"
          @click="handlePhraseClick(phrase)"
        >
          {{ phrase }}
        </button>
      </div>
      <button 
        class="arrow-button arrow-button-right" 
        @click="handleArrowClick('right')"
        :disabled="isRightButtonDisabled"
        aria-label="向右"
      >
        <span aria-hidden="true"><img src="@/assets/icon/Polygon 17.png" alt="右" /></span>
      </button>
    </div>

    <!-- 输入框区域 -->
    <div class="input-section">
      <InputTextarea />
    </div>
    
    <!-- 底部组件 -->
    <div class="footer-section">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watch, computed } from 'vue'
import { SuggestionSentences, InputTextarea, Footer } from '@/components'
import { useSettingsStore } from '@/stores/settings'
import { useAppStore } from '@/stores/app'

/**
 * 中间视图 - 包含联想句子和输入框
 */

const settingsStore = useSettingsStore()
const appStore = useAppStore()

/*
// 输入法附加提示词
const quickPhrases = ref([
  '你好', // 2字 - 常规字号
  '你在干嘛', // 4字 - 常规字号
  '吃了吗', // 3字 - 常规字号
  '我在听歌', // 4字 - 常规字号
  '谢谢你', // 9字 - 常规字号
])*/
const quickPhrases = computed(() => {
  const { sentenceList } = settingsStore.getCommonWordsByType()
  return sentenceList
})

// 根据文字长度返回对应的CSS类名
const getPhraseButtonClass = (phrase: string) => {
  const length = phrase.length
  if (length <= 9) {
    return 'phrase-button phrase-button-normal' // 2.25rem
  } else if (length <= 11) {
    return 'phrase-button phrase-button-medium' // 2rem
  } else if (length <= 15) {
    return 'phrase-button phrase-button-small' // 1.5rem
  } else {
    return 'phrase-button phrase-button-tiny' // 1.25rem，最多21字
  }
}

// 点击输入法附加提示词
const handlePhraseClick = (phrase: string) => {
  appStore.text = ''
  appStore.text = phrase
}

// 快捷短语滚动相关
const currentPhraseIndex = ref(0)
const visiblePhraseCount = 4 // 显示的短语数量

// 计算当前显示的短语
const visibleQuickPhrases = computed(() => {
  const allPhrases = quickPhrases.value
  const startIndex = currentPhraseIndex.value
  const endIndex = Math.min(startIndex + visiblePhraseCount, allPhrases.length)
  return allPhrases.slice(startIndex, endIndex)
})

// 计算箭头按钮状态
const isLeftButtonDisabled = computed(() => {
  return currentPhraseIndex.value <= 0 || quickPhrases.value.length <= visiblePhraseCount
})

const isRightButtonDisabled = computed(() => {
  return currentPhraseIndex.value + visiblePhraseCount >= quickPhrases.value.length || quickPhrases.value.length <= visiblePhraseCount
})

// 处理箭头点击
const handleArrowClick = (direction: 'left' | 'right') => {
  if (direction === 'left' && !isLeftButtonDisabled.value) {
    currentPhraseIndex.value = Math.max(0, currentPhraseIndex.value - 1)
  } else if (direction === 'right' && !isRightButtonDisabled.value) {
    const maxIndex = Math.max(0, quickPhrases.value.length - visiblePhraseCount)
    currentPhraseIndex.value = Math.min(maxIndex, currentPhraseIndex.value + 1)
  }
}

const isLastPage = computed(() => {
  return (
    currentPhraseIndex.value + visiblePhraseCount >= quickPhrases.value.length
    && quickPhrases.value.length > visiblePhraseCount
  )
})
</script>

<style scoped>
.center-view {
  width: 100%;
  height: 100%;
  padding-top: 2.8125rem;
  padding-left: 1.625rem;
  padding-right: 1.125rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* 联想句子区域 */
.suggestion-section {
  width: 100%;
  max-width: calc(62.45vw - 3.25rem); /* 减去左右padding */
  /* height: 25.47rem;  修改*/
  height:34rem;
}

/* 输入法附加提示词区域 */
.quick-phrases-section {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  margin-bottom: 0.6875rem;
}

.arrow-button {
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  border: 2px solid #2d85f0;
  background-color: white;
  border-radius: 0.75rem;
  flex: 0 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  margin: 0 0.5rem;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s, border 0.2s;
}
.arrow-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.phrases-container {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start; /* 关键：靠左对齐 */

  padding-right: 1rem; /* 给右侧留空间 */
  box-sizing: border-box;
}

/* 优化滚动条样式，适合无障碍 */
.phrases-container::-webkit-scrollbar {
  height: 1rem; /* 更宽的滚动条 */
}
.phrases-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 0.5rem;
}
.phrases-container::-webkit-scrollbar-thumb {
  background: #b3b3b3;
  border-radius: 0.5rem;
}
.phrases-container::-webkit-scrollbar-thumb:hover {
  background: #888;
}

.phrases-container.align-right {
  justify-content: flex-end;
}

.arrow-button-left img { 
   width:2.5vh;
   height:1.5vh;
  transform: rotate(-90deg);
   justify-content: center;
  display: flex;
  align-items: center;
  border-color: 2px solid #2d85f0;
}
.arrow-button-right img {
  width:2.5vh;
  height:1.5vh;
   justify-content: center;
  display: flex;
  align-items: center;
   transform: rotate(90deg);
   }


/* 箭头按钮样式 */
.arrow-button-left {
  width:6.759vh;
  height:3.229vw;
  border-color: 2px solid #2d85f0; 
  background-color: white;
 
  border-radius: 0.5rem;

}

.arrow-button-right{
  width:6.759vh;
  height:3.229vw;
  border-color: 3px solid #2d85f0; 
  background-color: white;
 transform: rotate(180deg);
  border-radius: 0.5rem;
  
}
.arrow-button-ri:hover:not(:disabled) {
  color: #1C67C2;
  transform: scale(1.2);
  transform:rotate(180deg);
  width:3rem;
  height:3rem;
}

.arrow-button:disabled {
  opacity: 0.3;
  cursor: default;
  color: #ccc;
  pointer-events: none;
}

/* 滚动条样式优化 */
.quick-phrases-section::-webkit-scrollbar {
  height: 0.375rem; /* 6px = 0.375rem */
}

.quick-phrases-section::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 0.1875rem; /* 3px = 0.1875rem */
}

.quick-phrases-section::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 0.1875rem; /* 3px = 0.1875rem */
}

.quick-phrases-section::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.phrase-button {
  height: auto;
  padding: 0.5rem 1.25rem;
  font-size: 2.25rem; /* 默认字号 36px = 2.25rem (常规字号，最多容纳9字) */
  border-radius: 0.75rem;
  border: 0.1875rem solid #2d85f0; /* 3px = 0.1875rem */
  background: transparent;
  cursor: pointer;
  color: #2d85f0;
  transition: all 0.2s;
  white-space: nowrap;
  flex: 0 0 auto;
  font-weight: 500;
  min-width: auto;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* 2px 4px = 0.125rem 0.25rem */
}

/* 常规字号 - 9字以内 */
.phrase-button-normal {
  font-size: 2.25rem; /* 36px */
}

/* 中等字号 - 10-11字 */
.phrase-button-medium {
  font-size: 2rem; /* 32px */
}

/* 小字号 - 12-15字 */
.phrase-button-small {
  font-size: 1.5rem; /* 24px */
}

/* 最小字号 - 16-21字 */
.phrase-button-tiny {
  font-size: 1.25rem; /* 20px */
}

.phrase-button:hover {
  color: #1C67C2;
  border: 0.1875rem solid #1C67C2; /* 3px = 0.1875rem */
}

.phrase-button:active {
  color: #1B5DAD;
  border: 0.1875rem solid #1B5DAD; /* 3px = 0.1875rem */
}


.input-section {
  height: 28vh;
  display: flex;
  align-items: flex-start;
  width:100%;
  padding-right: 0.5rem;;
}


.footer-section {
 
  width:100%;

  display: flex;
  align-items: center; 
  justify-content: center;
  margin-top: auto; 
}

/* 历史记录按钮样式 */
.history-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  background: #f2f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.1); /* 2px 6px = 0.125rem 0.375rem */
  transition: all 0.2s;
  z-index: 100; /* 确保按钮不会被覆盖 */
}

.history-btn:hover {
  background: #e1f0ff;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15); /* 4px 8px = 0.25rem 0.5rem */
}

.history-btn img {
  width: 2.2rem;
  height: 2.2rem;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .center-view {
    padding: 1rem;
  }

  .suggestion-section {
    width: 100%;
    max-width: calc(100vw - 2rem); /* 移动端减去左右padding */
    margin-bottom: 1rem;
  }
  
  .quick-phrases-section {
    height: 3.2rem;
  }
  
  .phrase-button {
    height: auto;
    padding: 0.4rem 1rem;
    font-size: 1.125rem; /* 移动端默认字号 18px = 1.125rem */
    border-radius: 0.5rem;
    border: 0.09375rem solid #2d85f0; /* 1.5px = 0.09375rem */
  }

  /* 移动端字号调整 */
  .phrase-button-normal {
    font-size: 1.25rem; /* 20px */
  }

  .phrase-button-medium {
    font-size: 1.125rem; /* 18px */
  }

  .phrase-button-small {
    font-size: 1rem; /* 16px */
  }

  .phrase-button-tiny {
    font-size: 0.875rem; /* 14px */
  }
  .arrow-button {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1.3rem;
    border-radius: 0.5rem;
  }
  .phrases-container {
    gap: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>