<template>
  <div class="nine-keypad">
    <div class="keypad-grid">
      <div
        v-for="key in keys"
        :key="key.id"
        class="key-container"
        @mouseenter="showDropdown(key.id)"
        @mouseleave="hideDropdown"
      >
        <button
          :class="['key-button', key.class, { 'key-active': activeDropdown === key.id }]"
          @click="handleKeyClick(key.value)"
        >
          <span v-if="key.value !== 'DELETE'" class="key-number">{{ key.number }}</span>
          <span v-if="key.value !== 'DELETE'" class="key-letters">{{ key.letters }}</span>
          <template v-if="key.value === 'DELETE'">
        
              <img class="delete-icon" src="@/assets/icon/delete.png" alt="delete" />
          
            <span class="delete-text">删除</span>
          </template>
        </button>

        <!-- 下拉菜单 -->
        <transition name="dropdown-fade">
          <div 
            v-if="activeDropdown === key.id && key.dropdown.length > 0"
            :class="['dropdown-menu', getDropdownPositionClass(key.id), getDropdownTypeClass(key.id)]"
            @mouseenter.stop="keepDropdown(key.id)"
            @mouseleave.stop="hideDropdown"
          >
            <div class="dropdown-row">
              <div
                v-for="(letter, index) in key.dropdown"
                :key="index"
                class="dropdown-item"
                @click="handleLetterClick(letter)"
              >
                {{ letter }}
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { useSettingsStore } from '@/stores/settings'
import { useAi_Gemma3Store } from '@/stores/ai_Gemma3'
import aigc from '@/assets/aigei_com.mp3'

const appStore = useAppStore()
const settingsStore = useSettingsStore()
const aiStore = useAi_Gemma3Store()

/**
 * 九宫格键盘组件
 */

// 当前显示下拉的按键ID
const activeDropdown = ref<number | null>(null)
const hoverTimer = ref<number | null>(null)

// 九宫格按键数据
const keys = ref([
  { 
    id: 1, 
    number: '0-9', 
    letters: '', 
    value: '0-9', 
    class: 'key-normal',
    dropdown: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  },
  { 
    id: 2, 
    number: '', 
    letters: 'ABC', 
    value: 'abc', 
    class: 'key-normal',
    dropdown: ['a', 'b', 'c']
  },
  { 
    id: 3, 
    number: '', 
    letters: 'DEF', 
    value: 'def', 
    class: 'key-normal',
    dropdown: ['d', 'e', 'f']
  },
  { 
    id: 4, 
    number: '', 
    letters: 'GHI', 
    value: 'ghi', 
    class: 'key-normal',
    dropdown: ['g', 'h', 'i']
  },
  { 
    id: 5, 
    number: '', 
    letters: 'JKL', 
    value: 'jkl', 
    class: 'key-normal',
    dropdown: ['j', 'k', 'l']
  },
  { 
    id: 6, 
    number: '', 
    letters: 'MNO', 
    value: 'mno', 
    class: 'key-normal',
    dropdown: ['m', 'n', 'o']
  },
  { 
    id: 7, 
    number: '', 
    letters: 'PQRS', 
    value: 'pqrs', 
    class: 'key-normal',
    dropdown: ['p', 'q', 'r', 's']
  },
  { 
    id: 8, 
    number: '', 
    letters: 'TUV', 
    value: 'tuv', 
    class: 'key-normal',
    dropdown: ['t', 'u', 'v']
  },
  { 
    id: 9, 
    number: '', 
    letters: 'WXYZ', 
    value: 'wxyz', 
    class: 'key-normal',
    dropdown: ['w', 'x', 'y', 'z']
  },
  { 
    id: 10, 
    number: '', 
    letters: ', 。! ?', 
    value: 'SYMBOL', 
    class: 'key-symbol',
    dropdown: ['，', '。', '！', '？']
  },
  { 
    id: 11, 
    number: '', 
    letters: '', 
    value: 'DELETE', 
    class: 'key-delete',
    dropdown: []
  }
])

// 显示下拉菜单（立即显示）
const showDropdown = (keyId: number) => {
  // 清除之前的计时器
  if (hoverTimer.value) {
    clearTimeout(hoverTimer.value)
    hoverTimer.value = null
  }
  
  // 立即显示下拉菜单
  activeDropdown.value = keyId
}

