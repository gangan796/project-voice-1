<template>
    <main class="settings-container">
        <!-- 头部区域 -->
        <div class="settings-header">
            <h1 class="settings-title">设置</h1>
            <img src="@/assets/icon/close.png" alt="close" class="close-btn" @click="handleClose" />
        </div>
        
 
        <!-- 主体内容区 -->
        <div class="settings-body">
            <!-- 左侧选项卡列表 -->
            <div class="tab-list">
                <button 
                    @click="handleTabClick(1)"
                    :class="{ active: activeTab === 1 }"
                    class="tab-item"
                >
                    <span>个性定制</span>
                </button>
                <button 
                    @click="handleTabClick(2)"
                    :class="{ active: activeTab === 2 }"
                    class="tab-item"
                >
                    <span>语音设置</span>
                </button>
            </div>
            
            <!-- 右侧内容区 -->
            <div class="content-area">
                <!-- 个性定制 -->
                <div v-if="activeTab === 1" class="tab-panel">
                    <div class="setting-group">
                        <div class="tab-buttons-container">
                            <div class="preference-box">
                                <div class="preference-item" 
                                     :class="{ active: sevTab === 1 }"
                                     @click="handsevTab(1)">
                                    输入偏好
                                </div>
                                <div class="preference-item" 
                                     :class="{ active: sevTab === 2 }"
                                     @click="handsevTab(2)">
                                    常用词句
                                </div>
                            </div>
                        </div>
                        
                        <!-- 操作按钮独立区域 -->
                        <div class="textarea-top-buttons">
                            <div class="textarea-btn-wrapper">
                                <button class="textarea-btn" @click="sevTab === 1 ? pasteInputPreference() : pasteCommonWords()">
                                    <img src="@/assets/icon/paste.png" alt="粘贴" />
                                </button>
                                <div class="textarea-btn-tooltip">粘贴</div>
                            </div>
                            <div class="textarea-clear-button">
                                <button class="textarea-clear-btn" @click="sevTab === 1 ? clearInputPreference() : clearCommonWords()">清空</button>
                            </div>
                        </div>
                        <div v-if="sevTab === 1">
                            <div class="textarea-container">
                                <div class="textarea-wrapper">
                                    <textarea v-model="settingsStore.inputPreference" class="custom-textarea" placeholder="请在这里输入你的相关信息，帮助默筏更好地生成与你有关的联想词汇选项

比如：我叫小明，居住在上海，喜欢吃小笼包"></textarea>
                                </div>
                            </div>
                        </div>
                        <div v-if="sevTab === 2">
                            <div class="textarea-container">
                                <div class="textarea-wrapper">
                                    <textarea v-model="settingsStore.commonWords" class="custom-textarea" placeholder="你可以在这里输入你常用的字词和语句，默筏会显示在首页，方便你选取使用"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 语音设置 -->
                <div v-if="activeTab === 2" class="tab-panel">
                    <div class="setting-group">
                        <h2 class="tts-title">TTS语音</h2>
                        
                        <!-- 语音选择 -->
                        <div class="voice-selection">
                            <button 
                                class="voice-button"
                                :class="{ active: settingsStore.voiceGender === 'female' }"
                                @click="selectVoiceGender('female')"
                            >
                                女声
                            </button>
                            <button 
                                class="voice-button"
                                :class="{ active: settingsStore.voiceGender === 'male' }"
                                @click="selectVoiceGender('male')"
                            >
                                男声
                            </button>
                        </div>
                        
                        <!-- 语速设置 -->
                        <div class="slider-group">
                            <div class="slider-row">
                                <span class="slider-label">语速</span>
                                <div class="slider-container">
                                    <input 
                                        type="range" 
                                        min="0" 
                                        max="100" 
                                        step="5"
                                        v-model="settingsStore.voiceSpeed"
                                        class="slider"
                                        :style="{ '--slider-progress': settingsStore.voiceSpeed + '%' }"
                                        @input="updateVoiceSpeed"
                                    />
                                    <span class="slider-value">{{ settingsStore.voiceSpeed }}%</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 音量设置 -->
                        <div class="slider-group">
                            <div class="slider-row">
                                <span class="slider-label">音量</span>
                                <div class="slider-container">
                                    <input 
                                        type="range" 
                                        min="0" 
                                        max="100" 
                                        step="5"
                                        v-model="settingsStore.voiceVolume"
                                        class="slider"
                                        :style="{ '--slider-progress': settingsStore.voiceVolume + '%' }"
                                        @input="updateVoiceVolume"
                                    />
                                    <span class="slider-value">{{ settingsStore.voiceVolume }}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="toggle-item">
                            <span class="toggle-label">启用音效</span>
                            <div class="toggle-switch" @click="toggleSound">
                                <div class="toggle-track" :class="{ active: settingsStore.enableSound }">
                                    <div class="toggle-thumb" :class="{ active: settingsStore.enableSound }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 保存按钮 -->
                <div class="save-button-container">
                    <button class="save-btn" @click="handleSave">保存</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { useSettingsStore } from '@/stores/settings'

