# mzw-voice
“默筏”是一款专为表达障碍人群设计的中文智能输入系统，服务对象包括渐冻症、脑性麻痹、中风后遗症等无法正常说话或打字的用户。系统支持眼动或单指操作，通过九宫格布局降低误触率，结合中文拼音首字母输入习惯，利用大模型实现整句联想与补全。用户可以填写个性化偏好，让AI根据个人兴趣生成更贴切的表达内容。输入内容可语音朗读、自动保存，常用句支持一键调用。
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/eb6bcf03-b9fa-4fa3-887e-4b650146bb94" />

# 目录结构
```
backend 后端目录
├── DeepSeek 深度求索 - 用fastapi，只需要创建虚拟环境->启动虚拟环境->一键下载依赖包->启动fastapi服务器
└── Gemma3 谷歌Gemma3 - 用Flask框架，只需要创建虚拟环境->启动虚拟环境->一键下载依赖包->启动flask服务器
frontend
└── project-voice 前端目录
```

# 注意密钥
在`backend\DeepSeek`目录下的`main.py`文件中配置DeepSeek的API_KEY和Kimi的API_KEY
```python
class DeepSeekConfig:
    """DeepSeek 配置类"""
    API_KEY = "DeepSeek-API-Key"
    BASE_URL = "https://api.deepseek.com"
    MODEL_CHAT = "deepseek-chat"
    MODEL_REASONER = "deepseek-reasoner"

class KimiConfig:
    """Kimi 配置类"""
    API_KEY = "Kimi-API-Key"
    BASE_URL = "https://api.moonshot.cn/v1"
    MODEL_CHAT = "kimi-k2-0711-preview"
```
在`frontend\project-voice\src\utils`目录下的`speech.ts`文件中配置百度的API_KEY和Secret_Key
```ts
const apiKey = 'Baidu-API-Key'
const secretKey = 'Baidu-Secret-Key'
```

# 贡献人员
项目经理：孟子文（北京联合大学软件工程专业2024级硕士研究生）<br>

提示词工程（Prompt Engineering)组:<br>
孟子文（北京联合大学软件工程专业2024级硕士研究生）<br>
舒玥铭（北京联合大学软件工程专业2024级硕士研究生）<br>

UI设计组：<br>
马乐原（北京联合大学数字媒体专业2024级硕士研究生）<br>

技术开发组：<br>
张炳毅(北京联合大学计算机科学与技术专业2022级本科生)<br>
杨兆晨(北京联合大学计算机科学与技术专业2022级本科生)<br>
宋维文（北京联合大学2014届校友）<br>
