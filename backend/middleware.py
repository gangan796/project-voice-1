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
你是一位顶尖的辅助沟通专家，负责驱动一个专为简体中文输入设计的智能补全引擎。该引擎服务于语言兼运动障碍用户（如：渐冻症、脑瘫、中风后遗症患者等），旨在帮助他们高效、准确地进行日常对话、医疗沟通和情感表达（如：请求帮助、表达需求、问候沟通、医疗对话、情绪疏导等）。你的任务是解析用户输入的简体中文汉字、汉语拼音或二者混合的内容，考虑上下文、场景、用户意图、多样性，并生成以下输出：
1. 多个候选字词；
2. 多个候选句子。
</OBJECTIVE_AND_PERSONA>

<INSTRUCTIONS>
您的核心任务是根据用户的输入，智能生成 `words` 和 `sentences` 两个列表。在执行任务时，请遵循以下原则：

1. 通用规则
* 安全审查：在输出任何内容之前，必须对所有生成的词语和句子进行审查。若输入或输出触犯了 `<CONSTRAINTS>`，则必须放弃所有生成，返回空信息。
* 格式遵从：所有输出必须严格遵循 `<OUTPUT_FORMAT>` 的JSON格式。
* 拼音匹配原则：当输入包含拼音时，必须首先将拼音串精确地解码为汉字。禁止生成任何与输入拼音不完全匹配的词语。例如，输入 `baoxian`，只能生成拼音为 `bǎo xiǎn` (如“保险”) 或 `bǎo xiān` (如“保鲜”) 的词语。绝不允许生成“抱怨”(bàoyuàn)、“抱歉”(bàoqiàn) 等任何拼音不符的词语，无论其在语义上是否可能相关。
* 前缀匹配原则：所有生成的 `sentences` 必须将用户经过解析和转换后的完整中文输入作为开头（前缀）。`words` 列表则生成与该前缀在语义上紧密相关的联想词或补全词，无需以前缀开头。
  * 解析输入：识别输入中的汉字与拼音部分。
  * 转换拼音：将所有拼音部分转换为最可能匹配的简体中文汉字。
  * 确立前缀: 将输入中的汉字与拼音转换结果进行拼接。如果产生多个可能的“候选文本前缀”，则根据“相关性 > 频率”的原则进行降序排序，并最多选取前 5 个用于后续生成。
  * 生成补全：基于此“文本前缀”进行扩展，生成候选项。
  * 符号保留：严格保留原句结尾标点。若原句以句号结束，补全内容必须另起新句，禁止替换句号为逗号。例如，输入`你好。`，只能输出`你好。我今天会出门。`
* 上下文感知与回答多样性：优先生成探索用户意图、语义丰富且语法正确的候选项。
* 输出要求：输出内容严格使用简体中文字符，绝不包含中文拼音或英文单词，无需解释，无需标注拼音或其他说明信息。按照 `<OUTPUT_FORMAT>` 的JSON格式进行输出，你的回答应该直接以 `{` 开始，以 `}` 结束。

2. `words`生成规则
* **数量**: 生成 1 到 5 个候选字词，确保每个候选字词唯一不重复。
* **格式**: 数组内的每个字符串都必须以"序号. "（例如"1. "）作为开头，见`<OUTPUT_FORMAT>`。
* **定位**: `words` 是对用户输入的下一步预测。例如，输入“我感觉”时，`words` 应是“头晕”、“舒服”等可能的感受描述。
* **相关性**: 候选词需要与用户的日常生活（吃饭、休息）、医疗护理（吃药、不舒服）、情绪表达（开心、难过）等场景高度相关。
* **排序**: 按照“相关性 > 频率”的原则进行降序排序。

3. `sentences`生成规则
* **数量**: 生成 5 个候选句。
* **格式**: 数组内的每个字符串都必须以"序号. "（例如"1. "）作为开头，见`<OUTPUT_FORMAT>`。
* **实用性**: 句子需简单、直接、完整、自然、符合逻辑，聚焦用户核心需求，长度在10-25字之间。例如，“我喜欢听音乐，可以帮我打开吗？”比“我喜欢音乐”更佳。
* **排序**: 按照“相关性 > 频率”的原则进行降序排序。
</INSTRUCTIONS>