const appStore = useAppStore()
const settingsStore = useSettingsStore()

/**
 * 设置面板组件
 */


const activeTab = ref(1) // 默认显示第一个选项卡
const sevTab = ref(1) // 默认显示第一个选项卡

const pasteInputPreference = () => {
    // 粘贴输入偏好
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.readText().then(text => {
            settingsStore.inputPreference = settingsStore.inputPreference + text
            console.log('[Paste] 文本已粘贴:', text)
        })
        .catch(err => {
            console.error('粘贴失败:', err)
            appStore.pasteText('ipf')
        })
    } 
    else {
        appStore.pasteText('ipf')
    }
}

const deleteInputPreference = () => {
    // 删除输入偏好
    settingsStore.inputPreference = settingsStore.inputPreference.slice(0, -1)
}

const clearInputPreference = () => {
    // 清空输入偏好
    settingsStore.inputPreference = ''
}

const pasteCommonWords = () => {
    // 粘贴常用词句
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.readText().then(text => {
            settingsStore.commonWords = settingsStore.commonWords + text
            console.log('[Paste] 文本已粘贴:', text)
        })
        .catch(err => {
            console.error('粘贴失败:', err)
            appStore.pasteText('cws')
        })
    } 
    else {
        appStore.pasteText('cws')
    }
}

const deleteCommonWords = () => {
    // 删除常用词句
    settingsStore.commonWords = settingsStore.commonWords.slice(0, -1)
}

const clearCommonWords = () => {
    // 清空常用词句
    settingsStore.commonWords = ''
}

/**
 * 处理选项卡点击
 * @param tab - 选项卡编号
 */
const handleTabClick = (tab: number) => {
    // 切换
    activeTab.value = tab
}

const handsevTab = (tab: number) => {
    sevTab.value = tab
}

/**
 * 处理关闭按钮点击
 */
const handleClose = () => {
    // 关闭
    appStore.SettingsPanelVisible = false
}

/**
 * 切换音效开关
 */
const toggleSound = () => {
    settingsStore.enableSound = !settingsStore.enableSound
}

/**
 * 选择语音性别
 * @param gender - 性别
 */
const selectVoiceGender = (gender: string) => {
    settingsStore.voiceGender = gender
}

/**
 * 更新语音语速
 */
const updateVoiceSpeed = () => {
    const rate = settingsStore.voiceSpeed / 100
}

/**
 * 更新语音音量
 */
const updateVoiceVolume = () => {
    const pitch = settingsStore.voiceVolume / 100
}

/**
 * 滚动到文本区域顶部
 */
