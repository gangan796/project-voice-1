<template>
  <div class="right-view">
    <!-- 功能栏 -->
    <FunctionBar />
  </div>
</template>

<script setup lang="ts">
import { FunctionBar } from '@/components'

/**
 * 右侧视图 - 包含功能栏
 */
</script>

<style scoped>
.right-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2.9375rem;
  background: transparent;
  background-color: #EDF1FA;
}

/* 滚动条样式 */
.right-view::-webkit-scrollbar {
  width: 4px;
}

.right-view::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.right-view::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.right-view::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .right-view {
    padding-top: 1.5rem;
  }
}
</style> 