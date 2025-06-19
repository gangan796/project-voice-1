/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//主页面的样式

import {css} from 'lit';

export const pvAppStyle = css`
  /* Update: 2024-07-30T13:00:00Z - Complete UI Layout Update with fixed overflow */
  :host {
    display: flex;
    width: 1920px; /* 全局宽度 */
    height: 1080px; /* 全局高度 */
    overflow: hidden; /* 防止内容溢出导致滚动条 */
  }

  .container {
    box-sizing: border-box;
    display: flex;
    padding: 10px; /* 容器内边距 */
    width: 100%;
    height: 100%;
    gap: 5px; /* 减小中间与右侧面板之间的间距 */
  }

  .left-panel,
  .right-panel {
    display: flex;
    flex-direction: column;
    padding: 25px; /* 面板内边距 */
    background-color: var(--color-surface, white); /* 可选背景色 */
    border-radius: 20px; /* 面板圆角 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 面板阴影 */
  }

  .left-panel {
    width: 597px; /* 左侧面板宽度 */
    align-items: center; /* 内部元素居中对齐 */
    justify-content: flex-start;
    /*gap: 20px;  九宫格与候选字/词的间距，这里设置的是子元素的间距，会被下面的margin-top覆盖一部分 */
  }

  .center-panel {
    flex: 1; /* 占据剩余空间 */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 联想句子与输入框上下对齐 */
    padding: 20px; /* 中间面板内边距 */
    background-color: var(--color-surface, white);
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .right-panel {
    width: 16px; /* 调整宽度使其整体左移 */
    align-items: center;
    justify-content: flex-start;
    /*padding: 10px;  减小内边距 */
    /*gap: 10px;  功能按钮间距 */
  }

  pv-functions-bar .functions-bar {
    gap: 40px;
    background: transparent;
  }

  pv-functions-bar button {
    width: 92px;
    height: 92px;
    border-radius: 30px;
    border: 2px solid #c6e2ff;
  }

  .keypad {
    width: 597px; /* 九宫格总宽度 */
    margin-inline: auto; /* 居中显示 */
    margin-bottom: 22.5px; /* 九宫格与下方元素的间距 */
  }

  /* 九宫格中的单个按钮样式 */
  pv-character-input div.key-group div.key-button {
    width: 165px; /* 按钮宽度 */
    height: 148px; /* 按钮高度 */
    border-radius: 30px; /* 按钮圆角 */
    margin-bottom: 20px; /* 按钮之间垂直间距 */
  }

  /* 候选字/词网格样式 */
  ul.word-suggestions {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 165px); /* 3列，每列按钮宽度165px */
    grid-template-rows: repeat(4, 1fr); /* 4行，让按钮自己撑开高度 */
    gap: 11px 21px; /* 垂直间距11px，水平间距21px */
    width: 597px; /* 精确计算网格总宽度 */
    max-width: 100%; /* 防止超出父容器 */
    min-height: calc(4 * 82px + 3 * 11px); /* 确保有足够高度显示4行 */
    height: 414px; /* 整个联想字词区域的高度 */
    margin-inline: auto; /* 居中显示 */
    border-radius: 12px; /* 候选字/词区域圆角 */
  }

  .candidate-btn,
  .candidate-placeholder {
    height: 82px; /* 按钮高度 */
    width: 100%; /* 占满网格单元格宽度 */
    border-radius: 30px; /* 与九宫格按钮圆角一致 */
    font-size: 48px; /* 字体大小 */
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box; /* 包含padding和border在内 */
    white-space: nowrap; /* 防止文字换行 */
    overflow: hidden; /* 隐藏溢出文字 */
    text-overflow: ellipsis; /* 显示省略号 */
  }

  .candidate-btn {
    background: #fff;
    border: 2px solid #c6e2ff;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;
  }
  .candidate-btn:active {
    background: #e3f2fd;
  }

  .candidate-placeholder {
    background: #f5f5f5; /* 灰色背景 */
    border: 1px dashed #bbb; /* 虚线边框 */
    border-radius: 12px;
  }

  /* 删除按钮样式 */
  .key-group pv-button.character.delete {
    width: 344px; /* 删除按钮宽度 */
    height: 103px; /* 删除按钮高度 */
  }

  /* 联想句子区样式 */
  .suggestions {
    flex: 1; /* 占据中间面板上方大部分空间 */
    position: relative;
    overflow-y: auto; /* 允许滚动 */
    width: 100%;
    margin-bottom: 28px; /* 与输入框的间距 */
  }

  ul.sentence-suggestions {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column; /* 竖直排列 */
    gap: 17px; /* 句子行间距 */
  }

  ul.sentence-suggestions li {
    height: 96px; /* 句子行高 */
    min-height: 96px; /* 确保最小高度 */
    border-radius: 12px; /* 句子圆角 */
    font-size: 48px; /* 字体大小 */
    display: flex;
    align-items: center;
    padding: 20px; /* 内边距 */
    box-sizing: border-box;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 隐藏溢出 */
    text-overflow: ellipsis; /* 显示省略号 */
    background: #e0f2f7; /* 句子背景色 */
    border: 1px solid #a7d9f7; /* 句子边框 */
    cursor: pointer;
  }
  
  /* 确保 pv-suggestion-stripe 及其内部元素正确显示和截断 */
  ul.sentence-suggestions li pv-suggestion-stripe {
    display: flex; /* 让pv-suggestion-stripe内部的pv-button水平排列 */
    overflow: hidden; /* 隐藏pv-suggestion-stripe内部的溢出内容 */
    text-overflow: ellipsis; /* 显示省略号 */
    white-space: nowrap; /* 不换行 */
    width: 100%; /* 填充li的宽度 */
    height: 100%; /* 填充li的高度 */
    align-items: center; /* 垂直居中 */
  }
  
  ul.sentence-suggestions li pv-suggestion-stripe pv-button {
    margin-right: 5px; /* pv-button之间的间距，根据需要调整 */
    flex-shrink: 0; /* 防止pv-button被压缩 */
    overflow: hidden; /* 确保pv-button内部文本也能截断 */
    text-overflow: ellipsis; /* 确保pv-button内部文本也能截断 */
    white-space: nowrap; /* 确保pv-button内部文本也能截断 */
  }

  .sentence-placeholder {
    background: #f5f5f5;
    border: 1px dashed #bbb;
  }

  /* 输入框区域样式 */
  .input-area {
    width: 100%;
    height: 307px; /* 输入框高度 */
    max-width: 1130px; /* 输入框最大宽度 */
    align-self: center; /* 在center-panel中居中 */
    position: relative;
  }

  pv-textarea-wrapper .textarea-container {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .bottom-buttons {
    position: absolute;
    bottom: 25px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .clear-btn, .history-btn {
    border: 2px solid #c6e2ff;
    border-radius: 20px;
    background: white;
    font-size: 24px;
    cursor: pointer;
    font-weight: bold; /* 默认加粗 */
  }

  .clear-btn {
    width: 228px;
    height: 75px;
  }

  .history-btn {
    width: 193px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: normal; /* 覆盖默认加粗 */
  }

  /* 其他现有样式保持不变或根据需要调整 */
  .main textarea {
    width: 100%;
    height: 100%; /* 确保textarea占满input-area */
    box-sizing: border-box;
  }

  /* 独立的功能按钮样式 */
  .function-buttons {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .function-buttons button {
    border: 2px solid #c6e2ff;
    /* border-radius: 20px; */
    background: white;
    font-size: 24px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    /* box-shadow: 0 2px 8px rgba(0,0,0,0.1); 添加阴影使按钮更突出 */
  }

  .function-buttons button:first-child {
    width: 565px;
    height: 65px;
    border-radius: 0 0 0 25px;
    border-right: none;
  }

  .function-buttons button:last-child {
    width: 565px;
    height: 65px;
    border-radius: 0 0 25px 0;
    border-left: none;
  }

  .function-buttons button:hover {
    background: #f0f8ff;
    border-color: #4a90e2;
  }

  .function-buttons button:active {
    background: #e6f3ff;
    transform: translateY(1px);
  }
  /* 功能按钮图标样式 */
  .fb-icon {
    position: relative;
    top: 4px;
  }

  .loader {
    align-items: center;
    background: color-mix(
      in srgb,
      var(--color-background) 80%,
      transparent 20%
    );
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: 0.3s ease;
    width: 100%;
  }

  .loader.loading {
    opacity: 1;
  }

  /* 针对 pv-textarea-wrapper 内部的 pv-scalable-textarea */
  pv-textarea-wrapper pv-scalable-textarea {
      height: 100%;
      width: 100%;
      border-radius: 25px; /* 输入框圆角 */
      border: 1px solid #ccc; /* 输入框边框 */
      padding: 10px;
      box-sizing: border-box;
  }

  /* 移除旧的列表项样式，因为已改为 grid/flex 控制 */
  /* ul.word-suggestions li, */ /* 已经由 .candidate-btn 和 .candidate-placeholder 控制 */
  /* ul.sentence-suggestions li { } */ /* 现在由上面的 ul.sentence-suggestions li 精确控制 */

  @media screen and (min-height: 30rem) {
    /* ul.word-suggestions li { margin: 0.5rem 0.5rem 0.5rem 0; } */
    ul.sentence-suggestions li {
      margin: 0; /* 调整为0 */
    }
    ul.sentence-suggestions li.tight {
      margin: 0; /* 调整为0 */
    }
  }
  @media screen and (min-height: 45rem) {
    /* ul.word-suggestions li { margin: 1rem 1rem 1rem 0; } */
  }

  /* 保持其他无关样式 */
  #form-id { height: 380px; width: 500px; }
  .form-section { margin: 1rem 0; }
  .stats {
    background-color: rgba(1, 1, 1, 0.0);
    border: solid rgba(96, 96, 96, 0.5);
    bottom: 4px;
    color: rgba(96, 96, 96, 0.5);
    cursor: pointer;
    padding: 4px;
    position: absolute;
    right: 4px;
  }
  @media (prefers-color-scheme: dark) {
    .stats {
      background-color: rgba(1, 1, 1, 0.0);
      border: solid rgba(255, 255, 255, 0.5);
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .language-name {
    background: var(--color-on-background); border-radius: 1rem;
    color: var(--color-background); display: none; font-size: 2rem;
    left: 50%; padding: 1rem; pointer-events: none; position: fixed;
    opacity: 0.8; top: 50%; transform: translate(-50%, -50%);
  }
  .language-name[active] { display: block; }
  .conversation-history-container {
    background: var(--color-surface); border-radius: 0.5rem;
    max-width: 30vw; overflow: scroll; padding: 0.5rem; width: 360px;
  }
`;
