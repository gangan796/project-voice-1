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
    width: 100vw; /* 占满浏览器视窗宽度 */
    height: 100vh; /* 占满浏览器视窗高度 */
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
    padding: 20px 25px; /* 上下20px，左右25px，与中间面板对齐 */
    background-color: var(--color-surface, white); /* 可选背景色 */
    border-radius: 20px; /* 面板圆角 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 面板阴影 */
  }

  .left-panel {
    width: 25vw; /* 左侧面板占视窗宽度的25% */
    align-items: center; /* 内部元素居中对齐 */
    justify-content: flex-start;
    /*gap: 20px;  九宫格与候选字/词的间距，这里设置的是子元素的间距，会被下面的margin-top覆盖一部分 */
  }

  .center-panel {
    width: 74vw; /* 中间面板占视窗宽度的74% */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 联想句子与输入框上下对齐 */
    padding: 20px; /* 中间面板内边距 */
    background-color: var(--color-surface, white);
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* 确保内容不溢出 */
  }

  .right-panel {
    width: 1vw; /* 右侧面板占视窗宽度的1% */
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
    width: 90%; /* 响应式宽度，占左侧面板的90% */
    max-width: 597px; /* 保持最大宽度限制 */
    margin-inline: auto; /* 居中显示 */
    margin-bottom: 22.5px; /* 九宫格与下方元素的间距 */
  }

  /* 九宫格中的单个按钮样式 */
  pv-character-input div.key-group div.key-button {
    width: 100%; /* 响应式按钮宽度，占满网格单元 */
    min-width: 120px; /* 最小宽度保证可用性 */
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
    grid-template-columns: repeat(3, 1fr); /* 3列，响应式等宽 */
    grid-template-rows: repeat(4, 1fr); /* 4行，让按钮自己撑开高度 */
    gap: 11px 21px; /* 垂直间距11px，水平间距21px */
    width: 90%; /* 响应式宽度，占左侧面板的90% */
    max-width: 597px; /* 保持最大宽度限制 */
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
    width: 90%; /* 响应式删除按钮宽度 */
    max-width: 344px; /* 保持最大宽度限制 */
    height: 103px; /* 删除按钮高度 */
  }

  /* 联想句子区样式 */
  .suggestions {
    flex: 1; /* 占据中间面板上方大部分空间 */
    position: relative;
    overflow: hidden; /* 隐藏溢出内容 */
    width: 100%; /* 占满中间面板宽度 */
    margin-bottom: 28px; /* 与输入框的间距 */
  }

  ul.sentence-suggestions {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column; /* 竖直排列 */
    gap: 1.5rem; /* 响应式句子行间距 */
  }

  ul.sentence-suggestions li {
    height: 10vh; /* 增加句子行高以容纳按钮 */
    min-height: 10vh; /* 确保最小高度 */
    border-radius: 1.2rem; /* 响应式句子圆角 */
    font-size: 48px; /* 字体大小 */
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem; /* 调整内边距：上下1rem，左右1.5rem */
    box-sizing: border-box;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 隐藏溢出 */
    text-overflow: ellipsis; /* 显示省略号 */
    background: white; /* 改为白色背景 */
    border: 0.1rem solid #ddd; /* 响应式浅灰色边框 */
    cursor: pointer;
    width: 100%; /* 占满容器宽度 */
  }
  
  /* 确保 pv-suggestion-stripe 及其内部元素正确显示和截断 */
  ul.sentence-suggestions li pv-suggestion-stripe {
    display: flex; /* 改回flex布局，便于按钮对齐 */
    align-items: center; /* 垂直居中 */
    overflow: hidden; /* 隐藏溢出内容 */
    width: 100%; /* 填充li的宽度 */
    height: 8vh; /* 明确设置高度 */
    min-height: 8vh; /* 确保最小高度 */
  }
  
  ul.sentence-suggestions li pv-suggestion-stripe pv-button {
    flex-shrink: 0; /* 防止按钮被压缩 */
    margin-right: 1rem; /* 响应式按钮间距 */
    height: 5.5vh; /* 响应式按钮高度 */
    max-height: 5.5vh; /* 限制最大高度 */
  }

  .sentence-placeholder {
    background: #f5f5f5;
    border: 1px dashed #bbb;
  }

  /* 输入框区域样式 */
  .input-area {
    width: 100%; /* 占满中间面板宽度，与联想句子对齐 */
    height: 307px; /* 输入框高度 */
    max-width: none; /* 移除最大宽度限制，让输入框与联想句子对齐 */
    align-self: stretch; /* 拉伸到容器宽度 */
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
    width: 100%; /* 占满容器宽度 */
    bottom: 0; /* 贴底显示 */
    left: 0;
    right: 0;
  }

  .function-buttons button {
    border: 0.15rem solid #c6e2ff; /* 响应式边框 */
    background: white;
    font-size: 1.5rem; /* 响应式字体 */
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    flex: 1; /* 等宽占满容器 */
    height: 4vh; /* 响应式高度 */
    min-height: 50px; /* 最小高度保证可用性 */
    box-sizing: border-box;
  }

  .function-buttons button:first-child {
    border-radius: 0 0 0 1.5rem; /* 响应式圆角 */
    border-right: none;
  }

  .function-buttons button:last-child {
    border-radius: 0 0 1.5rem 0; /* 响应式圆角 */
    border-left: none;
  }

  .function-buttons button:hover {
    background: #f0f8ff;
    border-color: #4a90e2;
  }

  .function-buttons button:active {
    background: #e6f3ff;
    transform: translateY(0.05rem); /* 响应式移动距离 */
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
