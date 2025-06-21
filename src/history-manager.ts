/**
 * 历史记录项接口
 */
interface HistoryItem {
  text: string;
  timestamp: number;
}

/**
 * 历史记录管理器
 * 独立的历史记录功能，不依赖Vue框架
 */

export class HistoryManager {
  private static instance: HistoryManager;
  private readonly STORAGE_KEY = 'input_history';
  private readonly MAX_HISTORY_COUNT = 20;
  private currentTooltip: HTMLElement | null = null;

  /**
   * 获取单例实例
   */
  static getInstance(): HistoryManager {
    if (!HistoryManager.instance) {
      HistoryManager.instance = new HistoryManager();
    }
    return HistoryManager.instance;
  }

  /**
   * 私有构造函数
   */
  private constructor() {}

  /**
   * 获取历史记录列表
   */
  getHistory(): HistoryItem[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return [];
      
      const data = JSON.parse(stored);
      
      // 兼容旧格式（纯字符串数组）
      if (Array.isArray(data) && data.length > 0) {
        if (typeof data[0] === 'string') {
          // 转换旧格式为新格式
          const converted = data.map((text: string) => ({
            text,
            timestamp: Date.now() - Math.random() * 86400000 // 随机时间戳
          }));
          this.saveHistoryItems(converted);
          return converted;
        }
      }
      
      return data || [];
    } catch (error) {
      console.error('读取历史记录失败:', error);
      return [];
    }
  }

  /**
   * 保存历史记录项数组
   */
  private saveHistoryItems(items: HistoryItem[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('保存历史记录失败:', error);
    }
  }

  /**
   * 保存文本到历史记录
   */
  saveToHistory(text: string): void {
    if (!text || text.trim().length === 0) return;
    
    try {
      const history = this.getHistory();
      const trimmedText = text.trim();
      
      // 如果已存在相同记录，先移除
      const index = history.findIndex(item => item.text === trimmedText);
      if (index !== -1) {
        history.splice(index, 1);
      }
      
      // 添加到开头
      const newItem: HistoryItem = {
        text: trimmedText,
        timestamp: Date.now()
      };
      history.unshift(newItem);
      
      // 限制历史记录数量
      if (history.length > this.MAX_HISTORY_COUNT) {
        history.splice(this.MAX_HISTORY_COUNT);
      }
      
      this.saveHistoryItems(history);
    } catch (error) {
      console.error('保存历史记录失败:', error);
    }
  }

  /**
   * 清空历史记录
   */
  clearHistory(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('清空历史记录失败:', error);
    }
  }

  /**
   * 删除指定的历史记录项
   */
  removeHistoryItem(text: string): void {
    try {
      const history = this.getHistory();
      const index = history.findIndex(item => item.text === text);
      if (index !== -1) {
        history.splice(index, 1);
        this.saveHistoryItems(history);
      }
    } catch (error) {
      console.error('删除历史记录项失败:', error);
    }
  }

  /**
   * 显示历史记录对话框
   */
  showHistoryDialog(onSelect?: (text: string) => void): void {
    const history = this.getHistory();
    
    if (history.length === 0) {
      this.showEmptyHistoryDialog();
      return;
    }
    
    this.createHistoryDialog(history, onSelect);
  }

  /**
   * 显示空历史记录提示
   */
  private showEmptyHistoryDialog(): void {
    const dialog = this.createBaseDialog();
    const content = this.createDialogContent();
    
    const title = this.createTitle('历史记录');
    content.appendChild(title);
    
    const emptyMessage = document.createElement('div');
    emptyMessage.style.cssText = `
      text-align: center;
      color: #666;
      font-size: 16px;
      padding: 40px 20px;
      background: #f8f9fa;
      border-radius: 8px;
      margin: 20px 0;
    `;
    emptyMessage.textContent = '暂无历史记录';
    content.appendChild(emptyMessage);
    
    const closeBtn = this.createButton('关闭', () => {
      // 确保在关闭空历史记录对话框时隐藏悬浮提示框
      this.hideHoverTooltip();
      document.body.removeChild(dialog);
    });
    content.appendChild(closeBtn);
    
    dialog.appendChild(content);
    document.body.appendChild(dialog);
    
    this.addDialogEventListeners(dialog);
  }

  /**
   * 创建历史记录对话框
   */
  private createHistoryDialog(history: HistoryItem[], onSelect?: (text: string) => void): void {
    const dialog = this.createBaseDialog();
    const content = this.createDialogContent();
    
    // 标题栏
    const header = this.createHeader('历史记录', () => {
      // 确保在关闭对话框时隐藏悬浮提示框
      this.hideHoverTooltip();
      document.body.removeChild(dialog);
    }, () => {
      // 全部清空功能
      this.clearHistory();
      // 确保在清空历史记录后隐藏悬浮提示框
      this.hideHoverTooltip();
      document.body.removeChild(dialog);
    });
    content.appendChild(header);
    
    // 历史记录列表容器
    const listContainer = document.createElement('div');
    listContainer.style.cssText = `
      flex: 1;
      overflow-y: auto;
      padding: 0;
      margin: 0;
    `;
    
    // 历史记录列表
    const list = this.createHistoryList(history, (text) => {
      // 确保在选择历史记录时隐藏悬浮提示框
      this.hideHoverTooltip();
      if (onSelect) {
        onSelect(text);
      }
      document.body.removeChild(dialog);
    }, (text) => {
      // 删除单个历史记录项
      this.removeHistoryItem(text);
      // 重新创建对话框
      document.body.removeChild(dialog);
      const newHistory = this.getHistory();
      if (newHistory.length === 0) {
        this.showEmptyHistoryDialog();
      } else {
        this.createHistoryDialog(newHistory, onSelect);
      }
    });
    
    listContainer.appendChild(list);
    content.appendChild(listContainer);
    
    // 底部按钮
    const footer = this.createFooter(() => {
      // 确保在通过底部按钮关闭对话框时隐藏悬浮提示框
      this.hideHoverTooltip();
      document.body.removeChild(dialog);
    });
    content.appendChild(footer);
    
    dialog.appendChild(content);
    document.body.appendChild(dialog);
    
    this.addDialogEventListeners(dialog);
  }

  /**
   * 创建基础对话框
   */
  private createBaseDialog(): HTMLElement {
    const dialog = document.createElement('div');
    dialog.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Noto Sans JP', 'Roboto', sans-serif;
      animation: fadeIn 0.2s ease-out;
    `;
    
    // 添加CSS动画
    if (!document.querySelector('#history-dialog-styles')) {
      const styles = document.createElement('style');
      styles.id = 'history-dialog-styles';
      styles.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `;
      document.head.appendChild(styles);
    }
    
    return dialog;
  }

  /**
   * 创建对话框内容容器
   */
  private createDialogContent(): HTMLElement {
    const content = document.createElement('div');
    content.className = 'history-dialog';
    content.style.cssText = `
      background: white;
      border-radius: 8px;
      width: 400px;
      max-height: 480px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      animation: slideIn 0.2s ease-out;
    `;
    return content;
  }

  /**
   * 创建头部标题栏
   */
  private createHeader(title: string, onClose: () => void, onClearAll?: () => void): HTMLElement {
    const header = document.createElement('div');
    header.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #e8e8e8;
      background: #EBEBEB;
    `;
    
    const titleElement = this.createTitle(title);
    header.appendChild(titleElement);
    
    // 全部清空按钮（如果提供了onClearAll回调）
    if (onClearAll) {
      const clearAllBtn = document.createElement('button');
      clearAllBtn.textContent = '全部清空';
      clearAllBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 14px;
        cursor: pointer;
        color: #666;
        padding: 4px 8px;
        transition: all 0.2s;
      `;
      clearAllBtn.addEventListener('mouseenter', () => {
        clearAllBtn.style.color = '#333';
      });
      clearAllBtn.addEventListener('mouseleave', () => {
        clearAllBtn.style.color = '#666';
      });
      clearAllBtn.addEventListener('click', onClearAll);
      header.appendChild(clearAllBtn);
    }
    return header;
  }

  /**
   * 创建标题元素
   */
  private createTitle(text: string): HTMLElement {
    const title = document.createElement('h2');
    title.textContent = text;
    title.style.cssText = `
      margin: 0;
      color: #333;
      font-size: 16px;
      font-weight: 500;
    `;
    return title;
  }

  /**
   * 创建历史记录列表
   */
  private createHistoryList(history: HistoryItem[], onSelect: (text: string) => void, onDelete: (text: string) => void): HTMLElement {
    const list = document.createElement('div');
    list.style.cssText = `
      display: flex;
      flex-direction: column;
      padding: 0;
    `;
    
    history.forEach((item, index) => {
      const historyItemElement = document.createElement('div');
      historyItemElement.style.cssText = `
        padding: 16px 20px;
        cursor: pointer;
        transition: background-color 0.2s;
        background: white;
        border-bottom: 1px solid #f0f0f0;
        color: #333;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        min-height: 60px;
      `;
      
      // 最后一项不显示分割线
      if (index === history.length - 1) {
        historyItemElement.style.borderBottom = 'none';
      }
      
      // 文本容器
      const textContainer = document.createElement('div');
      textContainer.style.cssText = `
        flex: 1;
        margin-right: 12px;
        display: flex;
        flex-direction: column;
      `;
      
      // 主文本
      const textElement = document.createElement('div');
      textElement.style.cssText = `
        font-size: 18px;
        word-break: break-all;
        line-height: 1.3;
        color: #333;
        font-weight: 500;
      `;
      textElement.textContent = item.text;
      
      // 时间
      const timeElement = document.createElement('div');
      timeElement.style.cssText = `
        font-size: 12px;
        color: #999;
        margin-top: 2px;
      `;
      
      // 格式化时间戳
      const date = new Date(item.timestamp);
      const timeString = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
      timeElement.textContent = timeString;
      
      textContainer.appendChild(textElement);
      textContainer.appendChild(timeElement);
      
      // 删除按钮
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '×';
      deleteBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 35px;
        cursor: pointer;
        color: #CCCCCC;
        padding: 4px;
        border-radius: 50%;
        transition: all 0.2s;
        flex-shrink: 0;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      
      deleteBtn.addEventListener('mouseenter', () => {
        deleteBtn.style.backgroundColor = '#f0f0f0';
        deleteBtn.style.color = '#999';
      });
      
      deleteBtn.addEventListener('mouseleave', () => {
        deleteBtn.style.backgroundColor = 'transparent';
        deleteBtn.style.color = '#CCCCCC';
      });
      
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止冒泡，避免触发选择事件
        onDelete(item.text);
      });
      
      historyItemElement.appendChild(textContainer);
      historyItemElement.appendChild(deleteBtn);
      
      // 悬浮效果和提示框
      historyItemElement.addEventListener('mouseenter', (e) => {
        historyItemElement.style.background = '#f5f7fa';
        this.showHoverTooltip(item.text, e.currentTarget as HTMLElement);
      });
      
      historyItemElement.addEventListener('mouseleave', () => {
        historyItemElement.style.background = 'white';
        this.hideHoverTooltip();
      });
      
      // 只有点击文本部分才触发选择
      textContainer.addEventListener('click', () => {
        onSelect(item.text);
      });
      
      list.appendChild(historyItemElement);
    });
    
    return list;
  }

  /**
   * 创建底部按钮栏
   */
  private createFooter(onClose: () => void): HTMLElement {
    const footer = document.createElement('div');
    footer.style.cssText = `
      padding: 16px 20px;
      border-top: 1px solid #e8e8e8;
      background: white;
      display: flex;
      justify-content: flex-end;
    `;
    
    const closeBtn = this.createButton('关闭', onClose, 'primary');
    footer.appendChild(closeBtn);
    
    return footer;
  }

  /**
   * 创建按钮
   */
  private createButton(text: string, onClick: () => void, type: 'primary' | 'secondary' = 'primary'): HTMLElement {
    const button = document.createElement('button');
    button.textContent = text;
    
    const baseStyle = `
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    `;
    
    if (type === 'primary') {
      button.style.cssText = baseStyle + `
        background: #4285f4;
        color: white;
        padding: 8px 16px;
        font-size: 13px;
      `;
      button.addEventListener('mouseenter', () => {
        button.style.background = '#3367d6';
      });
      button.addEventListener('mouseleave', () => {
        button.style.background = '#4285f4';
      });
    } else {
      button.style.cssText = baseStyle + `
        background: #f5f5f5;
        color: #666;
        border: 1px solid #ddd;
      `;
      button.addEventListener('mouseenter', () => {
        button.style.background = '#e8e8e8';
        button.style.color = '#333';
      });
      button.addEventListener('mouseleave', () => {
        button.style.background = '#f5f5f5';
        button.style.color = '#666';
      });
    }
    
    button.addEventListener('click', onClick);
    return button;
  }

  /**
   * 添加对话框事件监听器
   */
  private addDialogEventListeners(dialog: HTMLElement): void {
    // 点击背景关闭
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        // 确保在点击背景关闭对话框时隐藏悬浮提示框
        this.hideHoverTooltip();
        document.body.removeChild(dialog);
      }
    });
    
    // ESC键关闭
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // 确保在ESC键关闭对话框时隐藏悬浮提示框
        this.hideHoverTooltip();
        document.body.removeChild(dialog);
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    
    // 对话框移除时清理事件监听器
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node === dialog) {
            document.removeEventListener('keydown', handleKeyDown);
            observer.disconnect();
          }
        });
      });
    });
    observer.observe(document.body, { childList: true });
  }

  /**
   * 显示悬浮提示框
   */
  private showHoverTooltip(text: string, targetElement: HTMLElement): void {
    // 移除现有的提示框
    this.hideHoverTooltip();

    // 创建提示框容器
    const tooltipContainer = document.createElement('div');
    tooltipContainer.style.cssText = `
      position: fixed;
      z-index: 1001;
      pointer-events: none;
    `;

    // 创建主提示框
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
      background: white;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      padding: 12px;
      font-size: 14px;
      color: #333;
      width: 500px;
      word-wrap: break-word;
      white-space: pre-wrap;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-family: 'Noto Sans JP', 'Roboto', sans-serif;
      line-height: 1.4;
      position: relative;
    `;
    
    // 创建箭头
    const arrow = document.createElement('div');
    arrow.style.cssText = `
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 20px solid white;
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
    `;
    
    // 创建箭头边框
    const arrowBorder = document.createElement('div');
    arrowBorder.style.cssText = `
      position: absolute;
      right: -11px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 9px solid #e8e8e8;
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
    `;
    
    tooltip.textContent = text;
    tooltip.appendChild(arrowBorder);
    tooltip.appendChild(arrow);
    tooltipContainer.appendChild(tooltip);
    
    // 计算位置
    const rect = targetElement.getBoundingClientRect();
    const dialogRect = targetElement.closest('.history-dialog')?.getBoundingClientRect();
    
    if (dialogRect) {
      // 箭头贴近对话框边框，280px宽度 + 1px间隙 = 281px
      tooltipContainer.style.left = `${dialogRect.left - 530}px`;
      tooltipContainer.style.top = `${rect.top + (rect.height - 50) / 2}px`;
    } else {
      // 备用位置
      tooltipContainer.style.left = `${rect.left - 281}px`;
      tooltipContainer.style.top = `${rect.top + (rect.height - 50) / 2}px`;
    }
    
    document.body.appendChild(tooltipContainer);
    this.currentTooltip = tooltipContainer;
  }

  /**
   * 隐藏悬浮提示框
   */
  private hideHoverTooltip(): void {
    if (this.currentTooltip) {
      document.body.removeChild(this.currentTooltip);
      this.currentTooltip = null;
    }
  }
} 