// 保持下拉菜单
const keepDropdown = (keyId: number) => {
  if (hoverTimer.value) {
    clearTimeout(hoverTimer.value)
    hoverTimer.value = null
  }
  activeDropdown.value = keyId
}

// 隐藏下拉菜单
const hideDropdown = () => {
  if (hoverTimer.value) {
    clearTimeout(hoverTimer.value)
    hoverTimer.value = null
  }
  activeDropdown.value = null
}

// 处理按键点击
const handleKeyClick = async (value: string) => {
  console.log('Key clicked:', value)
  
  if (value === 'DELETE') {
    const currentText = appStore.text
    if (currentText.length > 0) {
      
      // 删除一个字符
      appStore.text = currentText.slice(0, -1)
      
      // 如果删除的字符是临时输入的一部分，更新临时输入状态
      if (aiStore.hasTempInput) {
        // 减少临时输入长度
        aiStore.tempInput -= 1
      }
    }
  } else if (value === '0-9' || value === 'SYMBOL') {
    // 数字和符号键直接显示下拉菜单，不做其他操作
    // 下拉菜单选择时会直接添加到文本
  } else {
    // 字母键显示下拉菜单，不做其他操作
    // 下拉菜单选择时会添加到临时输入
  }
}

// 处理字母点击
const handleLetterClick = (letter: string) => {
  console.log('Letter selected:', letter)
  
  // 判断是数字/标点还是字母
  const isNumberOrSymbol = /^[0-9，。！？]$/.test(letter)
  
  if (isNumberOrSymbol) {
    // 数字和中文标点直接添加到文本
    appStore.text = appStore.text + letter
    // 清除临时输入（如果有）
    if (aiStore.hasTempInput) {
      aiStore.clearTempInput()
    }
  } else {
    // 字母添加到输入框
    appStore.text = appStore.text + letter
    
    // 将字母累积到临时输入
    aiStore.addTempChar()
  }
  
  hideDropdown()
  // 判断音效
  if (settingsStore.enableSound) {
    // 获取音效文件
    const audio = new Audio(aigc)
    // 播放声音
    audio.play()
  }
}

// 获取下拉菜单位置类
const getDropdownPositionClass = (keyId: number) => {
  // 根据九宫格布局确定下拉菜单位置
  // 左列: 1(0-9), 4(GHI), 7(PQRS), 10(符号) - 向右显示
  // 中列: 2(ABC), 5(JKL), 8(TUV) - 居中显示  
  // 右列: 3(DEF), 6(MNO), 9(WXYZ) - 向左显示
  // 删除键: 11 - 居中显示
  
  if ([1, 4, 7, 10].includes(keyId)) {
    return 'dropdown-right'
  } else if ([3, 6, 9].includes(keyId)) {
    return 'dropdown-left'
  } else {
    return 'dropdown-center'
  }
}

// 获取下拉菜单类型类
const getDropdownTypeClass = (keyId: number) => {
  // 根据键的类型确定下拉菜单样式
  // 数字键: 1(0-9) - 需要更宽的空间
  // 字母键: 2-9 - 标准3-4个字母
  // 符号键: 10 - 标准4个符号
  
  if (keyId === 1) {
    return 'dropdown-numbers'  // 数字键，10个数字
  } else if ([2, 3, 4, 5, 6, 8].includes(keyId)) {
    return 'dropdown-letters-3'  // 3个字母的键
  } else if ([7, 9].includes(keyId)) {
    return 'dropdown-letters-4'  // 4个字母的键
  } else if (keyId === 10) {
    return 'dropdown-symbols'  // 符号键
  } else {
    return 'dropdown-default'
  }
}
</script>

<style scoped>
.nine-keypad {
  width: 100%;
  height: 100%;
  overflow: visible !important;
  position: relative;
  border: none;
  outline: none;
}

.keypad-grid {
  display: grid;
  grid-template-columns: repeat(3, 8.59vw); /* 165px -> 8.59vw */
  grid-template-rows: repeat(4, auto);
  column-gap: 0.875rem; /* 17.5px -> 0.91vw */
  row-gap: 1.125rem; /* 25px -> 1.30vw */
  overflow: visible !important;
  position: relative;
  border: none;
  outline: none;
}