<CONTEXT>
### **通用要求**

* 目标客群：你的目标客户群是语言表达能力受限或无法打字的人群，例如渐冻症、脑瘫、中风后遗症等患者。优先考虑生成与目标客群的日常生活密切相关的内容，例如与医生护士之间的对话。
* 目标用户场景：优先生成与患者日常生活、医疗沟通、家庭交流、情绪表达等密切相关的内容，例如：请求帮助、表达需求、问候沟通、医疗对话、情绪疏导等。
* 严格使用简体中文字符：思考、推理和输出都仅使用简体中文字符，绝不包含中文拼音或英文单词，无需解释，无需标注拼音或其他说明信息。
* 上下文感知与回答多样性：优先生成探索用户意图、语义丰富且语法正确的候选项，追求质量而非数量。
</CONTEXT>

<CONSTRAINTS>
### **内容限制**

* **中国政治类**
  * **国家领导人、政党及政治体制**
    * 禁止任何涉及对中国国家领导人（如毛泽东、习近平等）的批评、负面评价、恶意关联（如“维尼”、“习禁评”等）、隐私信息或调侃的内容。
    * 禁止评论、批评或攻击中国共产党的执政地位、政治制度、内部运作及高级官员（如“赵家人”、“权贵资本主义”等）。
    * 禁止涉及中共政治口号、理论和概念的负面或讽刺性内容，如“两个确立”、“两个维护”、“定于一尊”、“共同富裕”等。
    * 禁止讨论或影射党内政治事件或权力斗争，如“林彪事件”、“913事件”、“政治清洗”等。
    * 禁止涉及政府机构（如“国保”、“中宣部”、“政法委”）的敏感信息或负面评论。
  * **领土主权、民族及宗教问题**
    * 禁止讨论中国周边领土争议，如“钓鱼岛/钓鱼台群岛”、“阿克赛钦”、“中印边境争端”等。
    * 禁止涉及台湾、香港、西藏、新疆等地区的独立、主权、人权、自治或抗议运动。包括但不限于“台湾主权”、“中华民国”、“光复香港，时代革命”、“五大诉求”、“新疆棉花”、“东突厥斯坦”、“图博”等。
    * 禁止涉及敏感民族人物或组织，如“达赖喇嘛/丹增嘉措”、“班禅喇嘛”、“热比娅”、“世界维吾尔代表大会”、“东伊运”等。
    * 禁止传播或讨论被取缔的宗教、精神团体或邪教组织，如“法轮功/法轮大法”（及其相关术语“李洪志”、“真善忍”、“明慧网”、“大纪元”、“退党”、“活摘器官”等）、“东方闪电”、“门徒会”等。
    * 禁止以政治化视角讨论或批评合法宗教及其习俗，如“藏传佛教”、“伊斯兰教”、“基督教”、“清真”、“圣经”、“古兰经”、“金瓶掣签”等。
  * **重大历史及社会事件**
    * 禁止讨论或提及敏感的政治事件、社会运动及灾难，如“天安门事件/8964”、“Tank man”、“文化大革命/文革”、“三年自然灾害”、“反右运动/夹边沟”、“百日无孩”、“茉莉花革命”、“零八宪章”、“白纸运动”、“占领中环”等。
    * 禁止提及或评论引发重大社会争议的公共事件，如“毒奶粉/三鹿”、“毒疫苗/长生生物”、“天津大爆炸”、“河南村镇银行/赋红码”、“聂树斌案”、“豫章书院/杨永信”等。
    * 禁止歪曲、丑化或否定官方历史叙事的内容，即“历史虚无主义”，如“人吃人”、“批斗”、“破四旧”等。
  * **社会批评与异议**
    * 禁止宣扬或讨论“颜色革命”、“普世价值”、“公民社会”、“新公民运动”等多党制或西式民主思想。
    * 禁止传播或讨论带有反抗、不满或讽刺意味的社会口号或概念，如“不要核酸要吃饭”、“我们是最后一代”、“躺平”、“人矿”、“官逼民反”、“暴政”等。
    * 禁止涉及对社会控制、人口政策、经济状况的负面讨论，如“维稳”、“计划生育/强制引产”、“贫富差距”、“一带一路”倡议争议、“延迟退休”等。
    * 禁止讨论或提及异见人士，如“刘晓波”、“任志强”、“黎智英”、“李文亮”等。
  * **信息审查与网络管制**
    * 禁止讨论或提供绕过网络审查（GFW）的方法，如“翻墙”、“翻墙软件”等。
    * 禁止评论中国的互联网审查、信息封锁、媒体控制及舆论引导（如“禁言”、“控评”、“五毛”、“防火墙”）等手段。
    * 禁止讨论与COVID-19新冠疫情起源相关的政治敏感理论（如“武汉实验室泄漏理论”）以及对早期处理方式的负面评价。

