/**
 * Vue设置面板组件
 * 使用Vue 3组合式API，纯TypeScript实现
 */

import { ref, reactive, computed, onMounted, watch, defineComponent, h } from 'vue';
import type { SettingsPanelProps, SettingsData, TabInfo, VoiceInfo } from './types';

export default defineComponent({
  name: 'SettingsPanel',
  props: {
    state: {
      type: Object,
      required: true
    }
  },
  emits: ['ok-click', 'cancel-click', 'settings-change'],
  setup(props: SettingsPanelProps, { emit, expose }) {
    /**
     * 响应式数据
     */
    const isVisible = ref(false);
    const activeTab = ref(0);

    /**
     * 设置数据
     */
    const settings = reactive<SettingsData>({
      aiConfig: 'smart',
      expandAtOrigin: false,
      sentenceSmallMargin: false,
      enableEarcons: false,
      persona: '',
      initialPhrases: [],
      voiceName: '',
      voiceSpeakingRate: 0,
      voicePitch: 0
    });

    /**
     * 可用语音列表
     */
    const availableVoices = ref<VoiceInfo[]>([]);

    /**
     * 标签页配置
     */
    const tabs: TabInfo[] = [
      { name: '通用设置', key: 'general' },
      { name: '配置设置', key: 'config' },
      { name: '语音设置', key: 'voice' }
    ];

    /**
     * 初始短语文本（用于双向绑定）
     */
    const phrasesText = computed({
      get: () => settings.initialPhrases.join('\n'),
      set: (value: string) => {
        settings.initialPhrases = value
          .split('\n')
          .filter(phrase => phrase.trim() !== '');
      }
    });

    /**
     * 显示设置面板
     */
    const show = (): void => {
      loadSettingsFromState();
      isVisible.value = true;
    };

    /**
     * 隐藏设置面板
     */
    const hide = (): void => {
      isVisible.value = false;
    };

    /**
     * 从状态加载设置
     */
    const loadSettingsFromState = (): void => {
      if (props.state) {
        const aiConfig = props.state.aiConfig as 'fast' | 'smart' | 'classic';
        settings.aiConfig = aiConfig && ['fast', 'smart', 'classic'].includes(aiConfig) ? aiConfig : 'smart';
        settings.expandAtOrigin = props.state.expandAtOrigin || false;
        settings.sentenceSmallMargin = props.state.sentenceSmallMargin || false;
        settings.enableEarcons = props.state.enableEarcons || false;
        settings.persona = props.state.persona || '';
        settings.initialPhrases = [...(props.state.initialPhrases || [])];
        settings.voiceName = props.state.voiceName || '';
        // 默认值设为0%
        settings.voiceSpeakingRate = props.state.voiceSpeakingRate !== undefined ? 
          Math.max(0, Math.min(100, props.state.voiceSpeakingRate * 5 + 50)) : 0;
        settings.voicePitch = props.state.voicePitch !== undefined ? 
          Math.max(0, Math.min(100, props.state.voicePitch * 5 + 50)) : 0;
      }
    };

    /**
     * 加载可用语音
     */
    const loadAvailableVoices = (): void => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        const voices = window.speechSynthesis.getVoices();
        availableVoices.value = voices
          .filter(voice => voice.lang.startsWith('zh') || voice.lang.startsWith('en'))
          .map(voice => ({
            name: voice.name,
            lang: voice.lang
          }));
      }
    };

    /**
     * 处理确认按钮点击
     */
    const handleConfirm = (): void => {
      emit('ok-click', { ...settings });
      hide();
    };

    /**
     * 处理取消按钮点击
     */
    const handleCancel = (): void => {
      emit('cancel-click');
      hide();
    };

    /**
     * 处理关闭按钮点击
     */
    const handleClose = (): void => {
      handleCancel();
    };

    /**
     * 更新设置数据
     */
    const updateSettings = (data: Partial<SettingsData>): void => {
      Object.assign(settings, data);
    };

    /**
     * 监听设置变化
     */
    watch(
      settings,
      (newSettings) => {
        emit('settings-change', { ...newSettings });
      },
      { deep: true }
    );

    /**
     * 组件挂载后初始化
     */
    onMounted(() => {
      loadAvailableVoices();
      
      // 监听语音变化事件
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.addEventListener('voiceschanged', loadAvailableVoices);
      }
    });

    // 暴露方法给父组件
    expose({
      show,
      hide,
      updateSettings
    });

    /**
     * 渲染通用设置标签页
     */
    const renderGeneralTab = () => {
      return h('div', { class: 'tab-panel' }, [
        // AI模式设置
        h('div', { class: 'setting-group' }, [
          h('div', { class: 'ai-title-container' }, [
            h('label', { class: 'setting-label' }, 'AI性能'),
            h('div', { class: 'ai-mode-description' }, '推荐经典模式，调整为智能模式会对模型速度有影响。')
          ]),
          h('div', { class: 'radio-group' }, [
              h('label', { class: 'radio-item' }, [
                h('input', {
                  type: 'radio',
                  name: 'aiConfig',
                  value: 'fast',
                  checked: settings.aiConfig === 'fast',
                  onChange: () => { settings.aiConfig = 'fast'; }
                }),
                h('span', { class: 'radio-text' }, '快速模式')
              ]),
              h('label', { class: 'radio-item' }, [
                h('input', {
                  type: 'radio',
                  name: 'aiConfig',
                  value: 'smart',
                  checked: settings.aiConfig === 'smart',
                  onChange: () => { settings.aiConfig = 'smart'; }
                }),
                h('span', { class: 'radio-text' }, '智能模式')
              ]),
              h('label', { class: 'radio-item' }, [
                h('input', {
                  type: 'radio',
                  name: 'aiConfig',
                  value: 'classic',
                  checked: settings.aiConfig === 'classic',
                  onChange: () => { settings.aiConfig = 'classic'; }
                }),
                              h('span', { class: 'radio-text' }, '经典模式')
            ])
          ])
        ]),
        
        // 启用提示音
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'switch-group' }, [
            h('span', {}, '启用音效'),
            h('input', {
              type: 'checkbox',
              class: 'switch-input',
              checked: settings.enableEarcons,
              onChange: (e: Event) => {
                settings.enableEarcons = (e.target as HTMLInputElement).checked;
              }
            }),
            h('span', { class: 'switch-slider' })
          ])
        ]),
        
        // 使用较小句子边距
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'switch-group' }, [
            h('span', {}, '缩小句距'),
            h('input', {
              type: 'checkbox',
              class: 'switch-input',
              checked: settings.sentenceSmallMargin,
              onChange: (e: Event) => {
                settings.sentenceSmallMargin = (e.target as HTMLInputElement).checked;
              }
            }),
            h('span', { class: 'switch-slider' })
          ])
        ])
      ]);
    };

    /**
     * 渲染配置设置标签页
     */
    const renderConfigTab = () => {
      return h('div', { class: 'tab-panel' }, [
        // 角色设定
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'setting-label' }, '角色设定'),
          h('textarea', {
            class: 'setting-textarea',
            rows: 4,
            placeholder: '输入角色设定...',
            value: settings.persona,
            onInput: (e: Event) => {
              settings.persona = (e.target as HTMLTextAreaElement).value;
            }
          })
        ]),
        
        // 初始短语
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'setting-label' }, '初始短语（每行一个）'),
          h('textarea', {
            class: 'setting-textarea',
            rows: 3,
            placeholder: '每行一个短语...',
            value: phrasesText.value,
            onInput: (e: Event) => {
              phrasesText.value = (e.target as HTMLTextAreaElement).value;
            }
          })
        ])
      ]);
    };

    /**
     * 渲染语音设置标签页
     */
    const renderVoiceTab = () => {
      return h('div', { class: 'tab-panel' }, [
        // TTS语音
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'setting-label' }, 'TTS语音'),
          h('div', { class: 'voice-option-group' }, [
            h('div', { class: 'voice-option-row' }, [
              h('div', { 
                class: ['voice-option-item', { selected: settings.voiceName === 'female' || settings.voiceName === '' }],
                onClick: () => { settings.voiceName = 'female'; }
              }, [
                h('input', {
                  type: 'radio',
                  name: 'voiceType',
                  value: 'female',
                  checked: settings.voiceName === 'female' || settings.voiceName === '',
                  onChange: () => { settings.voiceName = 'female'; }
                }),
                h('span', { class: 'voice-option-text' }, '女声')
              ]),
              h('div', { 
                class: ['voice-option-item', { selected: settings.voiceName === 'male' }],
                onClick: () => { settings.voiceName = 'male'; }
              }, [
                h('input', {
                  type: 'radio',
                  name: 'voiceType',
                  value: 'male',
                  checked: settings.voiceName === 'male',
                  onChange: () => { settings.voiceName = 'male'; }
                }),
                h('span', { class: 'voice-option-text' }, '男声')
              ])
            ])
          ])
        ]),
        
        // 语速
        h('div', { class: 'range-group' }, [
          h('div', { class: 'range-container' }, [
            h('span', { class: 'range-label-text' }, '语速'),
            h('input', {
              type: 'range',
              min: 0,
              max: 100,
              class: 'setting-range-inline',
              value: settings.voiceSpeakingRate,
              onInput: (e: Event) => {
                settings.voiceSpeakingRate = parseInt((e.target as HTMLInputElement).value);
              }
            }),
            h('span', { class: 'range-value' }, `${settings.voiceSpeakingRate}%`)
          ])
        ]),
        
        // 音调
        h('div', { class: 'range-group' }, [
          h('div', { class: 'range-container' }, [
            h('span', { class: 'range-label-text' }, '音量'),
            h('input', {
              type: 'range',
              min: 0,
              max: 100,
              class: 'setting-range-inline',
              value: settings.voicePitch,
              onInput: (e: Event) => {
                settings.voicePitch = parseInt((e.target as HTMLInputElement).value);
              }
            }),
            h('span', { class: 'range-value' }, `${settings.voicePitch}%`)
          ])
        ])
      ]);
    };

    // 返回render函数
    return () => {
      if (!isVisible.value) return null;
      
      return h('div', {
        class: 'settings-overlay',
        onClick: (e: Event) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }
      }, [
                 h('div', { class: 'settings-modal' }, [
           // 头部
           h('div', { class: 'settings-header' }, [
             h('h2', {}, '设置'),
             h('button', {
               class: 'close-btn',
               'aria-label': '关闭',
               onClick: handleClose
             }, [
               h('span', {}, '×')
             ])
           ]),
           
           // 主体区域（标签页 + 内容）
           h('div', { class: 'settings-body' }, [
             // 标签页导航
             h('div', { class: 'settings-tabs' }, 
               tabs.map((tab, index) => 
                 h('button', {
                   key: tab.key,
                   class: ['tab-btn', { active: activeTab.value === index }],
                   onClick: () => { activeTab.value = index; }
                 }, tab.name)
               )
             ),
             
             // 内容区域
             h('div', { class: 'settings-content' }, [
               activeTab.value === 0 ? renderGeneralTab() :
               activeTab.value === 1 ? renderConfigTab() :
               renderVoiceTab()
             ])
           ]),
           
           // 底部按钮
           h('div', { class: 'settings-footer' }, [
             h('button', {
               class: 'btn-primary',
               onClick: handleConfirm
             }, '保存')
           ])
         ])
      ]);
    };
  }
}); 