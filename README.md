# mzw-voice
buu project voice
backend存放后端文件
frontend存放前端文件

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