const scrollToTop = (event: Event) => {
    const textarea = (event.target as HTMLElement).closest('.textarea-wrapper')?.querySelector('.custom-textarea');
    if (textarea instanceof HTMLTextAreaElement) {
        textarea.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

/**
 * 滚动到文本区域底部
 */
const scrollToBottom = (event: Event) => {
    const textarea = (event.target as HTMLElement).closest('.textarea-wrapper')?.querySelector('.custom-textarea');
    if (textarea instanceof HTMLTextAreaElement) {
        textarea.scrollTo({
            top: textarea.scrollHeight,
            behavior: 'smooth'
        });
    }
}

/**
 * 保存设置（兼容性方法）
 */
const handleSave = () => {
    settingsStore.saveSettings()
    appStore.SettingsPanelVisible = false
}

// 清空功能预留
</script>

<style scoped>
.settings-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    margin:5.625rem 14.5625rem;
    width: 78.78vw;
    height: 46vw;
    background: white;
    border-radius: 0.75vw;
    box-shadow: 0 0.417vw 1.667vw rgba(0, 0, 0, 0.1);
    overflow: hidden;
    z-index: 9999;
}

.settings-header {
    position: relative;
    height:7.09375rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    box-shadow: inset 0 -0.0625rem 0 0 #C0C4CF;
}

.settings-title {
    margin: 0;
    font-size: 3rem; /* 3rem = 48px */
    font-weight: bold;
    color: #333;
    line-height: 1;
    margin-left: 2rem;
    margin-top: 2.25rem;
    
}

.close-btn {
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 2.25rem;
    margin-top: 2.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    
    filter: invert(1%) sepia(65%) saturate(20%) brightness(101%) contrast(10%);
}

.close-btn:hover{
     filter: invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(40%);
}

.close-btn:active {
    filter: invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(90%);
}

.settings-body {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.tab-list {
    display: flex;
    flex-direction: column;
    overflow: visible;
    box-shadow: inset -0.0625rem  0 0 0 #C0C4CF;
}

.tab-item {
    width: 14.27vw;
    height: 7.57vw; /* 13.06vh = 141.048px */
    background: rgb(255, 255, 255);
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 2.5rem; 
    font-weight: 550;
    color: #3E3E3E;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: inset -0.0625rem  0 0 0 #C0C4CF;
}

.tab-item span {
    position: relative;
    z-index: 2;
}


.tab-item.active {
    background: rgba(111, 201, 255, 0.11);
    color: #2d85f0;
    position: relative;
    box-shadow: inset -0.3125vw 0 0 0 #2D85f0;
}

.content-area {
    flex: 1;
    width: 61.51vw; /* 73.8125rem = 1181px */
    max-height: 40.99vw; /* 49.1875rem = 787px */
    /* background: #005cb8; */
    position: relative;
    display: flex;
    flex-direction: column;
}

.tab-panel {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 3.125vw; /* 为保存按钮留出空间 */
}

.setting-group {
    
    padding:0;
    display: flex;
    flex-direction: column;
    /* background: rgb(209, 143, 143); */
    
 
}

/* 启用音效区域的独立样式 */
.setting-group-toggle {
   /* background-color: #8265c1; */
   padding-top: 7.4375rem;
   padding-left: 3.375rem;
   
}

.setting-group-toggle .toggle-group {
    display: flex;
    flex-direction: column;
    gap:3.4375rem;
}

.setting-group-toggle .toggle-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.setting-group-toggle .toggle-label {
    font-size: 2.25rem;
    color: #333;
    
}

.setting-group-toggle .toggle-track {
    width: 3.5rem;
    height: 2rem;
    background: #e0e0e0;
    border-radius: 1rem;
    position: relative;
    transition: all 0.3s ease;
}

.toggle-track.active {
    background: #2d85f0;
}

.toggle-thumb.active {
    left: 2.9rem;
}

.setting-group-toggle .toggle-track.active {
    background: #2d85f0;
}



.setting-header {
    display: flex;
    align-items: center;
    
}

.setting-group h2 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 600;
    color: #000000;
    margin-left: 3.375rem;
    margin-top: 4.5rem;
}

/* TTS语音标题独立样式 */
.setting-group .tts-title {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 500 !important;
    color: #000000 !important;
    margin-left: 3.375rem;
    margin-top: 2.5rem;
}


.radio-label {
    display: flex;
    align-items: center;
    gap: 0.5625rem;
    cursor: pointer;
    font-size: 2.25rem;
    font-weight: 600 !important;
    color: #333;
    transition: background 0.2s;
}

.radio-label span {
    font-weight: 500 !important;
}

.setting-desc {
    margin: 0;
    font-size:1.625rem;
    color: #989898;
    white-space: nowrap;
    margin-left: 1.3125rem;
    margin-top: 4.5rem;
    line-height: 1;
}

.radio-group {
    display: flex;
    gap: 3.125rem;
    margin-left:2.25rem;
    /* background-color: red; */
    margin-top: 2.25rem;
  
}

.radio-label {
    display: flex;
    align-items: center;
    gap: 0.5625rem;
    cursor: pointer;
    font-size: 2.25rem;
    font-weight: 600 !important;
    color: #333;
    transition: background 0.2s;
}



.radio-label:hover {
    background: #f8f9fa;
    
}

.radio-label input[type="radio"] {
    margin: 0;
    accent-color: #2d85f0;
    width:1.46vw;
    height:1.46vw;
}

.toggle-group {
    display: flex;
    flex-direction: column;
}

.toggle-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem; /* 增加一点间距 */
    margin-left: 4.1rem;
    margin-right: 34rem;
    margin-top: 2.5rem;
}

