<script setup lang="ts">
import { onMounted } from 'vue'
import { LeftView, CenterView, RightView, SettingsPanel, HistoryManager } from '@/views'
import { useAppStore } from '@/stores/app'
import { useSettingsStore } from '@/stores/settings'

const appStore = useAppStore()
const settingsStore = useSettingsStore()

/**
 * App - 主应用组件
 * 负责三列布局和视图组件协调
 */

// 读取设置本地存储
onMounted(() => {
  settingsStore.loadSettings()
})

</script>

<template>
  <div class="app-layout">
    <!-- 左侧：九宫格键盘和辅助词 -->
    <aside class="left-panel">
      <LeftView />
    </aside>

    <!-- 中间：联想句子和输入框 -->
    <main class="center-panel">
      <CenterView />
    </main>
    <!-- 弹出窗口 -->
    <!-- 设置面板 -->
    <div v-if="appStore.SettingsPanelVisible" class="settings-panel">
      <SettingsPanel />
    </div>
    <!-- 历史记录 -->
    <HistoryManager v-if="appStore.HistoryManagerVisible" class="history-manager" />

    <!-- 右侧：功能栏 -->
    <aside class="right-panel">
      <RightView />
    </aside>
  </div>
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Roboto', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;

}

/* 主容器盒子 */
.app-layout {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background: white;
  border-radius: 0.75rem; /* 12px = 0.75rem */
  overflow: hidden;
  display: grid;
  grid-template-areas: "left center right";
  grid-template-columns: 30.89vw 61.56vw 7.55vw;/* 30.89+61.56+7.55=100 */
  gap: 0; 
  background: #EEF1F9;
}

/* 各面板样式 */
.left-panel,
.center-panel,
.right-panel {
  position: relative;
}

.left-panel {
  grid-area: left;
  background: transparent;

}

.center-panel {
  grid-area: center;
  background: transparent;
  
  background-color:white;
}

.right-panel {
  background: #142246;
  grid-area: right;
  background: transparent;

}
/* 设置面板 */
.settings-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.25rem); /* 4px = 0.25rem */
}

/* 历史记录 */
.history-manager {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9997;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.25rem); /* 4px = 0.25rem */
}

/* CSS变量定义 */
:root {
  --color-primary: #0c2747;
  --color-secondary: #E3F2FD;
  --color-surface: #ffffff;
  --color-on-surface: #202124;
  --color-outline: #bdbdbd;
  --shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* 2px 4px = 0.125rem 0.25rem */
  --shadow-md: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15); /* 4px 8px = 0.25rem 0.5rem */
  --shadow-lg: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); /* 8px 16px = 0.5rem 1rem */
}

/* 11英寸iPad适配 (iPad Air, iPad Pro 11") - 横屏 */
@media (min-width: 820px) and (max-width: 1024px) and (orientation: landscape) {
  #app {
    font-size: 0.9rem; /* 14.4px */
    padding: 0.625rem; /* 10px = 0.625rem */
  }
  
  .app-layout {
    grid-template-areas: "left center right";
    grid-template-columns: 28vw 64vw 8vw;
    grid-template-rows: 1fr;
    border-radius: 0.5rem;
  }
  
  .left-panel {
    border-right: 0.0625rem solid #e0e0e0; /* 1px = 0.0625rem */
  }
  
  .center-panel {
    border-right: 0.0625rem solid #e0e0e0;
  }
}

/* 12英寸iPad适配 (iPad Pro 12.9" 早期版本) - 横屏 */
@media (min-width: 1024px) and (max-width: 1200px) and (orientation: landscape) {
  #app {
    font-size: 1rem; /* 16px */
    padding: 0.75rem; /* 12px = 0.75rem */
  }
  
  .app-layout {
    grid-template-areas: "left center right";
    grid-template-columns: 30vw 62vw 8vw;
    grid-template-rows: 1fr;
    border-radius: 0.625rem; /* 10px = 0.625rem */
  }
  
  .left-panel {
    border-right: 0.0625rem solid #e0e0e0;
  }
  
  .center-panel {
    border-right: 0.0625rem solid #e0e0e0;
  }
}

/* 12.9英寸iPad适配 (iPad Pro 12.9" 新版本) - 横屏 */
@media (min-width: 1200px) and (max-width: 1366px) and (orientation: landscape) {
  #app {
    font-size: 1.125rem; /* 18px = 1.125rem */
    padding: 1rem; /* 16px = 1rem */
  }
  
  .app-layout {
    grid-template-areas: "left center right";
    grid-template-columns: 32vw 60vw 8vw;
    grid-template-rows: 1fr;
    border-radius: 0.75rem;
  }
  
  .left-panel {
    border-right: 0.0625rem solid #e0e0e0;
  }
  
  .center-panel {
    border-right: 0.0625rem solid #e0e0e0;
  }
}

/* iPad竖屏通用适配 (所有iPad尺寸) */
@media (min-width: 768px) and (max-width: 1366px) and (orientation: portrait) {
  #app {
    font-size: 1rem;
    padding: 0.5rem;
  }
  
  .app-layout {
    grid-template-areas: 
      "center"
      "left"
      "right";
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 2fr 1fr;
    border-radius: 0.5rem;
  }
  
  .left-panel,
  .center-panel {
    border-right: none;
    border-bottom: 0.0625rem solid #e0e0e0;
  }
  
  .right-panel {
    max-height: 25vh;
    overflow-y: auto;
  }
}

/* 小平板布局 (iPad mini等) */
@media (min-width: 768px) and (max-width: 820px) {
  #app {
    font-size: 0.875rem; /* 14px = 0.875rem */
    padding: 0.5rem;
  }
  
  .app-layout {
    grid-template-areas: 
      "center right"
      "left left";
    grid-template-rows: 1fr 1fr;
    border-radius: 0.5rem;
  }
  
  .left-panel {
    border-right: none;
    border-top: 0.0625rem solid #e0e0e0;
  }
}

/* 手机布局 */
@media (max-width: 768px) {
  #app {
    font-size: 0.875rem; /* 14px = 0.875rem */
    padding: 0;
  }
  
  .app-layout {
    border-radius: 0;
    box-shadow: none;
    grid-template-areas: 
      "center"
      "left"
      "right";
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr auto;
  }
  
  .left-panel,
  .center-panel {
    border-right: none;
  }
  
  .left-panel {
    border-top: 0.125rem solid #e0e0e0; /* 2px = 0.125rem */
    border-bottom: 0.125rem solid #e0e0e0; /* 2px = 0.125rem */
  }
  
  .right-panel {
    max-height: 35vh;
    overflow-y: auto;
  }
}

/* 大屏显示器 */
@media (min-width: 1920px) {
  #app {
    font-size: 1rem; /* 16px = 1rem */
  }
  /*
  .app-layout {
    max-width: 1920px;
    max-height: 1080px;
  }*/
}

</style>