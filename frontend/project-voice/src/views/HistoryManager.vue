<template>
    <div class="history-manager" @click="handleBackgroundClick">
        <div class="dropdown-container"></div>
        <div class="history-content" @click.stop>
            <div class="header">
                <p class="header-title">历史记录</p>
                <div class="header-controls">
            
                    <button class="header-text" @click="handleClearAll">全部清空</button>
                </div>
            </div>
            <div class="content">
                <div v-if="appStore.history.length === 0" class="empty-history">
                    <p>暂无历史记录</p>
                </div>
                <div v-else>
                    <div v-for="item in paginatedHistory" :key="item.id" class="history-item">
                        <div class="history-content-wrapper">
                            <button class="history-text" @click="handleSelectHistory(item.text)" @mouseenter="showDropdown($event, item.text)" @mouseleave="hideDropdown">
                                <span class="text-content">{{ item.text }}</span>
                            </button>
                            
                            <span class="time">{{ item.time }}</span>
                        </div>
                        <button class="delete-btn" @click.stop="handleDelete(item.id)">
                            <img src="@/assets/icon/close.png" alt="delete" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

// 分页相关
const currentPage = ref(0)
const itemsPerPage = 3 // 每页显示3条记录，避免被按钮覆盖

// 计算当前页显示的历史记录
const paginatedHistory = computed(() => {
  const startIndex = currentPage.value * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  console.log('分页信息:', { 
    currentPage: currentPage.value, 
    startIndex, 
    endIndex, 
    totalItems: appStore.history.length,
    currentPageItems: appStore.history.slice(startIndex, endIndex).length
  })
  return appStore.history.slice(startIndex, endIndex)
})

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(appStore.history.length / itemsPerPage)
})

// 计算左箭头按钮禁用状态
const isLeftButtonDisabled = computed(() => {
  return currentPage.value <= 0 || appStore.history.length === 0
})

// 计算右箭头按钮禁用状态
const isRightButtonDisabled = computed(() => {
  return currentPage.value >= totalPages.value - 1 || appStore.history.length === 0
})

// 处理箭头点击
const handleArrowClick = (direction: 'left' | 'right') => {
  if (direction === 'left' && !isLeftButtonDisabled.value) {
    currentPage.value = Math.max(0, currentPage.value - 1)
  } else if (direction === 'right' && !isRightButtonDisabled.value) {
    currentPage.value = Math.min(totalPages.value - 1, currentPage.value + 1)
  }
}

// 处理关闭事件
const handleClose = () => {
    appStore.HistoryManagerVisible = false;
}

// 处理点击背景关闭弹窗
const handleBackgroundClick = () => {
    appStore.HistoryManagerVisible = false;
}

// 清空所有历史记录
const handleClearAll = () => {
    appStore.clearHistory();
}

// 删除单条历史记录
const handleDelete = (id: number) => {
    appStore.removeHistory(id);
}

// 选择一条历史记录并填充到输入框
const handleSelectHistory = (text: string) => {
    appStore.text = text;
    appStore.HistoryManagerVisible = false;
}

// 显示下拉菜单
const showDropdown = (event: MouseEvent, text: string) => {
    const dropdownContainer = document.querySelector('.dropdown-container') as HTMLElement;
    if (!dropdownContainer) return;
    
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const historyContentRect = document.querySelector('.history-content')?.getBoundingClientRect();
    
    if (!historyContentRect) return;
    
    // 计算下拉菜单位置：历史记录弹窗左边
    const menuWidth = 320; // 20rem ≈ 320px
    const arrowGap = 12; // 箭头宽度
    const fixedGap = 20; // 固定间距
    const leftPosition = historyContentRect.left - menuWidth - arrowGap - fixedGap; // 确保箭头到弹窗的距离固定
    const topPosition = rect.top; // 与当前项目对齐
    
    // 计算箭头相对于菜单顶部的位置
    const targetCenterY = rect.top + rect.height / 2; // 目标元素的垂直中心
    const menuTopY = topPosition; // 菜单顶部位置
    const arrowOffsetY = targetCenterY - menuTopY; // 箭头相对于菜单顶部的偏移
    
    console.log('Dropdown position:', { 
        top: topPosition, 
        left: leftPosition, 
        targetCenter: targetCenterY,
        arrowOffset: arrowOffsetY,
        historyLeft: historyContentRect.left 
    });
    
    dropdownContainer.innerHTML = `
        <div class="external-dropdown-menu" style="top: ${topPosition}px; left: ${leftPosition}px;">
            <div class="dropdown-content">${text}</div>
            <div class="dropdown-arrow" style="top: ${arrowOffsetY}px;"></div>
        </div>
    `;
}

// 隐藏下拉菜单
const hideDropdown = () => {
    const dropdownContainer = document.querySelector('.dropdown-container') as HTMLElement;
    if (dropdownContainer) {
        dropdownContainer.innerHTML = '';
    }
}
</script>
<style scoped>
.history-manager {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center;
    backdrop-filter: blur(4px);
}

.dropdown-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 200;
}

:global(.external-dropdown-menu) {
    position: fixed !important;
    width: 20rem !important;
    background: white !important;
    border: 1px solid #ddd !important;
    border-radius:  1.25rem !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
    animation: dropdownFadeIn 0.2s ease !important;
    pointer-events: auto !important;
    z-index: 201 !important;
}

:global(.external-dropdown-menu .dropdown-content) {
    padding: 1rem !important;
    font-size: 2rem !important;
    font-weight: 500 !important;
    line-height: 1.4 !important;
    color: #333 !important;
    word-wrap: break-word !important;
    white-space: pre-wrap !important;
    background: white !important;
    border-radius: 1.25rem !important;
}

