#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中文输入智能补全引擎中间件
专为有语言或运动障碍的用户设计的智能补全API中间件
"""

import json
import textwrap
import requests
from flask import Flask, request, jsonify
from typing import Dict, Any, Optional, List
import logging
import google.generativeai as genai
from pydantic import BaseModel

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# ================================
# 配置变量 - 请根据实际情况修改
# ================================

# 是否为测试模式 - True: 返回假数据, False: 调用真实API
IS_TEST_MODE = False

# API模型配置 - Ollama Gemma3配置
API_CONFIG = {
    "api_key": "AIzaSyBZOa8jMZsM7KlnJcgNX4dQZvsRNsbobp8",  # Ollama不需要API密钥
    "model": "gemma-3-27b-it",  # Ollama中的Gemma3模型名称
    "local_url": "https://aistudio.google.com/",  # Ollama默认地址
    "use_local": False,  # True使用本地Ollama部署, False使用云端API
    "timeout": 60,  # 请求超时时间（秒）- Gemma可能需要更长时间
    "max_retries": 3  # 最大重试次数
}

# ================================
# 系统提示词配置
# ================================

system_prompt = textwrap.dedent("""
<OBJECTIVE_AND_PERSONA>
您是一位顶尖的辅助沟通专家，任务是驱动一个先进的中文输入智能补全引擎。该引擎专为有语言或运动障碍的用户（如：渐冻症、脑瘫、中风后遗症患者等）设计。您的核心职责是解析用户输入的简体中文汉字、汉语拼音或二者的混合内容，并即时生成两类输出：1) 高度相关的候选字词；2) 多个完整的、符合场景的联想句子。最终目标是赋能用户，帮助他们高效、准确地进行日常沟通、医疗交流和情感表达。
</OBJECTIVE_AND_PERSONA>

<INSTRUCTIONS>
您的核心任务是根据用户的输入，智能生成 `words` 和 `sentences` 两个列表。在执行任务时，请遵循以下原则：

1. 输入处理原则
* 您的所有联想和生成都必须基于对用户输入的智能解析，包括完整拼音、缩写、模糊拼音的补全。

2. "words"生成规则
* **目标**：生成 5 个最可能符合用户意图的候选词（或短语）。
* **内容**：词语必须与目标用户的**日常生活、医疗护理、情绪表达**等场景高度相关。
* **排序**：按"相关性 > 频率"的原则降序排列。

3. "sentences"生成规则
* **目标**：生成 5 个完整、实用、符合逻辑的联想句。
* **构建方法**：每个句子都必须以"固定前缀" + "某个候选词"作为开头，不得修改或遗漏。
* **内容要求**：聚焦用户核心需求，长度在10-25字之间，以句号结尾。

4. 最高优先级指令
* **安全审查**：在输出任何内容之前，必须对所有生成的词语和句子进行审查。若任何内容触犯了 `<CONSTRAINTS>`，则必须放弃所有生成，并仅返回指定的标准错误信息。
* **格式遵从**：严格按照 `<OUTPUT_FORMAT>` 的JSON格式进行输出。
</INSTRUCTIONS>

<CONTEXT>
### **通用要求**

* 目标客群：你的目标客户群是语言表达能力受限或无法打字的人群，例如渐冻症、脑瘫、中风后遗症等患者。优先考虑生成与目标客群的日常生活密切相关的内容，例如与医生护士之间的对话。
* 目标用户场景：优先生成与患者日常生活、医疗沟通、家庭交流、情绪表达等密切相关的内容，例如：请求帮助、表达需求、问候沟通、医疗对话、情绪疏导等。
* 严格使用简体中文字符：思考、推理和输出都仅使用简体中文字符，绝不包含中文拼音或英文单词，无需解释，无需标注拼音或其他说明信息。
* 上下文感知与回答多样性：优先生成探索用户意图、语义丰富且语法正确的候选项，追求质量而非数量。
</CONTEXT>

