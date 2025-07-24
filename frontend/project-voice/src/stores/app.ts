import { defineStore } from 'pinia'
import { ref } from 'vue'
import {useSettingsStore} from './settings'

export interface HistoryItem {
  id: number
  text: string
  time: string
}

export const useAppStore = defineStore('app', () => {
  const text = ref('')
  // 设置面板开关
  const SettingsPanelVisible = ref(false)
  // 历史记录开关
  const HistoryManagerVisible = ref(false)
  // 联想句子输出
  const suggestionOutput = ref('')

  const settingsStore = useSettingsStore()
  
  // 历史记录
  const history = ref<HistoryItem[]>([])

  /**
   * 添加历史记录
   * @param newText 要添加的文本
   */
  const addHistory = (newText: string) => {
    if (!newText.trim()) return;

    // 避免添加重复的记录
    if (history.value.some(item => item.text === newText)) return;
    
    const newEntry: HistoryItem = {
      id: Date.now(),
      text: newText,
      time: new Date().toLocaleString('zh-CN', { hour12: false })
    }
    
    // 从头部添加，实现时间倒序
    history.value.unshift(newEntry)

    // 保持最多8条记录
    if (history.value.length > 8) {
      history.value.pop()
    }

    console.log('[History] 添加新记录:', newEntry)
  }

  /**
   * 删除单条历史记录
   * @param id 要删除的记录ID
   */
  const removeHistory = (id: number) => {
    history.value = history.value.filter(item => item.id !== id)
    console.log('[History] 删除记录:', id)
  }

  /**
   * 清空所有历史记录
   */
  const clearHistory = () => {
    history.value = []
    console.log('[History] 已清空所有记录')
  }
  
  // 模拟剪贴板状态
  const copiedText = ref('')
  const isCopied = ref(false)

  /**
   * 模拟复制文本到剪贴板（非HTTPS环境使用）
   * @param text 要复制的文本
   */
  const copyText = () => {
    copiedText.value = text.value
    isCopied.value = true
    
    // 3秒后重置复制状态
    setTimeout(() => {
      isCopied.value = false
    }, 3000)
    
    console.log('[Copy] 文本已复制（模拟）:', text)
  }
  // 模拟粘贴（非HTTPS环境使用）
  const pasteText = (qie: 'ipf' | 'cws') => {
    if(qie === 'ipf') {
      settingsStore.inputPreference = settingsStore.inputPreference + copiedText.value
    }
    else {
      settingsStore.commonWords = settingsStore.commonWords + copiedText.value
    }

    console.log('[Paste] 文本已粘贴（模拟）:', copiedText)
  }

  return {
    text,
    SettingsPanelVisible,
    HistoryManagerVisible,
    suggestionOutput,
    history,
    copiedText,
    isCopied,
    addHistory,
    removeHistory,
    clearHistory,
    copyText,
    pasteText
  }
})