.toggle-label {
    font-size: 2.5rem;
    color: #333;
    font-weight: 500;
    user-select: none;
}

.toggle-switch {
    position: relative;
    display: inline-block;
   
    width: 4.58vw;
    height: 4.07vh;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-track {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background: #e0e0e0;
    border-radius: 1.4375rem;
    transition: background 0.3s;
    display: flex;
    align-items: center;
}

.toggle-thumb {
    position: absolute;
    left: 0.3vw;
    width: 1.875vw;
    height: 3.33vh;
    background: #fff;
    border-radius: 50%;
    transition: left 0.3s;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}

.toggle-switch input:checked + .toggle-track {
    background: #2D85F0;
}

.toggle-switch input:checked + .toggle-track .toggle-thumb {
    left: 1.7rem;
}

.test-sound-btn {
    background: #2D85F0;
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 6rem;
}

.test-sound-btn:hover {
    background: #1B5DAD;
    transform: scale(1.05);
}

.test-sound-btn:active {
    background: #0F4A8A;
}

.setting-group-toggle .toggle-switch {
    cursor: pointer;
    margin-right: 23.125rem;
}

.setting-group-toggle .toggle-track {
    width:4.58vw;
    height: 4.07vh;
    background: #C0C4CF;
    border-radius: 1.4375rem;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: inset 0 0.052vw 0.156vw rgba(0, 0, 0, 0.3);
}

.setting-group-toggle .toggle-track.active {
    background: #007bff;
}

.setting-group-toggle .toggle-thumb {
    width: 1.758vw;
    height: 1.758vw;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0.3vw;
    transform: translateY(-50%);
    transition: all 0.3s ease;
}

.setting-group-toggle .toggle-thumb.active {
    transform: translateY(-50%) translateX(2.2vw);
}

.footer {
    display: none; /* 根据设计图，没有底部保存按钮 */
}

.save-button {
    display: none; /* 隐藏保存按钮 */
}

.voice-selection {
    display: flex;
    gap: 1.84375rem;
    margin-left:3.78125rem;
    margin-top: 1.6875rem;
    margin-bottom: 4.5625rem;
}

.voice-button {
    background: white;
    border: 0.125REM solid #DBDDE0;
    cursor: pointer;
    width: 8.0208vw;
    height: 7.3148vh;
    font-size: 2.25rem !important;
    color: #666;
    padding: 0.521vw 1.042vw;
    border-radius: 0.313vw;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.voice-button:hover {
    border-color: #007bff;
    color: #007bff;
}

.voice-button.active {
    background: #007bff;
    color: white;
    border-color: #007bff;
}

/* 每个滑块行内的横向排列 */
.slider-row {
    display: flex;
    align-items: center;
    gap: 3.0625rem;
    width:30vw;
    margin-left:4.375rem;
}

.slider-group + .slider-group {
    margin-top: 2rem;
}

.slider-group {
    display: flex;
    flex-direction: column;
    
}

.slider-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.slider-label {
    font-size: 2.5rem;
    color: #333;
    font-weight: 500;
}

.slider-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
}

.slider {
    flex: 1;
    height: 0.9315vh;
    background: transparent;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
}

/* 滑块轨道样式 - Webkit */
.slider::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.9315vh;
    background: linear-gradient(to right, #2D85F0 0%, #2D85F0 var(--slider-progress, 50%), #D9D9D9 var(--slider-progress, 50%), #D9D9D9 100%);
    border-radius: 0.5rem;
    border: none;
}

/* 滑块把手样式 - Webkit */
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.88625rem;
    height: 1.88625rem;
    background: white;
    border: 0.125rem solid #2D85F0;
    border-radius: 50%;
    cursor: pointer;
    margin-top: calc((1.88625rem - 0.9315vh) / -2);
}