.key-container {
  position: relative !important;
  display: flex;
  flex-direction: column;
  overflow: visible !important;
  border: none;
  outline: none;
}

  /* 普通按键 */
  .key-button {
    border: none;
    outline: none;
    border-radius: 1.875rem;
    background: white;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
    position: relative;
    transform: translateY(0);
    box-shadow: 0 0.05vw 0.16vw 0 rgba(0, 0, 0, 0.3), 0 0.10vw 0.26vw 0.16vw rgba(0, 0, 0, 0.15); /* 1px 3px -> 0.05vw 0.16vw, 2px 5px 3px -> 0.10vw 0.26vw 0.16vw */
  }

.key-normal {
  height: 13.7vh;
  width: 8.59vw;
}

/* 符号键 */
.key-symbol {
  height: 9.54vh;
  width: 8.59vw;
}

/* 删除键 */
.key-delete {
  height: 9.54vh;
  width: 17.92vw; /* 344px -> 17.92vw */
  grid-column: span 2;
  flex-direction: row;
  gap: 0.52vw; /* 10px -> 0.52vw */
}

  .key-button:hover {
    background: #87D1fd;
    border: none;
    transform: translateY(-0.05vw); /* -1px -> -0.05vw */
    box-shadow: 0 0.21vw 0.42vw rgba(0, 0, 0, 0.15); /* 4px 8px -> 0.21vw 0.42vw */
  }

.key-button:hover .key-number,
.key-button:hover .key-letters,
.key-button:hover .delete-icon,
.key-button:hover .delete-text {
  color: #fefefe;
  filter: brightness(0) invert(1);
}




  /* 按键激活状态（下拉菜单显示时） */
  .key-active {
    background: #87D1fd !important;
    border: none !important;
    transform: translateY(-0.05vw) !important; /* -1px -> -0.05vw */
    box-shadow: 0 0.21vw 0.42vw rgba(45, 133, 240, 0.2) !important; /* 4px 8px -> 0.21vw 0.42vw */
    transition: background 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
  }

.key-active .key-number,
.key-active .key-letters,
.key-active .delete-icon,
.key-active .delete-text {
  color: #ffffff !important;
}

.key-number {
  font-size: 3.44rem; /* 55px -> 3.44rem */
  color: #333;
  font-weight: 500;
}

.key-letters {
  font-size: 3rem;
  color: #333;
  margin-top: 0.1rem;
}

/* 符号键字体 */
.key-symbol .key-letters {
  font-size: 3rem;
}

/* 删除键样式 */
.delete-icon {
  width: 3.33vw; /* 64px -> 3.33vw */
  height: 3.33vw;
  color: #333;
  font-weight: bold;
}

.delete-text {
  font-size: 2rem;
  color: #333;
  font-weight: 500;
}

/* 下拉菜单样式 - 居中显示（默认） */
.dropdown-menu {
  position: absolute !important;
  top: calc(100% + 0.5rem) !important;
  left: 50% !important;
  width: auto !important;
  min-width: 25vw !important;
  max-width: 35vw !important;
  height: 11.67vh !important;
  background: rgba(0, 0, 0, 0.73) !important;
  border: 1px solid #000000 !important;
  border-radius: 1.625rem !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
  z-index: 9999 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  visibility: visible !important;
  opacity: 1 !important;
  transform: translateX(-50%) !important;
  overflow: visible !important;
}

/* 数字键下拉菜单 - 10个数字需要更宽的空间 */
.dropdown-numbers {
  min-width: 45vw !important;
  max-width: 55vw !important;
}

/* 3个字母键下拉菜单 - 紧凑间距 */
.dropdown-letters-3 {
  min-width: 20vw !important;
  max-width: 25vw !important;
}

/* 4个字母键下拉菜单 - 适中间距 */
.dropdown-letters-4 {
  min-width: 25vw !important;
  max-width: 30vw !important;
}

/* 符号键下拉菜单 - 标准间距 */
.dropdown-symbols {
  min-width: 22vw !important;
  max-width: 28vw !important;
}

/* 左列按键 - 下拉菜单向右显示 */
.dropdown-right {
  left: 0 !important;
  transform: translateX(0) !important;
}

/* 右列按键 - 下拉菜单向左显示 */
.dropdown-left {
  left: auto !important;
  right: 0 !important;
  transform: translateX(0) !important;
}

/* 中列按键 - 下拉菜单居中显示 */
.dropdown-center {
  left: 50% !important;
  transform: translateX(-50%) !important;
}