:global(.external-dropdown-menu .dropdown-arrow) {
    position: absolute !important;
    right: -12px !important;
    transform: translateY(-50%) !important;
    width: 0 !important;
    height: 0 !important;
    border-left: 12px solid white !important;
    border-top: 12px solid transparent !important;
    border-bottom: 12px solid transparent !important;
    z-index: 202 !important;
}

:global(.external-dropdown-menu .dropdown-arrow::before) {
    content: '' !important;
    position: absolute !important;
    right: 1px !important;
    top: -13px !important;
    transform: translateY(0%) !important;
    width: 0 !important;
    height: 0 !important;
    border-left: 13px solid #ffffff !important;
    border-top: 13px solid transparent !important;
    border-bottom: 13px solid transparent !important;
   
}

.history-content {
    width:47.5vw;
    height:88.06vh;
    overflow-y: auto;
    background: white;
    border-radius: 1.25rem ;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 100;
}

.header {
    height:6.5rem;
    background-color: #EBEBEB;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 1.625rem;
    flex-shrink: 0; /* 防止header被压缩 */
}

.header-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}



.arrow-button {
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: 1px solid #999;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.arrow-button:hover:not(:disabled) {
    background-color: #f0f0f0;
    border-color: #666;
}

.arrow-button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.arrow-icon {
    width: 1rem;
    height: 1rem;
    filter: brightness(0) saturate(100%) invert(40%) sepia(10%) saturate(400%) hue-rotate(191deg) brightness(80%) contrast(120%);
}

.arrow-left {
    transform: rotate(270deg); /* top.png向右旋转270度作为左箭头 */
}

.arrow-right {
    transform: rotate(90deg); /* up.png向右旋转90度作为右箭头 */
}

.arrow-button:hover:not(:disabled) .arrow-icon {
    filter: brightness(0) saturate(100%) invert(20%) sepia(20%) saturate(600%) hue-rotate(191deg) brightness(60%) contrast(140%);
}

.arrow-button:disabled .arrow-icon {
    filter: brightness(0) saturate(100%) invert(70%) sepia(10%) saturate(200%) hue-rotate(191deg) brightness(90%) contrast(100%);
}

.page-info {
    font-size: 1.2rem;
    color: #666;
    min-width: 3rem;
    text-align: center;
}
.header-text{
    font-size: 1.5rem;
    font-weight: 500;
    width:8rem;
    height:2.5rem;
    background-color:#CCCCCC;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border:none;
}

.header-text:hover {
    background-color: #BBBBBB;
  
}

.header h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
}

.close-btn {
    width: 2.25rem;
    height: 2.25rem;
    margin-right: 1rem;
    cursor: pointer;
    background: #C0C3CF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, box-shadow 0.2s;
}

.close-btn img {
    width: 1.25rem;
    height: 1.25rem;
    pointer-events: none;
    filter: brightness(0) saturate(100%) invert(87%) sepia(6%) saturate(180%) hue-rotate(191deg) brightness(95%) contrast(92%);
}

.close-btn:hover {
    background: #A5A8B3;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.content {
    flex: 1;
    overflow-y: auto;
}

.empty-history {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #999;
    font-size: 1.5rem;
}

.history-item {
    position: relative; /* 为绝对定位的删除按钮提供参考 */
    display: flex;
    align-items: flex-start;
    padding: 1rem 1.6875rem; /* 增加垂直padding */
    border-bottom: 0.0625rem solid #989898;
    cursor: pointer; /* 整个项目可点击 */
    overflow: hidden;
    transition: all 0.2s ease-in-out;
 
}

.history-item:hover {
    background-color: #f8f9fa;
}

.history-content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 3rem; /* 为删除按钮预留空间 */
}

.history-text {
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 0.5rem;
    max-height: 4rem;
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease;
}

.text-content {
    font-size: 2.5rem;
    font-weight: 430;
    line-height: 1.4;
    max-height: 5.6rem; /* 大约2行的高度 (2.5rem * 1.4 * 2) */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}


.history-item:last-child {
    border-bottom: none;
}

.time {
    font-size: 1.25rem;
    color: #989898;
    padding-left: 0.5rem;
    flex-shrink: 0;
}

.delete-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 2.28vw;
    height: 2.28vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 1rem;
    top: 50%; /* 垂直居中 */
    transform: translateY(-50%); /* 垂直居中对齐 */
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    z-index: 10;
}

.history-item:hover .delete-btn {
    opacity: 1;
    visibility: visible;
}

.delete-btn img {
    width: 2.28vw;
    height: 2.28vw;
    pointer-events: none;
    filter: brightness(0) saturate(100%) invert(80%) sepia(6%) saturate(180%) hue-rotate(191deg) brightness(97%) contrast(92%);
}

.delete-btn:hover {
    background: transparent;
}
.delete-btn:hover img {
    filter: brightness(0) saturate(100%) invert(40%) sepia(10%) saturate(400%) hue-rotate(191deg) brightness(80%) contrast(120%);
}

.delete-btn:active {
    background: transparent;
}
.delete-btn:active img {
    filter: brightness(0) saturate(100%) invert(10%) sepia(30%) saturate(800%) hue-rotate(191deg) brightness(60%) contrast(140%);
}

@keyframes dropdownFadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.header-title {
    font-size: 2.5rem;
    font-weight: 500;
    color: #333;
    margin: 0;
}
</style>