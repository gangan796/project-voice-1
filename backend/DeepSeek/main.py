from fastapi import FastAPI
from openai import OpenAI
from typing import Optional, Dict, Any
import json
from prompt import system_prompt_short

app = FastAPI(
    title="DeepSeek",
    version="1.0",
    description="DeepSeek API",
)

class DeepSeekConfig:
    """DeepSeek 配置类"""
    API_KEY = "sk-e2a0a76caab14d12998b7279dd6e6599"
    BASE_URL = "https://api.deepseek.com"
    MODEL_CHAT = "deepseek-chat"
    MODEL_REASONER = "deepseek-reasoner"

client = OpenAI(
    api_key=DeepSeekConfig.API_KEY,
    base_url=DeepSeekConfig.BASE_URL
)

def get_deepseek(text: str, input_preference: Optional[str] = None) -> Dict[str, Any]:
    """
    获取 DeepSeek JSON格式响应
    
    Args:
        text: 输入文本
        input_preference: 输入偏好（可选）
        
    Returns:
        Dict[str, Any]: 包含words、sentences的JSON格式响应
    """
    # 构建用户输入内容
    user_content = f"用户输入：{text}"
    
    # 构建输入偏好提示词
    if input_preference:
        user_content += f"\n输入偏好：{input_preference}"
    
    # 构建完整的消息内容，添加JSON格式指导
    json_system_prompt = f"""{system_prompt_short}

请以JSON格式返回结果，包含以下字段：
- words: 单词数组，包含输入文本中的所有单词
- sentences: 句子数组，包含输入文本中的所有句子

示例格式：
{{
  "words": ["单词1", "单词2", "单词3"],
  "sentences": ["句子1", "句子2"],
}}"""
    
    # 调用DeepSeek API获取JSON格式响应
    response = client.chat.completions.create(
        model=DeepSeekConfig.MODEL_CHAT,
        messages=[
            {"role": "system", "content": json_system_prompt},
            {"role": "user", "content": user_content},
        ],
        stream=False,
        temperature=0.7,
        max_tokens=1000,
        response_format={
            "type": "json_object"
        }
    )
    
    # 解析JSON响应
    try:
        result_text = response.choices[0].message.content
        result_json = json.loads(result_text)
        
        # 确保返回的JSON包含必需的字段
        if "words" not in result_json:
            result_json["words"] = [
                "json",
                "解析",
                "失败",
            ]
        if "sentences" not in result_json:
            result_json["sentences"] = [
                "1.JSON解析失败"
            ]
            
        return result_json
    except (json.JSONDecodeError, AttributeError) as e:
        # 如果JSON解析失败，返回基本结构
        return {
            "words": text.split(),
            "sentences": [text],
            "error": f"JSON解析失败: {{str(e)}}"
        }

@app.get("/config")
def get_config():
    """
    获取 DeepSeek 配置
    :return: 配置信息
    """
    config = {
        "title": "DeepSeek",
        "version": "1.0",
        "description": "DeepSeek API",
        "api_key": DeepSeekConfig.API_KEY,
        "base_url": DeepSeekConfig.BASE_URL,
        "model_chat": DeepSeekConfig.MODEL_CHAT,
        "model_reasoner": DeepSeekConfig.MODEL_REASONER,
    }
    return config

@app.post("/api/complete")
def complete(request: dict) -> Dict[str, Any]:
    """
    完成请求，返回JSON格式响应
    
    Args:
        request: 请求参数，包含text和input_preference字段
        
    Returns:
        Dict[str, Any]: JSON格式响应，包含words、sentences和full_text字段
    """
    # 从请求参数中获取文本和输入偏好
    text = request.get("text")
    input_preference = request.get("inputPreference")

    # 调用 DeepSeek 获取JSON格式响应
    result = get_deepseek(text, input_preference)
    
    return result
