<template>
  <div class="input-textarea">
    <!-- 文本输入区域 -->
    <div class="textarea-wrapper">
      <textarea
        v-model="displayText"
        placeholder="请输入您想写的内容" 
        maxlength="60"
      >
      </textarea>
      
      <!-- 字符计数显示 -->
      <div class="char-counter">
        {{ appStore.text.length }}/60
      </div>
      
      <!-- 底部操作栏 -->
      <div class="action-bar">
        <button class="action-button clear-button" @click="handleClear">
          <img :src="clearIcon" alt="清除" class="button-icon">
          <span class="button-text">清除</span>
        </button>
        
        <div class="divider"></div>
        
        <button class="history-button" @click="handleHistory">
          <img :src="historyIcon" alt="历史记录" class="history-icon">
          <span class="history-text">历史记录</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import clearIcon from '@/assets/icon/clear.png'
import historyIcon from '@/assets/icon/history.png'
import { useAppStore } from '@/stores/app'
import { computed } from 'vue'

const appStore = useAppStore()

/**
 * 计算属性：用于处理文本输入和自动截取
 * 当文本超过60个字符时自动截取前60个字符
 */
const displayText = computed({
  // 获取显示的文本
  get: () => appStore.text,
  // 设置文本时自动处理截取
  set: (value: string) => {
    // 如果文本超过60个字符，截取前60个字符
    if (value.length > 60) {
      appStore.text = value.substring(0, 60)
    } else {
      appStore.text = value
    }
  }
})

/**
 * 输入框组件
 */

// 清除文本
const handleClear = () => {
  // 添加历史记录
  if (appStore.text.length > 0) {
    appStore.addHistory(appStore.text)
  }
  appStore.text = ''
}

// 历史记录 - 切换显示/隐藏
const handleHistory = () => {
  appStore.HistoryManagerVisible = !appStore.HistoryManagerVisible
}
</script>

<style scoped>
.input-textarea {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border: 2px solid #989898;
  border-radius: 1.5rem;
  overflow: hidden;
}

/* 文本输入区域 */
.textarea-wrapper {
  flex: 1;
  
  display: flex;
  flex-direction: column;
  position: relative;
}

textarea {
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 3rem;
  line-height: 1.4;
  color: #333;
  background: transparent;
  font-family: inherit;
  overflow: hidden; /* 去掉滚动条 */
  padding-left:1.3125rem
}

textarea::placeholder {
  color: #999;
}

/* 字符计数器 */
.char-counter {
  position: absolute;
  bottom: 5rem; /* 在操作栏上方 */
  right: 1rem;
  font-size: 1.5rem;
  color: #848484;
  
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  
  z-index: 10;
}

/* 底部操作栏 */
.action-bar {
  display: flex;
  height: 4.69rem; /* 75px -> 4.69rem */
  background: rgb(255, 255, 255);
  border-top: 0.125rem solid #989898;
  position: relative;
}

.action-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.04vw; /* 20px -> 1.04vw */
  border: none;
  background: white;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.action-button:hover {
  background: white;
}

.action-button:active {
  background: white;
}

/* 分割线 */
.divider {
  width: 0.125rem;
  height: 100%;
  background-color: #989898;
  align-self: center;
}

/* 按钮图标 */
.button-icon {
  width: 2.19vw; /* 42px -> 2.19vw */
  height: 2.19vw;
  transition: filter 0.2s;
}

/* 按钮文字 */
.button-text {
  font-size: 2rem;
  font-weight: 500;
  color: #666666;
  transition: color 0.2s;
}

/* 清除按钮悬浮效果 */
.clear-button:hover .button-text {
  color: #D95D5D;
}

.clear-button:hover .button-icon {
  filter: invert(61%) sepia(18%) saturate(1095%) hue-rotate(312deg) brightness(95%) contrast(88%);
}

/* 清除按钮点击效果 */
.clear-button:active .button-text {
  color: #A72E2E;
}

.clear-button:active .button-icon {
  filter: invert(25%) sepia(60%) saturate(1800%) hue-rotate(345deg) brightness(65%) contrast(100%);
}

/* 历史记录按钮独立样式 */
.history-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.04vw;
  border: none;
  background: white;
  cursor: pointer;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 10; /* 恢复到你设置的层级 */
  transition: background 0.2s;
}

.history-button:hover {
  background: white;
}

.history-button:active {
  background: white;
}

/* 历史记录按钮图标 */
.history-icon {
  width: 2.19vw;
  height: 2.19vw;
  transition: filter 0.2s;
}

/* 历史记录按钮文字 */
.history-text {
  font-size: 2rem;
  font-weight: 500;
  color: #666666;
  transition: color 0.2s;
}

/* 历史记录按钮悬浮效果 */
.history-button:hover .history-text {
  color: #2D85F0;
}

.history-button:hover .history-icon {
  filter: invert(1%) sepia(65%) saturate(2100%) hue-rotate(210deg) brightness(101%) contrast(91%);
}

/* 历史记录按钮点击效果 */
.history-button:active .history-text {
  color: #1B5DAD;
}

.history-button:active .history-icon {
  filter: invert(29%) sepia(70%) saturate(1200%) hue-rotate(215deg) brightness(70%) contrast(95%);
}

/* 响应式布局 */
@media (max-width: 768px) {
  .input-textarea {
    border-radius: 1rem;
  }
  
  textarea {
    font-size: 1rem;
    line-height: 1.4;
    padding: 1.04vw 1.04vw 0 1.56vw; /* 20px 20px 0 30px -> 1.04vw 1.04vw 0 1.56vw */
  }
  
  .action-bar {
    height: 3.5rem;
  }
  
  .action-button {
    gap: 0.83vw; /* 16px -> 0.83vw */
  }
  
  .button-icon {
    width: 1.56vw; /* 30px -> 1.56vw */
    height: 1.56vw;
  }
  
  .button-text {
    font-size: 1.5rem;
  }
  
  /* 历史记录按钮响应式样式 */
  .history-icon {
    width: 1.56vw;
    height: 1.56vw;
  }
  
  .history-text {
    font-size: 1.5rem;
  }
  
  /* 字符计数器响应式样式 */
  .char-counter {
    bottom: 4rem; /* 调整移动端位置 */
    right: 0.5rem;
    font-size: 1.2rem;
    padding: 0.15rem 0.4rem;
  }
}
</style>