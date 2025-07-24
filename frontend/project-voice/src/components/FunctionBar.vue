<template>
  <div class="function-bar">
    <button
      v-for="func in functions"
      :key="func.id"
      class="function-button"
      :class="`function-${func.action}`"
      @click="handleFunctionClick(func.action)"
    >
      <div class="icon-wrapper">
        <img :src="func.icon" :alt="func.label" :class="`${func.action}-icon`" />
      </div>
      <span class="function-text">{{ func.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import copyIcon from '@/assets/icon/copy.png'
import readIcon from '@/assets/icon/语音1.png'
import closeIcon from '@/assets/icon/close.png'
import languageIcon from '@/assets/icon/language.png'
import settingIcon from '@/assets/icon/setting.png'
import soundIcon1 from '@/assets/icon/语音1.png'
import soundIcon2 from '@/assets/icon/语音2.png'
import soundIcon3 from '@/assets/icon/语音3.png'
import { useAppStore } from '@/stores/app'
import { useSettingsStore } from '@/stores/settings'

const appStore = useAppStore()
const settingsStore = useSettingsStore()

/**
 * 功能栏组件
 */

// 声音动画相关
const soundIcons = [soundIcon1, soundIcon2, soundIcon3]
const currentSoundIcon = ref(soundIcons[0])
let animationTimer: number | null = null

// 监听阅读状态，自动控制动画
watch(() => settingsStore.isReading, (isReading) => {
  if (isReading) {
    startSoundAnimation()
  } else {
    stopSoundAnimation()
  }
})

// 开始声音动画
const startSoundAnimation = () => {
  let currentIndex = 0
  
  // 立即显示第一张图片
  currentSoundIcon.value = soundIcons[currentIndex]
  
  // 设置定时器循环播放
  animationTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % soundIcons.length
    currentSoundIcon.value = soundIcons[currentIndex]
  }, 300) // 每300ms切换一张图片
}

// 停止声音动画
const stopSoundAnimation = () => {
  if (animationTimer) {
    clearInterval(animationTimer)
    animationTimer = null
  }
  // 回到第一张图片
  currentSoundIcon.value = soundIcons[0]
}

// 组件卸载时清理定时器
onUnmounted(() => {
  if (animationTimer) {
    clearInterval(animationTimer)
  }
})

// 本地PNG图标定义
const icons = {
  copy: copyIcon,
  speak: readIcon,
  stop: closeIcon,
  language: languageIcon,
  settings: settingIcon
}

// 动态计算朗读按钮的图标 - 根据状态显示不同图标
const speakButtonIcon = computed(() => {
  return settingsStore.isReading ? currentSoundIcon.value : icons.speak
})

// 功能按钮数据
const functions = computed(() => [
  { id: 1, label: '复制', icon: icons.copy, action: 'copy' },
  { id: 2, label: '朗读', icon: speakButtonIcon.value, action: 'speak' },
  { id: 3, label: '语言', icon: icons.language, action: 'language' },
  { id: 4, label: '设置', icon: icons.settings, action: 'settings' }
])

// 处理功能点击
const handleFunctionClick = (action: string) => {
  if (action === 'copy') {
    // 复制文本 - 根据环境选择复制方式
    if (navigator.clipboard && window.isSecureContext) {
      // HTTPS环境使用原生clipboard API
      navigator.clipboard.writeText(appStore.text)
        .then(() => console.log('文本已复制到剪贴板'))
        .catch(err => {
          console.error('复制失败:', err)
          // 失败后使用Pinia模拟
          appStore.copyText()
        })
    } else {
      // 非HTTPS环境使用Pinia状态模拟
      appStore.copyText()
    }
  }
  
  if (action === 'speak') {
    if (settingsStore.isReading) {
      // 如果正在朗读，则停止
      console.log('停止朗读')
      settingsStore.stopReading()
    } else {
      // 如果没有朗读，则开始朗读
      console.log('开始朗读文本')
      settingsStore.readInputText()
    }
  }
  
  if (action === 'language') {
    // 语言切换功能（预留）
    console.log('语言切换功能')
  }
  
  if (action === 'settings') {
    console.log('打开设置面板')
    appStore.SettingsPanelVisible = true
  }
}
</script>

<style scoped>
.function-bar {
  display: flex;
  flex-direction: column;
  gap: 2.5625rem; 
  align-items: center;
}

.function-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem; /* 5px -> 0.26vw */
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.2s;
  color: #000000;
}

.function-button:hover {
  color: #2D85F0;
}

.function-button:active {
  color: #1B5DAD;
}

/* 图标容器 */
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* PNG图标样式 */
.icon-wrapper img {
  filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
  transition: filter 0.2s ease;
  width: 4vw; /* 66px -> 3.44vw */
  height:4vw; /* 66px -> 3.44vw */
}

/* 悬停状态 - 蓝色 #2D85F0 (标准蓝色) */
.function-button:hover .icon-wrapper img {
  filter: brightness(0) saturate(100%) invert(41%) sepia(93%) saturate(1352%) hue-rotate(205deg) brightness(99%) contrast(101%);
}

/* 点击状态 - 深蓝色 #1B5DAD (使用之前悬停的较暗效果) */
.function-button:active .icon-wrapper img {
  filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(203deg) brightness(97%) contrast(97%);
}

/* 特别处理设置图标的点击状态 */
.function-settings:active .settings-icon {
  filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(203deg) brightness(97%) contrast(97%) !important;
}

/* 各个图标的具体尺寸 */
.copy-icon {
  width: 3.44vw; /* 66px -> 3.44vw */
  height: 5.11vh;
}

.speak-icon {
  width: 3.33vw; /* 64px -> 3.33vw */
  height: 5.93vh;
}

/* 声音动画图标样式 - 与朗读图标保持一致 */
.speak-icon[src*="语音1"],
.speak-icon[src*="语音2"],
.speak-icon[src*="语音3"] {
  width: 3.33vw; /* 64px -> 3.33vw */
  height: 5.93vh;
}

.stop-icon {
  width: 3.33vw; /* 64px -> 3.33vw */
  height: 5.93vh;
}

.language-icon {
  width: 3.54vw; /* 68px -> 3.54vw */
  height: 6.3vh;
}

.settings-icon {
  width: 2.92vw; /* 56px -> 2.92vw */
  height: 3.19vh;
}

.function-text {
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: inherit;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .function-bar {
    flex-direction: row;
    gap: 1.56vw; /* 30px -> 1.56vw */
    padding: 0.52vw; /* 10px -> 0.52vw */
  }
  
  .icon-wrapper {
    width: 2rem;
    height: 2rem;
  }
  
  .copy-icon,
  .speak-icon,
  .speak-icon[src*="语音1"],
  .speak-icon[src*="语音2"],
  .speak-icon[src*="语音3"],
  .stop-icon,
  .language-icon,
  .settings-icon {
    width:3.04vh;
    height:3.04vh;
  }
  
  .function-text {
    font-size: 0.875rem;
  }
}
</style> 