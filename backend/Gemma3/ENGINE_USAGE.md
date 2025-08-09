# 多引擎AI补全系统使用说明

## 概述

本系统现已支持多个AI引擎，提供更强的可靠性和灵活性。系统包含主引擎和备用引擎机制，当主引擎失败时会自动切换到备用引擎。

## 支持的引擎

### 1. Gemini引擎（原有引擎）
- **类型**: `gemini`
- **支持模式**: 
  - Google云端API
  - 本地Ollama部署
- **配置**: 使用 `API_CONFIG` 配置
- **特点**: 原有的Google Gemini模型支持

### 2. OpenAI兼容引擎（新增）
- **类型**: `openai_compatible`
- **支持模式**: Cloud Run部署的Gemma模型
- **配置**: 使用 `OPENAI_COMPATIBLE_CONFIG` 配置
- **特点**: 使用OpenAI兼容的API接口调用Cloud Run部署的模型

## 配置说明

### 引擎选择配置

```python
# 引擎选择配置
ENGINE_CONFIG = {
    "primary_engine": "gemini",  # 主引擎："gemini" 或 "openai_compatible"
    "fallback_engine": "openai_compatible",  # 备用引擎
    "enable_fallback": True  # 是否启用备用引擎
}
```

### OpenAI兼容引擎配置

```python
# OpenAI兼容引擎配置
OPENAI_COMPATIBLE_CONFIG = {
    "api_key": "2w38e9rqlz9iytvb",  # Cloud Run服务的API密钥
    "base_url": "https://gemma-3-12b-it-690935443087.europe-west1.run.app/v1",  # 服务地址
    "model": "gemma3:12b",  # 模型名称
    "timeout": 60,  # 请求超时时间（秒）
    "max_retries": 3,  # 最大重试次数
    "enabled": True  # 是否启用此引擎
}
```

## 使用方法

### 1. 修改引擎优先级

要更改主引擎，修改 `ENGINE_CONFIG` 中的 `primary_engine`：

```python
# 使用OpenAI兼容引擎作为主引擎
ENGINE_CONFIG = {
    "primary_engine": "openai_compatible",
    "fallback_engine": "gemini",
    "enable_fallback": True
}
```

### 2. 禁用备用引擎

如果只想使用单一引擎：

```python
ENGINE_CONFIG = {
    "primary_engine": "gemini",
    "fallback_engine": "openai_compatible",
    "enable_fallback": False  # 禁用备用引擎
}
```

### 3. 临时禁用OpenAI兼容引擎

```python
OPENAI_COMPATIBLE_CONFIG = {
    # ... 其他配置
    "enabled": False  # 禁用此引擎
}
```

## 工作流程

1. **主引擎调用**: 系统首先尝试使用 `primary_engine` 指定的引擎
2. **备用引擎切换**: 如果主引擎失败且 `enable_fallback` 为 `True`，系统会自动切换到 `fallback_engine`
3. **错误处理**: 如果所有引擎都失败，系统会返回错误信息

## API接口更新

### 配置信息接口

`GET /api/config` 现在返回更详细的引擎配置信息：

```json
{
  "test_mode": false,
  "gemini_api_configured": true,
  "openai_compatible_configured": true,
  "primary_engine": "gemini",
  "fallback_engine": "openai_compatible",
  "fallback_enabled": true,
  "engines": {
    "gemini": {
      "use_local": false,
      "model": "gemma-3-27b-it",
      "configured": true
    },
    "openai_compatible": {
      "enabled": true,
      "model": "gemma3:12b",
      "base_url": "https://gemma-3-12b-it-690935443087.europe-west1.run.app/v1",
      "configured": true
    }
  }
}
```

## 日志信息

系统会记录详细的引擎调用日志：

```
正在使用主引擎: gemini，输入文本: 我感觉
使用Google云端Gemini
主引擎 gemini 调用成功
```

如果主引擎失败：

```
主引擎 gemini 调用失败: API quota exceeded
尝试备用引擎: openai_compatible
使用OpenAI兼容引擎 (Cloud Run)
备用引擎 openai_compatible 调用成功
```

## 依赖安装

确保安装了新增的依赖：

```bash
pip install openai>=1.0.0
```

或使用requirements.txt：

```bash
pip install -r requirements.txt
```

## 故障排除

### 1. OpenAI兼容引擎连接失败

- 检查 `base_url` 是否正确
- 验证 `api_key` 是否有效
- 确认网络连接正常

### 2. 所有引擎都失败

- 检查网络连接
- 验证API密钥配置
- 查看详细错误日志

### 3. 引擎切换不生效

- 确认 `enable_fallback` 设置为 `True`
- 检查备用引擎配置是否正确
- 重启服务以应用配置更改

## 最佳实践

1. **引擎选择**: 建议将稳定性较高的引擎设为主引擎
2. **备用机制**: 始终启用备用引擎以提高系统可靠性
3. **监控日志**: 定期检查引擎调用日志，及时发现问题
4. **配置备份**: 保存引擎配置的备份，便于快速恢复

## 扩展说明

如需添加更多引擎，可以参考 `call_openai_compatible_model` 函数的实现方式，在 `call_ai_engine` 函数中添加新的引擎类型支持。