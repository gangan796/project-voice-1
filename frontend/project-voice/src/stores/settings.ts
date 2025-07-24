import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { speechService } from '@/utils/speech'
import { useAppStore } from './app'

export const useSettingsStore = defineStore('settings', () => {
    const inputPreference = ref('') // 输入偏好
    const commonWords = ref('') // 常用词句
    const voiceGender = ref('female') // 语音性别
    const voiceSpeed = ref(50) // 语速
    const voiceVolume = ref(50) // 音量
    const enableSound = ref(true) // 启用音效
    const commonWordsPage = ref(0) // 常用语句的当前页码
    const isReading = ref(false) // 是否正在朗读

    // 获取常用语句，根据词语与句子分开（应用表情符号过滤）
    const getCommonWordsByType = () => {
        // 移除表情符号的辅助函数
        const removeEmojis = (text: string) => {
            return text
                // 移除所有表情符号（包括组合表情符号）
                .replace(/[\u{1f600}-\u{1f64f}]|[\u{1f300}-\u{1f5ff}]|[\u{1f680}-\u{1f6ff}]|[\u{1f1e0}-\u{1f1ff}]|[\u{2600}-\u{26ff}]|[\u{2700}-\u{27bf}]|[\u{1f900}-\u{1f9ff}]|[\u{1f018}-\u{1f270}]/gu, '')
                // 移除零宽连接符（用于组合表情符号）
                .replace(/\u200d/g, '')
                // 移除肤色修饰符
                .replace(/[\u{1f3fb}-\u{1f3ff}]/gu, '')
                // 移除变体选择符
                .replace(/[\ufe0e\ufe0f]/g, '')
                // 移除其他Unicode符号
                .replace(/[\u{2000}-\u{206f}]|[\u{2e00}-\u{2e7f}]|[\u{3000}-\u{303f}]/gu, '')
                .trim()
        }
        
        // 过滤出词语与句子
        const words = commonWords.value.split('\n').filter(word => word.trim())
        // 过滤出词语（移除表情符号后长度 < 4）
        const wordList = words.filter(word => removeEmojis(word).length < 4)
        // 过滤出句子（移除表情符号后长度 >= 4）
        const sentenceList = words.filter(word => removeEmojis(word).length >= 4)
        return { wordList, sentenceList }
    }

    // 常用语句的总页数
    const totalCommonWordsPages = computed(() => {
        const { wordList } = getCommonWordsByType()
        const words = wordList
        // 每页11个项目
        return Math.ceil(words.length / 11) || 1
    })

    /**
     * 常用语句翻页
     * @param direction - 'next' 或 'prev'
     */
    const paginateCommonWords = (direction: 'next' | 'prev') => {
        if (direction === 'next' && commonWordsPage.value < totalCommonWordsPages.value - 1) {
            commonWordsPage.value++
        } else if (direction === 'prev' && commonWordsPage.value > 0) {
            commonWordsPage.value--
        }
    }

    // 当常用词变化时，重置页码
    watch(commonWords, () => {
        commonWordsPage.value = 0
    })

    // 加载设置
    const loadSettings = () => {
        inputPreference.value = localStorage.getItem('inputPreference') || ''
        commonWords.value = localStorage.getItem('commonWords') || ''
        voiceGender.value = localStorage.getItem('voiceGender') || 'female'
        voiceSpeed.value = Number(localStorage.getItem('voiceSpeed')) || 50
        voiceVolume.value = Number(localStorage.getItem('voiceVolume')) || 50
        enableSound.value = localStorage.getItem('enableSound') !== 'false'
        commonWordsPage.value = 0 // 加载时重置页码
    }

    // 保存设置
    const saveSettings = () => {
        localStorage.setItem('inputPreference', inputPreference.value)
        localStorage.setItem('commonWords', commonWords.value)
        localStorage.setItem('voiceGender', voiceGender.value)
        localStorage.setItem('voiceSpeed', voiceSpeed.value.toString())
        localStorage.setItem('voiceVolume', voiceVolume.value.toString())
        localStorage.setItem('enableSound', enableSound.value.toString())
    }

    /**
     * 朗读输入框文本
     */
    const readInputText = () => {
        if (!enableSound.value) {
            console.log('[Settings] 音效已禁用，跳过朗读')
            return
        }

        const appStore = useAppStore()
        const text = appStore.text

        if (!text.trim()) {
            console.log('[Settings] 输入框为空，跳过朗读')
            return
        }

        // 转换设置参数为语音参数
        const rate = voiceSpeed.value / 50 // 将0-100转换为0-2
        const volume = voiceVolume.value / 100 // 将0-100转换为0-1

        console.log('[Settings] 开始朗读:', { 
            text, 
            voiceGender: voiceGender.value,
            rate,
            volume 
        })

        // 设置朗读状态为开始
        isReading.value = true

        // 调用语音服务
        speechService.speak(text, {
            voiceGender: voiceGender.value as 'male' | 'female',
            rate,
            volume,
            pitch: 1.0 // 保持正常音调
        }).then(() => {
            // 朗读完成后设置状态为结束
            isReading.value = false
        }).catch(() => {
            // 朗读出错也设置状态为结束
            isReading.value = false
        })
    }

    /**
     * 停止朗读
     */
    const stopReading = () => {
        speechService.stop()
        isReading.value = false
    }

    return {
        inputPreference,
        commonWords,
        voiceGender,
        voiceSpeed,
        voiceVolume,
        enableSound,
        commonWordsPage,
        totalCommonWordsPages,
        isReading,
        paginateCommonWords,
        getCommonWordsByType,
        loadSettings,
        saveSettings,
        readInputText,
        stopReading
    }
})