<OUTPUT_FORMAT>
{
  "words": [
    "1. 词语一",
    "2. 词语二",
    "3. 词语三",
    "4. 词语四",
    "5. 词语五"
  ],
  "sentences": [
    "1. 基于某个词语生成的第一个完整句子。",
    "2. 基于某个词语生成的第二个完整句子。",
    "3. 基于某个词语生成的第三个完整句子。",
    "4. 基于某个词语生成的第四个完整句子。",
    "5. 基于某个词语生成的第五个完整句子。"
  ]
}
</OUTPUT_FORMAT>
""")

# ================================
# 响应数据模型定义
# ================================

class CompletionResponse(BaseModel):
    """智能补全响应数据模型"""
    words: List[str]  # 候选词语列表
    sentences: List[str]  # 联想句子列表

# ================================
# 提示词筛选函数
# ================================

def extract_relevant_prompts(text: str, input_preference: Optional[str] = None) -> str:
    """
    从系统提示词中筛选出与输入相关的提示词片段
    
    Args:
        text: 用户输入的文本
        input_preference: 输入偏好
        
    Returns:
        筛选后的提示词补充内容
    """
    # 基础提示词补充
    additional_prompts = []
    
    # 根据输入文本特征添加相关提示
    if any(char in text for char in "我你他她它"):
        additional_prompts.append("重点关注第一人称和第二人称的日常表达需求")
    
    if any(word in text for word in ["帮", "请", "麻烦"]):
        additional_prompts.append("优先生成请求帮助和礼貌用语相关的内容")
    
    if any(word in text for word in ["感觉", "疼", "痛", "不舒服", "难受"]):
        additional_prompts.append("重点关注身体状况和医疗沟通场景")
    
    if any(word in text for word in ["吃", "喝", "饿", "渴"]):
        additional_prompts.append("优先生成饮食需求相关的表达")
    
    # 根据输入偏好添加特定提示
    if input_preference:
        if "医疗" in input_preference or "护理" in input_preference:
            additional_prompts.append("专注于医疗护理场景的专业表达")
        elif "家庭" in input_preference or "亲情" in input_preference:
            additional_prompts.append("重点关注家庭交流和情感表达")
        elif "日常" in input_preference:
            additional_prompts.append("优先生成日常生活场景的实用表达")
    
    # 拼音输入特殊处理
    if text.isalpha():  # 纯字母输入（拼音）
        additional_prompts.append("输入为拼音形式，需要进行拼音到汉字的智能转换")
    
    # 组合提示词
    if additional_prompts:
        return "\n\n<ADDITIONAL_CONTEXT>\n" + "\n".join(f"- {prompt}" for prompt in additional_prompts) + "\n</ADDITIONAL_CONTEXT>"
    
    return ""

# ================================
# 测试数据
# ================================

def get_test_data(text: str) -> Dict[str, Any]:
    """
    根据输入文本返回测试数据
    
    Args:
        text: 用户输入的文本
        
    Returns:
        包含words和sentences的字典
    """
    # 根据输入文本的不同返回不同的测试数据
    if "我" in text:
        return {
            "words": [
                "1. 我想",
                "2. 我要",
                "3. 我感觉",
                "4. 我需要",
                "5. 我希望"
            ],
            "sentences": [
                "1. 我想喝点温水，麻烦您帮我倒一杯。",
                "2. 我要休息一会儿，感觉身体有些累了。",
                "3. 我感觉好多了，谢谢您的关心。",
                "4. 我需要上厕所，请帮我把轮椅推过来。",
                "5. 我希望能够早日康复，回到正常生活。"
            ]
        }
    elif "帮" in text:
        return {
            "words": [
                "1. 帮我",
                "2. 帮助",
                "3. 帮忙",
                "4. 帮一下",
                "5. 帮个忙"
            ],
            "sentences": [
                "1. 帮我调整一下床的高度，现在太高了。",
                "2. 帮我拿一下那个杯子，我够不着。",
                "3. 帮我联系一下医生，我有些不舒服。",
                "4. 帮我开一下窗户，房间里有点闷。",
                "5. 帮我记录一下今天的用药情况。"
            ]
        }
    else:
        return {
            "words": [
                "1. 今天",
                "2. 现在",
                "3. 这里",
                "4. 那个",
                "5. 可以"
            ],
            "sentences": [
                "1. 今天感觉身体状况还不错，精神也好一些。",
                "2. 现在想要休息一下，有点累了。",
                "3. 这里的温度刚好，很舒适。",
                "4. 那个药物的效果很好，症状减轻了。",
                "5. 可以帮我联系一下家人吗？"
            ]
        }

# ================================
# API调用函数
# ================================

def call_gemini_model(text: str, input_preference: Optional[str] = None) -> Dict[str, Any]:
    """
    调用Google Gemini模型获取智能补全结果
    
    Args:
        text: 用户输入的文本
        input_preference: 输入偏好（可选）
        
    Returns:
        包含words和sentences的字典
        
    Raises:
        Exception: API调用失败时抛出异常
    """
    try:
        # 筛选相关提示词
        additional_context = extract_relevant_prompts(text, input_preference)
        
        # 构建完整的提示内容
        full_prompt = system_prompt + additional_context
        
        # 构建用户输入内容
        user_content = f"用户输入：{text}"
        if input_preference:
            user_content += f"\n输入偏好：{input_preference}"
        
        # 完整的请求内容
        contents = f"{full_prompt}\n\n{user_content}"
        
        logger.info(f"正在调用Gemini模型，输入文本: {text}，使用{'本地部署' if API_CONFIG['use_local'] else 'Google云端'}")
        
        if API_CONFIG["use_local"]:
            # 本地化部署调用
            result = call_local_gemini(contents)
        else:
            # Google云端调用
            result = call_cloud_gemini(contents)
        
        # 验证返回格式
        if "words" in result and "sentences" in result:
            logger.info("Gemini模型调用成功")
            return result
        else:
            raise ValueError("模型返回格式不正确，缺少必要字段")
            
    except Exception as e:
        logger.error(f"Gemini模型调用失败: {e}")
        raise Exception(f"模型调用失败: {e}")

def call_cloud_gemini(contents: str) -> Dict[str, Any]:
    """
    调用Google云端Gemini模型
    
    Args:
        contents: 完整的请求内容
        
    Returns:
        解析后的响应数据
    """
    try:
        # 配置API密钥
        genai.configure(api_key=API_CONFIG["api_key"])
        
        # 获取模型实例
        model = genai.GenerativeModel(API_CONFIG["model"])
        
        # 配置生成参数
        generation_config = {
            "temperature": 0.7,
            "top_p": 0.9,
            "max_output_tokens": 1000,
        }
        
        # 配置安全设置
        safety_settings = [
            {
                "category": "HARM_CATEGORY_HARASSMENT",
                "threshold": "BLOCK_NONE"
            },
            {
                "category": "HARM_CATEGORY_HATE_SPEECH",
                "threshold": "BLOCK_NONE"
            },
            {
                "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                "threshold": "BLOCK_NONE"
            },
            {
                "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                "threshold": "BLOCK_NONE"
            },
        ]
        
        # 调用模型生成内容
        response = model.generate_content(
            contents,
            generation_config=generation_config,
            safety_settings=safety_settings
        )
        
        # 检查响应是否有内容
        if not response.text:
            logger.warning("Gemini模型返回空内容")
            return {
                "words": ["继续", "好的", "明白", "谢谢", "需要帮助"],
                "sentences": [
                    "请继续输入您想要表达的内容。",
                    "好的，我会尽力帮助您。",
                    "明白您的意思了。",
                    "谢谢您的耐心。",
                    "需要我提供什么帮助吗？"
                ]
            }
        
        # 获取并清理响应文本
        text = response.text.strip()
        
        # 移除可能的markdown格式标记
        if text.startswith('```json'):
            text = text[7:]
        if text.endswith('```'):
            text = text[:-3]
        text = text.strip()
        
        # 移除高亮标记（星号）
        text = text.replace('*', '')
        
        try:
            # 尝试解析JSON响应
            parsed_data = json.loads(text)
            
            # 验证数据结构
            if not isinstance(parsed_data, dict):
                raise ValueError("返回数据不是JSON对象")
            
            words = parsed_data.get("words", [])
            sentences = parsed_data.get("sentences", [])
            
            # 标准化数据结构
            if isinstance(words, str):
                words = [words]
            if isinstance(sentences, str):
                sentences = [sentences]
            
            # 确保是列表并过滤空值
            words = [str(word).strip() for word in words if word and str(word).strip()][:5]
            sentences = [str(sentence).strip() for sentence in sentences if sentence and str(sentence).strip()][:5]
            
            # 填充默认值（如果为空）
            if not words:
                words = ["继续", "好的", "明白", "谢谢", "需要帮助"]
            if not sentences:
                sentences = [
                    "请继续输入您想要表达的内容。",
                    "好的，我会尽力帮助您。",
                    "明白您的意思了。",
                    "谢谢您的耐心。",
                    "需要我提供什么帮助吗？"
                ]
            
            return {
                "words": words,
                "sentences": sentences
            }
            
        except (json.JSONDecodeError, ValueError) as e:
            logger.error(f"JSON解析失败: {e}")
            logger.error(f"原始返回内容: {repr(text)}")
            
            # JSON解析失败时的备用处理
            lines = [line.strip() for line in text.split('\n') if line.strip()]
            short_lines = [line for line in lines if len(line) <= 15][:5]
            long_lines = [line for line in lines if len(line) > 15][:5]
            
            return {
                "words": short_lines if short_lines else ["继续", "好的", "明白", "谢谢", "需要帮助"],
                "sentences": long_lines if long_lines else [
                    "请继续输入您想要表达的内容。",
                    "好的，我会尽力帮助您。",
                    "明白您的意思了。",
                    "谢谢您的耐心。",
                    "需要我提供什么帮助吗？"
                ]
            }
        
    except Exception as e:
        logger.error(f"Google云端Gemini调用失败: {e}")
        raise

def call_local_gemini(contents: str) -> Dict[str, Any]:
    """
    调用本地部署的Gemini模型
    
    Args:
        contents: 完整的请求内容
        
    Returns:
        解析后的响应数据
    """
    try:
        # 构建本地API请求数据
        request_data = {
            "model": API_CONFIG["model"],
            "prompt": contents,
            "format": "json",
            "stream": False
        }
        
        # 发送请求到本地服务
        response = requests.post(
            f"{API_CONFIG['local_url']}/api/generate",
            json=request_data,
            timeout=API_CONFIG["timeout"]
        )
        
        response.raise_for_status()
        response_data = response.json()
        
        # 解析本地模型响应
        if "response" in response_data:
            result = json.loads(response_data["response"])
            return result
        else:
            raise ValueError("本地模型响应格式异常")
            
    except requests.exceptions.RequestException as e:
        logger.error(f"本地Gemini调用失败: {e}")
        raise
    except json.JSONDecodeError as e:
        logger.error(f"本地模型JSON解析失败: {e}")
        raise

# ================================
# 主要路由
# ================================

@app.route('/api/complete', methods=['POST'])
def complete_text():
    """
    文本智能补全API接口
    
    接收前端POST请求，返回智能补全结果
    """
    try:
        # 获取请求数据
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "请求数据为空"}), 400
            
        # 提取参数
        text = data.get('text', '')
        input_preference = data.get('inputPreference')
        
        # 验证输入
        if not text:
            return jsonify({"error": "输入文本不能为空"}), 400
            
        logger.info(f"收到补全请求 - 文本: '{text}', 偏好: '{input_preference}', 测试模式: {IS_TEST_MODE}")
        
        # 根据测试模式选择处理方式
        if IS_TEST_MODE:
            # 测试模式：返回假数据
            logger.info("使用测试模式，返回假数据")
            result = get_test_data(text)
        else:
            # 生产模式：调用Gemini模型
            logger.info("使用生产模式，调用Gemini模型")
            result = call_gemini_model(text, input_preference)
            
        return jsonify(result)
        
    except Exception as e:
        logger.error(f"处理请求时发生错误: {e}")
        return jsonify({"error": f"服务器内部错误: {str(e)}"}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """
    健康检查接口
    """
    return jsonify({
        "status": "healthy",
        "test_mode": IS_TEST_MODE,
        "version": "1.0.0"
    })

@app.route('/api/config', methods=['GET'])
def get_config():
    """
    获取当前配置信息
    """
    return jsonify({
        "test_mode": IS_TEST_MODE,
        "api_configured": bool(API_CONFIG["api_key"] and API_CONFIG["api_key"] != "your-api-key-here")
    })

# ================================
# 错误处理
# ================================

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "接口不存在"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "服务器内部错误"}), 500

# ================================
# 主程序入口
# ================================

if __name__ == '__main__':
    print("="*50)
    print("中文输入智能补全引擎中间件")
    print("="*50)
    print(f"测试模式: {'开启' if IS_TEST_MODE else '关闭'}")
    print(f"API配置: {'已配置' if API_CONFIG['api_key'] != 'your-api-key-here' else '未配置'}")
    print("="*50)
    print("可用接口:")
    print("  POST /api/complete - 文本智能补全")
    print("  GET  /api/health  - 健康检查")
    print("  GET  /api/config  - 配置信息")
    print("="*50)
    
    # 启动Flask应用
    app.run(
        host='0.0.0.0',  # 允许外部访问
        port=5000,       # 端口号
        debug=True       # 开发模式
    )