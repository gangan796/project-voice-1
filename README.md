# buu-voice

“默筏”是一款专为表达障碍人群设计的中文智能输入系统，面向渐冻症、脑性麻痹、中风后遗症等无法正常说话或打字的用户。  
- **核心功能**：支持眼动或单指操作的九宫格输入，通过中文拼音首字母输入习惯，结合大模型实现整句联想与补全  
- **个性化设置**：用户可填写兴趣偏好，AI 根据个人表达习惯提供更贴切的候选句  
- **辅助功能**：输入内容可语音朗读、自动保存，常用句支持一键调用  

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/191100df-a95b-4e2f-9799-1729ad579a61" />

---

## 目录结构
```

backend/            # 后端服务
├── DeepSeek        # FastAPI 版本
└── Gemma3          # Flask 版本
frontend/
└── project-voice   # 前端代码

````
> **注意：** mzw分支为最新版本，main分支为最初基于谷歌project voice项目做的一个基础优化，仅供参考。
---

## 安装与运行

### 环境准备
- Python 3.11+
- Node.js 16+
- 推荐使用虚拟环境（venv 或 conda）

### 后端（以 Gemma3 为例）
```bash
cd backend/Gemma3
python -m venv venv
# Windows
venv\Scripts\activate
# Mac / Linux
source venv/bin/activate
pip install -r requirements.txt
python main.py
````
### 前端

```bash
cd frontend/project-voice
npm install
npm run dev
```
---

## 配置说明

本项目使用第三方 API 服务（DeepSeek / Kimi / Baidu 语音）。
**请自行申请 API Key 并在对应文件中配置：**

* `backend/DeepSeek/main.py` 中填写 DeepSeek 与 Kimi 的 API Key
* `frontend/project-voice/src/utils/speech.ts` 中填写百度 API Key 和 Secret Key

> **注意：** 请不要将真实密钥提交到公开仓库，建议使用 `.env` 文件或环境变量管理。
> 在提交代码前，可将敏感信息替换为 `YOUR_API_KEY`。
---

## 贡献指南

欢迎提交 Issue 或 Pull Request 来改进项目！

* 请先 Fork 项目，然后在分支上开发
* 确保提交前已通过基本测试
* 遵循统一的代码风格（Python 使用 black/flake8，前端使用 vue+typescript）

---

## 贡献人员

* **项目经理**：孟子文（北京联合大学软件工程专业2024级硕士研究生）
* **提示词工程（Prompt Engineering）**：孟子文、舒玥铭
* **技术开发**：张炳毅、杨兆晨、宋维文
* **UI 设计**：马乐原

---

## 开源协议

本项目基于 [Apache License 2.0](LICENSE) 开源发布。  
您可以自由使用、修改和分发本项目代码，但请遵循协议条款。  

---

## 免责声明

本项目仅用于学术研究与技术交流，**不保证可在医疗场景直接使用**。
开发团队不对因使用本项目代码造成的任何风险或损失负责。

```

---
