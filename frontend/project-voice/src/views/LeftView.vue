<template>
  <div class="left-view">
    <!-- 九宫格键盘 -->
    <div class="keypad-section">
      <NineKeypad />
    </div>
    
    <!-- 分割线 -->
    <div class="divider"></div>
    
    <!-- 辅助词 -->
    <div class="auxiliary-section">
      <AuxiliaryWords />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NineKeypad, AuxiliaryWords } from '@/components'

/**
 * 左侧视图 - 包含九宫格键盘和辅助词
 */
</script>

<style scoped>
.left-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30.89vw;
  background-color: #EDF1FA;
  position: relative;
}

/* 九宫格键盘区域 */
.keypad-section {
  flex: 0 0 auto;
  /* background: #EDF1FA; */
  border-radius: 6px;
  padding-top: 2.125rem;
  padding-left: 2.125rem;
  padding-right: 2.25rem;
  padding-bottom: 1.531rem;
  overflow: visible;
}

/* 分割线 */
.divider {
  position: relative;
  width: 100%;
  height: 0.0625rem;
  background-color: #959595;
  align-self: center;
  flex: 0 0 auto;
}

/* 辅助词区域 */
.auxiliary-section {
  flex: 1;
  /* background: #EDF1FA; */
  border-radius: 6px;
  padding-top: 1.3438rem;
  padding-left: 2.125rem;
  padding-right: 3.125rem;
  padding-bottom: 2.125rem;
  overflow: visible;
  min-height: 0;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .left-view {
    width: 100%;
  }
  
  .keypad-section {
    padding: 1rem;
  }
  
  .auxiliary-section {
    padding: 1rem;
  }
  
  .divider {
    width: 90%;
  }
}
</style> 