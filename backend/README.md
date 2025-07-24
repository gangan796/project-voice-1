# 中文输入智能补全引擎中间件

这是一个专为有语言或运动障碍的用户设计的中文输入智能补全API中间件，支持测试模式和生产模式。

## 功能特点

- 🔄 **双模式运行**：支持测试模式（返回假数据）和生产模式（调用真实API）
- 🏥 **医疗场景优化**：专为渐冻症、脑瘫、中风后遗症等患者设计
- 🛡️ **内容安全**：内置内容审查机制，过滤敏感信息
- 📝 **智能补全**：基于拼音和汉字混合输入的智能词语和句子补全
- 🔧 **易于配置**：简单的配置文件，支持多种API模型

## 快速开始

### 1. 安装依赖

```bash
pip install -r requirements.txt
```

### 2. 配置API（可选）

编辑 `middleware.py` 文件中的配置部分：

```python
# 是否为测试模式 - True: 返回假数据, False: 调用真实API
IS_TEST_MODE = True  # 改为 False 启用生产模式

# API模型配置
API_CONFIG = {
    "url": "https://your-api-endpoint.com/v1/chat/completions",  # 替换为您的API地址
    "api_key": "your-api-key-here",  # 替换为您的API密钥
    "model": "your-model-name",  # 替换为您的模型名称
    "timeout": 30,
    "max_retries": 3
}
```

### 3. 启动服务

```bash
python middleware.py
```

服务将在 `http://localhost:5000` 启动。

## API接口

### 文本智能补全

**POST** `/api/complete`

**请求格式：**
```json
{
    "text": "我想",
    "inputPreference": "医疗场景"
}
```

**响应格式：**
```json
{
    "words": [
        "1. 我想吃",
        "2. 我想喝",
        "3. 我想休息",
        "4. 我想看医生",
        "5. 我想回家"
    ],
    "sentences": [
        "1. 我想吃点清淡的食物，胃口不太好。",
        "2. 我想喝点温水，嗓子有点干。",
        "3. 我想休息一会儿，感觉有些累了。",
        "4. 我想看医生，身体有些不舒服。",
        "5. 我想回家了，在这里待得太久了。"
    ]
}
```

### 健康检查

**GET** `/api/health`

**响应格式：**
```json
{
    "status": "healthy",
    "test_mode": true,
    "version": "1.0.0"
}
```

### 配置信息

**GET** `/api/config`

**响应格式：**
```json
{
    "test_mode": true,
    "api_configured": false
}
```

## 测试示例

使用curl测试接口：

```bash
# 测试文本补全
curl -X POST http://localhost:5000/api/complete \
  -H "Content-Type: application/json" \
  -d '{"text": "我感觉", "inputPreference": "医疗对话"}'

# 健康检查
curl http://localhost:5000/api/health
```

## 配置说明

### 测试模式开关

在 `middleware.py` 文件顶部修改：

```python
是否测试 = True   # True: 返回测试数据, False: 调用Gemini模型
```

### 测试模式 vs 生产模式

- **测试模式** (`IS_TEST_MODE = True`)：
  - 不需要配置API密钥
  - 返回预设的假数据
  - 适合开发和测试

- **生产模式** (`IS_TEST_MODE = False`)：
  - 需要配置真实的API密钥和端点
  - 调用实际的AI模型
  - 适合正式部署

### Gemini模型配置

在 `middleware.py` 文件中修改 `API_CONFIG` 配置：

```python
API_CONFIG = {
    "api_key": "your-google-api-key-here",  # Google API密钥（云端模式需要）
    "model": "gemini-2.5-flash",  # 模型名称
    "local_url": "http://localhost:11434",  # 本地部署地址
    "use_local": True,  # True: 本地部署, False: Google云端
    "timeout": 30,
    "max_retries": 3
}
```

#### 本地部署模式
- 设置 `use_local: True`
- 确保本地Gemini服务运行在 `http://localhost:11434`
- 无需Google API密钥

#### Google云端模式
- 设置 `use_local: False`
- 需要有效的Google API密钥
- 在 [Google AI Studio](https://makersuite.google.com/app/apikey) 获取API密钥

### 智能提示词筛选

系统会根据用户输入自动筛选相关的提示词片段：
- 人称代词检测：识别"我你他她它"等，优化日常表达
- 请求帮助检测：识别"帮、请、麻烦"等礼貌用语
- 身体状况检测：识别"感觉、疼、痛"等医疗相关词汇
- 饮食需求检测：识别"吃、喝、饿、渴"等生活需求
- 拼音输入检测：自动识别纯字母输入并进行拼音转换
- 输入偏好适配：根据医疗、家庭、日常等偏好调整提示

## 注意事项

1. **安全性**：请妥善保管API密钥，不要提交到版本控制系统
2. **性能**：生产环境建议使用WSGI服务器（如Gunicorn）而非Flask开发服务器
3. **日志**：程序会记录详细的运行日志，便于调试和监控
4. **错误处理**：内置完善的错误处理机制，确保服务稳定性

## 技术栈

- **Python 3.8+**
- **Flask** - Web框架
- **Google Gemini** - AI大语言模型
- **Pydantic** - 数据验证和序列化
- **Requests** - HTTP请求库
- **JSON** - 数据交换格式

## 许可证

本项目仅供学习和研究使用。