/* 滑块轨道样式 - Firefox */
.slider::-moz-range-track {
    width: 100%;
    height: 0.9315vh;
    background: linear-gradient(to right, #2D85F0 0%, #2D85F0 var(--slider-progress, 50%), #D9D9D9 var(--slider-progress, 50%), #D9D9D9 100%);
    border-radius: 0.5rem;
    border: none;
}

/* 滑块把手样式 - Firefox */
.slider::-moz-range-thumb {
    width: 1.88625rem;
    height: 1.88625rem;
    background: white;
    border: 0.125rem solid #2D85F0;
    border-radius: 50%;
    cursor: pointer;
    box-sizing: border-box;
}

.slider-value {
    color: black;
    font-weight: 400;
    text-align: right;
    font-size: 2.5rem;
}

/* 个性定制文本框样式 */
.setting-group textarea {
    width: 100%;
    min-height: 10.417vw;
    border: 0.0625rem solid #989898;
    border-radius: 0.313vw;
    font-size: 2rem;
}

.setting-group img {
    width: 1.042vw;
    height: 1.042vw;
}

/* 保存按钮容器 */
.save-button-container {
    position: absolute;
    bottom:4rem;
    right: 4rem;
}

.save-btn {
    width: 9.17vw;
    height: 6.11vh;
    background: #2D85f0;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 2.25rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.save-btn:hover {
    background: #2470d1;
}

.save-btn:active {
    background: #1a5cb8;
}


.textarea-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 3.5rem;
    margin-right: 6.96875rem;
    height: 38vh; 
}

/* 顶部操作按钮容器 - 独立区域 */
.textarea-top-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
   margin-top: 0.6875rem;
   margin-left: 4.0623rem;
    margin-right: 6.96875rem;
    margin-bottom: 0.4375rem;
}

.custom-textarea {
    width: 52.6041vw;
    height: 100%; /* 使用100%高度填充父容器.textarea-wrapper */
    padding-left: 1.625rem;
    padding-right: 1.625rem;
    padding-bottom: 1.625rem;
    padding-top: 1.625rem; /* 调整回正常的内边距 */
    border: 0.0625rem solid #989898;
    border-radius: 0.5rem;
    resize: none; /* 明确禁用拖动调整大小 */
    font-size: 2rem; /* 匹配placeholder的font-size */
    font-weight: 500; /* 匹配placeholder的font-weight */
    color: #333;
    background: rgb(255, 255, 255);
    outline: none;
    font-family: inherit;
    box-sizing: border-box;
    line-height: 1.2; /* 设置具体的行高 */
    overflow-y: scroll; /* 始终显示滚动条 */
    scrollbar-color: #2D85F0 #f0f0f0; /* Firefox滚动条颜色 */
}

.custom-textarea:focus {
    outline: none;
    border-color: #007bff;
}

.custom-textarea::placeholder {
    color: #999;
    font-weight: 500;
    font-size: 2rem;
    line-height: normal;
    opacity: 1; /* 确保placeholder完全可见 */
}

.textarea-buttons {
    position: absolute;
    top:1.3125rem;
    left:1.9375rem;
    gap:0.75rem;
    display: flex;
    z-index: 10;
}

/* 个性定制按钮样式 */