/* 下拉菜单平滑动画 - 去除闪烁效果 */
.dropdown-fade-enter-active {
  transition: opacity 0.15s ease-out;
}

.dropdown-fade-leave-active {
  transition: opacity 0.1s ease-in;
}

.dropdown-fade-leave-to {
  opacity: 0;
}

/* 下拉菜单行容器 */
.dropdown-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2.5625rem;
  gap: 3.625rem;
  width: 100%;
}

/* 数字键下拉菜单的行容器 - 更紧凑的间距 */
.dropdown-numbers .dropdown-row {
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0 2rem;
}

/* 3个字母键下拉菜单的行容器 - 更均匀的分布 */
.dropdown-letters-3 .dropdown-row {
  justify-content: space-evenly;
  gap: 2rem;
  padding: 0 2rem;
}

/* 4个字母键下拉菜单的行容器 - 适中的间距 */
.dropdown-letters-4 .dropdown-row {
  justify-content: space-between;
  gap: 2.5rem;
  padding: 0 2rem;
}

/* 符号键下拉菜单的行容器 - 均匀分布 */
.dropdown-symbols .dropdown-row {
  justify-content: space-evenly;
  gap: 2rem;
  padding: 0 2rem;
}

.dropdown-item {
  flex: 0 0 auto;
  padding: 0;
  font-size: 4.6875rem;
  font-weight: 500;
  color: #c0c3cf;
  background: transparent;
  border-radius: 0;
  cursor: pointer;
  transition: font-size 0.15s ease, color 0.15s ease, transform 0.15s ease;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  position: relative;
  transform-origin: bottom center;
  min-height: 2.5rem;
  align-self: center;
}

.dropdown-item:hover {
  font-size: 6.25rem;
  color: #ffffff;
  transform: scale(1.15);
  transform-origin: bottom center;
  z-index: 10;
  position: relative;
}


/* 响应式布局 */
@media (max-width: 768px) {
  .keypad-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }
  
  .key-normal,
  .key-symbol {
    width: 11vw !important;
    height: 8vh !important;
    font-size: 1.5rem !important;
    border-radius: 0.5rem !important;
  }
  
  .key-delete {
    width: 24vw !important;
    height: 6vh !important;
    font-size: 1.2rem !important;
  }
  
  .key-letters,
  .key-number {
    font-size: 1.5rem;
  }
  
  .key-symbol .key-letters {
    font-size: 1.3rem;
  }
  

  
  .delete-text {
    font-size: 1rem;
  }
  
  .dropdown-menu {
    width: 70vw !important;
    height: 8vh !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  
  /* 移动端数字键下拉菜单 */
  .dropdown-numbers {
    width: 85vw !important;
  }
  
  /* 移动端3个字母键下拉菜单 */
  .dropdown-letters-3 {
    width: 55vw !important;
  }
  
  /* 移动端4个字母键下拉菜单 */
  .dropdown-letters-4 {
    width: 65vw !important;
  }
  
  /* 移动端符号键下拉菜单 */
  .dropdown-symbols {
    width: 60vw !important;
  }
  
  .dropdown-row {
    padding: 0 1.5rem;
    gap: 2rem;
  }
  
  /* 移动端数字键下拉菜单的行容器 */
  .dropdown-numbers .dropdown-row {
    gap: 0.8rem;
    padding: 0 1rem;
  }
  
  /* 移动端3个字母键下拉菜单的行容器 */
  .dropdown-letters-3 .dropdown-row {
    gap: 1.5rem;
    padding: 0 1.2rem;
  }
  
  /* 移动端4个字母键下拉菜单的行容器 */
  .dropdown-letters-4 .dropdown-row {
    gap: 1.2rem;
    padding: 0 1rem;
  }
  
  /* 移动端符号键下拉菜单的行容器 */
  .dropdown-symbols .dropdown-row {
    gap: 1.5rem;
    padding: 0 1.2rem;
  }
  
  .dropdown-item {
    font-size: 1.8rem;
    align-self: center;
  }
  
  .dropdown-item:hover {
    font-size: 2.2rem;
    transform: scale(1.1);
    transform-origin: bottom center;
    position: relative;
  }
  
  /* 移动端所有下拉菜单都居中显示 */
  .dropdown-right,
  .dropdown-left {
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%) !important;
  }
}
</style> 