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
        settings.voiceSpeakingRate = props.state.voiceSpeakingRate || 0;
        settings.voicePitch = props.state.voicePitch || 0;
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
          h('label', { class: 'setting-label' }, 'AI模式'),
          h('select', {
            class: 'setting-select',
            value: settings.aiConfig,
            onChange: (e: Event) => {
              settings.aiConfig = (e.target as HTMLSelectElement).value as 'fast' | 'smart' | 'classic';
            }
          }, [
            h('option', { value: 'fast' }, '快速'),
            h('option', { value: 'smart' }, '智能'),
            h('option', { value: 'classic' }, '经典')
          ])
        ]),
        
        // 总是在原点展开
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'switch-group' }, [
            h('span', {}, '总是在原点展开'),
            h('input', {
              type: 'checkbox',
              class: 'switch-input',
              checked: settings.expandAtOrigin,
              onChange: (e: Event) => {
                settings.expandAtOrigin = (e.target as HTMLInputElement).checked;
              }
            }),
            h('span', { class: 'switch-slider' })
          ])
        ]),
        
        // 使用较小句子边距
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'switch-group' }, [
            h('span', {}, '使用较小句子边距'),
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
        ]),
        
        // 启用提示音
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'switch-group' }, [
            h('span', {}, '启用提示音'),
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
          h('select', {
            class: 'setting-select',
            value: settings.voiceName,
            onChange: (e: Event) => {
              settings.voiceName = (e.target as HTMLSelectElement).value;
            }
          }, [
            h('option', { value: '' }, '默认'),
            ...availableVoices.value.map(voice => 
              h('option', { key: voice.name, value: voice.name }, voice.name)
            )
          ])
        ]),
        
        // 语速
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'setting-label' }, `语速: ${settings.voiceSpeakingRate}`),
          h('input', {
            type: 'range',
            min: -10,
            max: 10,
            class: 'setting-range',
            value: settings.voiceSpeakingRate,
            onInput: (e: Event) => {
              settings.voiceSpeakingRate = parseInt((e.target as HTMLInputElement).value);
            }
          })
        ]),
        
        // 音调
        h('div', { class: 'setting-group' }, [
          h('label', { class: 'setting-label' }, `音调: ${settings.voicePitch}`),
          h('input', {
            type: 'range',
            min: -10,
            max: 10,
            class: 'setting-range',
            value: settings.voicePitch,
            onInput: (e: Event) => {
              settings.voicePitch = parseInt((e.target as HTMLInputElement).value);
            }
          })
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