/* 顶部按钮样式 */
.textarea-top-buttons .textarea-btn-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.8125rem;
    height: 3.8125rem;
}

.textarea-top-buttons .textarea-btn {
    position: absolute;
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.44vw;
    height: 4.44vw;
    border: none;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    font-size: 1.25rem;
    color: #000000;
    transition: all 0.2s ease;
}

.textarea-top-buttons .textarea-btn:hover {
    background: #F2F2F2;
    width: 5.4rem;
    height: 5.4rem;
}

.textarea-top-buttons .textarea-btn img {
    height: 4.44vh;
    width: 2.5vw;
}

/* 顶部清空按钮样式 - 独立样式设计 */
.textarea-top-buttons .textarea-clear-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    
}

.textarea-top-buttons .textarea-clear-btn {
    width: 3.75vw;
    height: 2.03vw;
    border: none;
    border-radius: 0.25rem;
    color: #4a4a4a;
    background-color: #D9D9D9;
    font-size: 1.5rem;
    font-weight: 550;
    cursor: pointer;
    transition: all 0.2s ease;
}

.textarea-top-buttons .textarea-clear-button .textarea-clear-btn:hover {
    background: #2D85F0;
    color: #FFFFFF;
}

.textarea-top-buttons .textarea-clear-button .textarea-clear-btn:active {
    background: #1B5DAD;
    color: #FFFFFF;
}

/* 移除原来的绝对定位样式 */
.textarea-buttons {
    display: none; /* 隐藏原来的按钮区域 */
}

.textarea-clear-button {
    display: none; /* 隐藏原来的清空按钮区域 */
}

/* 下拉菜单工具提示样式 */
.textarea-btn-tooltip {
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    background: #d0d0d0;
    color: #4A4A4A;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 1.25rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s, bottom 0.2s ease;
    z-index: 100;
}

.textarea-btn-wrapper:hover .textarea-btn-tooltip {
    opacity: 1;
    bottom: -4.75rem;
}

/* 个性定制标签按钮容器样式 */
.tab-buttons-container {
margin-top: 1.875rem;
margin-left: 3.5rem;
}

/* 偏好设置盒子样式 */
.preference-box {
    display: flex;
    gap: 0;
    border: none;
    border-radius: 0;
    background: transparent;
    overflow: visible;
    width: fit-content;
    border-bottom: 0.025rem solid #858585; /* 整个盒子底部的黑色线 */
    position: relative;
}

/* 偏好设置项样式 */
.preference-item {
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.53); /* 使用半透明颜色 */
    background: transparent;
    cursor: pointer;
    transition: all 0.2s;
    border-right: none;
    border-bottom: none; /* 移除单独的底部边框 */
    user-select: none;
    margin-right: 2rem;
    position: relative;
}

.preference-item:last-child {
    margin-right: 0;
}

.preference-item:hover {
    background: transparent;
    color: #2D85F0;
    font-weight: 550;
}

.preference-item.active {
    background: transparent;
    color: #2D85f0;
    font-weight: 550;
}

/* 激活状态的蓝色线 */
.preference-item.active::after {
    content: '';
    position: absolute;
    bottom: -0.125rem; /* 覆盖原来的黑色线 */
    left: 0;
    right: 0;
    height: 0.35rem; /* 变厚的蓝色线 */
    background: #2D85F0;
    z-index: 1;
}

/* 个性定制按钮容器样式的额外样式，占位保留 */

/* 自定义滚动条样式 - Webkit浏览器 */
.custom-textarea::-webkit-scrollbar {
    width: 0.5rem; /* 滚动条宽度 */
}

.custom-textarea::-webkit-scrollbar-track {
    background: #f0f0f0; /* 轨道背景颜色 */
    border-radius: 0.25rem;
}

.custom-textarea::-webkit-scrollbar-thumb {
    background: #2D85F0; /* 滑块颜色 */
    border-radius: 0.25rem;
}

.custom-textarea::-webkit-scrollbar-thumb:hover {
    background: #1B5DAD; /* 滑块悬停颜色 */
}

/* 滚动控件样式已删除 */
</style>