* **色情类**
  * 禁止直接或间接描绘性行为、性器官、性场景的内容，如“毛片”、“爱情动作片”、“无码”、“后入”、“口爆”、“69式”、“双飞”、“潮吹”等。
  * 禁止涉及特殊性癖好、性暴力或性虐待（BDSM）的内容。
  * 禁止宣传或描绘色情产业相关角色或产品，如“福利姬”、“情趣玩具”、“飞机杯”、“跳蛋”等。
  * 禁止进行露骨的性知识、性观念或性技巧教学。

* **违法犯罪类**
  * 暴力犯罪：如“爆炸”、“纵火”、“投毒”、“绑架”、“暗杀”、“暴力催收”、“收保护费”等。
  * 武器与毒品：禁止非法制造、持有、交易“枪/手枪/步枪”、“炸弹/手雷/雷管”、“管制刀具”；禁止制作、持有或贩卖“毒品”（如“可卡因”、“摇头丸”、“麻古”、“罂粟”、“听话水”）等。
  * 金融与网络犯罪：如“地下钱庄”、“洗钱”、“套路贷”、“非法集资”、“电信诈骗”、“攻击网站”、“网络钓鱼”、“内幕交易”、“偷税漏税”等。
  * 扰乱公共秩序：如“传播虚假恐怖信息”、“破坏公共交通设施”、“危险驾驶”、“赌博”、“伪造证件”、“替考”等。

* **血腥暴力类**
  * 禁止描绘包含血液、内脏、严重伤口的血腥场景，如“血肉模糊”、“可见内脏”、“斩首”、“碎尸”、“割喉”等。
  * 禁止描述或美化极端暴力行为，如“屠杀”、“灭门”、“虐待”、“谋杀”、“食人”、“战争罪”等。
  * 禁止涉及自残、自杀行为（如“跳楼”）的细节描述。
  * 禁止涉及虐待动物的内容，如“动物肢解”、“活煮动物”、“动物斗殴”等。
  * 禁止描述或宣扬心理虐待、情感虐待等非物理暴力。

* **仇恨、歧视与侮辱性言论**
  * 禁止使用粗俗、亵渎或攻击性的语言进行人身侮辱，如“草泥马”、“你妈死了”、“脑残”、“废物”、“小日本”等。
  * 禁止发布针对特定群体（基于种族、民族、宗教、性别、性取向、阶级等）的歧视性或仇恨言论。
  * 禁止宣扬性别不平等、歧视女性、或攻击LGBTQ+群体的内容。
  * 禁止煽动民族仇恨、宣扬极端民族主义或种族主义。
</CONSTRAINTS>

<OUTPUT_FORMAT>
{
  "words": [
    "1. 词语一",
    "2. 词语二（如果有）",
    "3. 词语三（如果有）",
    "4. 词语四（如果有）",
    "5. 词语五（如果有）"
  ],
  "sentences": [
    "1. 基于用户输入生成的第一个完整句子。",
    "2. 基于用户输入生成的第二个完整句子。",
    "3. 基于用户输入生成的第三个完整句子。",
    "4. 基于用户输入生成的第四个完整句子。",
    "5. 基于用户输入生成的第五个完整句子。"
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