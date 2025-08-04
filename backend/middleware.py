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
import time
import threading
from collections import defaultdict
from functools import wraps
# 新增：OpenAI兼容客户端导入
from openai import OpenAI

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# ================================
# 请求限流和缓存配置
# ================================

# 请求限流配置
REQUEST_RATE_LIMIT = {
    "max_requests_per_minute": 8,   # 每分钟最多8个请求（更保守）
    "max_requests_per_second": 1,   # 每秒最多1个请求（更保守）
    "cooldown_after_429": 120       # 429错误后冷却120秒（延长冷却时间）
}

# 全局限流状态
request_times = []  # 全局请求时间记录
last_429_time = 0  # 最后一次429错误的时间
request_cache = {}  # 请求缓存
cache_lock = threading.Lock()  # 缓存锁

def rate_limit_decorator(f):
    """
    请求限流装饰器（全局限流，不区分IP）
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        current_time = time.time()
        
        # 检查是否在冷却期内
        global last_429_time
        if current_time - last_429_time < REQUEST_RATE_LIMIT["cooldown_after_429"]:
            logger.warning(f"在冷却期内，拒绝请求")
            return jsonify({
                "error": "API正在冷却中，请稍后再试",
                "retry_after": int(REQUEST_RATE_LIMIT["cooldown_after_429"] - (current_time - last_429_time))
            }), 429
        
        # 清理过期的请求记录（超过1分钟的）
        global request_times
        request_times = [
            req_time for req_time in request_times 
            if current_time - req_time < 60
        ]
        
        # 检查每分钟请求数
        if len(request_times) >= REQUEST_RATE_LIMIT["max_requests_per_minute"]:
            logger.warning(f"每分钟请求数超限，当前请求数: {len(request_times)}")
            return jsonify({
                "error": "请求过于频繁，请稍后再试",
                "retry_after": 60
            }), 429
        
        # 检查每秒请求数
        recent_requests = [
            req_time for req_time in request_times 
            if current_time - req_time < 1
        ]
        if len(recent_requests) >= REQUEST_RATE_LIMIT["max_requests_per_second"]:
            logger.warning(f"每秒请求数超限")
            return jsonify({
                "error": "请求过于频繁，请稍后再试",
                "retry_after": 1
            }), 429
        
        # 记录本次请求时间
        request_times.append(current_time)
        
        try:
            return f(*args, **kwargs)
        except Exception as e:
            # 如果是429错误，更新冷却时间
            if "429" in str(e) or "quota" in str(e).lower():
                last_429_time = current_time
                logger.error(f"API配额超限，启动冷却机制")
            raise
    
    return decorated_function

def get_cache_key(text: str, input_preference: Optional[str] = None) -> str:
    """
    生成缓存键
    """
    return f"{text}_{input_preference or 'none'}"

def get_cached_response(cache_key: str) -> Optional[Dict[str, Any]]:
    """
    获取缓存的响应
    """
    with cache_lock:
        if cache_key in request_cache:
            cached_data, timestamp = request_cache[cache_key]
            # 缓存有效期10分钟（延长缓存时间）
            if time.time() - timestamp < 600:
                logger.info(f"使用缓存响应: {cache_key}")
                return cached_data
            else:
                # 删除过期缓存
                del request_cache[cache_key]
    return None

def set_cached_response(cache_key: str, response_data: Dict[str, Any]) -> None:
    """
    设置缓存响应
    """
    with cache_lock:
        request_cache[cache_key] = (response_data, time.time())
        
        # 限制缓存大小，最多保留50个
        if len(request_cache) > 50:
            # 删除最旧的10个缓存
            oldest_keys = sorted(
                request_cache.keys(), 
                key=lambda k: request_cache[k][1]
            )[:10]
            for key in oldest_keys:
                del request_cache[key]

# ================================
# 配置变量 - 请根据实际情况修改
# ================================

# 是否为测试模式 - True: 返回假数据, False: 调用真实API
IS_TEST_MODE = False

# API模型配置 - Ollama Gemma3配置（原有配置保持不变）
API_CONFIG = {
    "api_key": "AIzaSyACHTcUJp68ZH0MvBc8Pbp00b9cq50uPa4",  # Ollama不需要API密钥
    "model": "gemma-3-27b-it",  # 云端Gemma3模型名称
    # "model": "gemma3:12b",  # 本地Gemma3模型名称
    "local_url": "https://aistudio.google.com/",  # 云端Gemma3模型地址
    # "local_url": "http://localhost:11434",  # 本地Gemma3模型地址
    "use_local": False,  # True使用本地Ollama部署, False使用云端API
    "timeout": 60,  # 请求超时时间（秒）- Gemma可能需要更长时间
    "max_retries": 3  # 最大重试次数
}

# 新增：OpenAI兼容引擎配置 - Cloud Run部署的Gemma模型
OPENAI_COMPATIBLE_CONFIG = {
    "api_key": "2w38e9rqlz9iytvb",  # Cloud Run服务的API密钥
    "base_url": "https://gemma-3-12b-it-690935443087.europe-west1.run.app/v1",  # Cloud Run服务地址
    "model": "gemma3:12b",  # 模型名称
    "timeout": 60,  # 请求超时时间（秒）
    "max_retries": 3,  # 最大重试次数
    "enabled": True  # 是否启用此引擎
}

# 引擎选择配置
ENGINE_CONFIG = {
    "primary_engine": "gemini",  # 主引擎："gemini" 或 "openai_compatible"
    "fallback_engine": "openai_compatible",  # 备用引擎：当主引擎失败时使用
    "enable_fallback": True  # 是否启用备用引擎
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
* 拼音匹配原则：
  * 拼音补全：当发现拼音无法对应完整的汉字时，例如，输入 `我想c`，需要对拼音进行补全，例如，补全为 `我想chi`。
  * 转换汉字：将拼音串精确地解码为汉字。禁止生成任何与输入拼音不完全匹配的词语。例如，输入 `baoxian`，只能生成拼音为 `bǎo xiǎn` (如“保险”) 或 `bǎo xiān` (如“保鲜”) 的词语。绝不允许生成“抱怨”(bàoyuàn)、“抱歉”(bàoqiàn) 等任何拼音不符的词语，无论其在语义上是否可能相关。
* 前缀匹配原则：所有生成的 `sentences` 必须将用户经过解析和转换后的完整中文输入作为开头（前缀）。`words` 列表则生成与该前缀在语义上紧密相关的联想词或补全词，无需以前缀开头。
  * 解析输入：识别输入中的汉字与拼音部分。
  * 转换拼音：将所有拼音部分转换为以其开头的最可能匹配的简体中文汉字。
  * 确立前缀：输入中的汉字不允许任何修改，然后将汉字部分与拼音转换结果进行拼接。如果产生多个可能的“候选文本前缀”，则根据“相关性 > 频率”的原则进行降序排序，并最多选取前 5 个用于后续生成。
  * 生成补全：基于此“文本前缀”进行扩展，生成候选项。
  * 符号保留：严格保留原句结尾标点。若原句以句号结束，补全内容必须另起新句，禁止替换句号为逗号。例如，输入`你好。`，只能输出`你好。我今天会出门。`
* 上下文感知与回答多样性：优先生成探索用户意图、语义丰富且语法正确的候选项。
* 输出要求：输出内容严格使用简体中文字符，绝不包含中文拼音或英文单词，无需解释，无需标注拼音或其他说明信息。按照 `<OUTPUT_FORMAT>` 的JSON格式进行输出，你的回答应该直接以 `{` 开始，以 `}` 结束。

2. `words`生成规则
* **数量**: 生成 1 到 5 个候选字词，确保每个候选字词唯一不重复。
* **格式**: 数组内的每个字符串都必须以"序号. "（例如"1. "）作为开头，见`<OUTPUT_FORMAT>`。
* **定位**: `words` 首先应对用户输入的拼音的补全，例如，输入"我想c"时，`words`应该是"吃"、"唱"等对`c`的拼音补全。如果用户输入中没有拼音，则是对用户输入的下一步预测。例如，输入“我感觉”时，`words` 应是“头晕”、“舒服”等可能的感受描述。
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

<FEW_SHOT_EXAMPLES>

用户输入规范：n个汉字 + m个字母（n>=0, m>=0）
以下是一些示例，请参考其思维过程和输出内容：

### 情形 1：纯汉字（n>0, m=0）

输入：我感觉

思考过程：
1. 解析输入：纯汉字输入
2. 确定文本前缀：“我感觉”
3. 生成候选字词：预测用户可能描述的感受，如“头晕”、“舒服”、“冷”、“累”等。这些词语都直接描述身体或情绪状态。
4. 生成候选句：将这些感受放入一个完整的、符合用户场景的句子中，并常常附加一个请求或说明。sentences 中的每一句话都必须以“我感觉”开头，例如："我感觉好多了，谢谢您的关心。"
5. 整合输出：组合成最终的JSON。

输出：
{
  "words": [
    "1. 头晕",
    "2. 好多了",
    "3. 有点冷",
    "4. 不舒服",
    "5. 累了"
  ],
  "sentences": [
    "1. 我感觉头晕，想躺下休息一会儿。",
    "2. 我感觉好多了，谢谢您的关心。",
    "3. 我感觉有点冷，可以帮我加一条毯子吗？",
    "4. 我感觉身体不舒服，能不能请医生过来看看？",
    "5. 我感觉累了，今天不想进行康复训练了。"
  ]
}

### 情形 2：纯拼音（n=0, m>0）

输入：baoxian

思考过程：
1. 解析输入：纯拼音输入
2. 确定文本前缀：严格查找与 `baoxian` 拼音完全匹配的词语。找到“保险”(bǎo xiǎn)和“保鲜”(bǎo xiān)。排除如“抱怨”(bàoyuàn)、“抱歉”(bàoqiàn) 等任何拼音不符的词。
3. 生成候选字词：在“保险”和“保鲜”中，根据用户（医疗、生活）场景，“保险”的提及频率和相关性更高，因此排在前面。
4. 生成候选句：围绕“保险”和“保鲜”生成符合逻辑和场景的句子。
5. 整合输出：组合成最终的JSON。

输出：
{
  "words": [
    "1. 保险",
    "2. 保鲜"
  ],
  "sentences": [
    "1. 保险的理赔流程是怎样的，需要我提供什么资料？",
    "2. 保险可以报销这次的费用吗？",
    "3. 保险相关的事情需要咨询一下专业人士。",
    "4. 保鲜对食物很重要，请帮我把它放进冰箱里，谢谢。",
    "5. 保鲜盒的密封性很好，可以保存食物。"
  ]
}

输入：ceshi

错误输出：
{
  "words": [
    "1. 测试",
    "2. 厕所",
    "3. 侧身",
    "4. 测量"
  ],
  "sentences": [
    "1. 测试一下身体的感觉怎么样。",
    "2. 我想去厕所，可以帮我一下吗？",
    "3. 侧身慢慢地坐下，不要着急。",
    "4. 测量一下今天的体温和血压。",
    "5. 蹭试一下这个药膏，看看有没有过敏反应。"
  ]
}

错误原因：
违反了"核心规则：拼音严格匹配"。
-   **正确**：“测试”的拼音是 `cè shì`，与输入 `ceshi` 匹配。
-   **错误**：“厕所”的拼音是 `cè suǒ`，与 `ceshi` 不匹配。
-   **错误**：“侧身”的拼音是 `cè shēn`，与 `ceshi` 不匹配。
-   **错误**：“测量”的拼音是 `cè liáng`，与 `ceshi` 不匹配。
模型绝不可以生成这些拼音不符的词语。

正确输出：
{
  "words": [
    "1. 测试"
  ],
  "sentences": [
    "1. 测试看看这个新的辅助工具好用吗。",
    "2. 测试结果出来了吗，我想看一下。",
    "3. 测试的时候如果我感觉不舒服会告诉您。",
    "4. 测试结果什么时候才能出来呢？",
    "5. 测试完之后请告诉我一声，谢谢。"
  ]
}

### 情形 3：汉字拼音混合（n>0, m>0）

输入：今天我xiangch

思考过程：
1. 解析输入：用户输入属于汉字拼音混合，汉字前缀 `今天我` + 拼音后缀 `xiangch`。
2. 确定文本前缀：`xiangch` 是不完整的拼音，最可能的补全是 `xiang chi` (想吃) 或 `xiang chu` (想出)。完整的文本前缀为：今天我想吃、今天我想出去等。
3. 生成候选字词：基于解码结果，生成“想吃”和“想出去”。
4. 生成候选句：将解码后的词语与前缀“今天我”结合，生成完整的句子，如“今天我想吃点...”或“今天我想出去...”。
5. 整合输出：组合成最终的JSON。

输出：
{
  "words": [
    "1. 想吃",
    "2. 想出去"
  ],
  "sentences": [
    "1. 今天我想吃点清淡的，比如粥或者面条。",
    "2. 今天我想出去晒晒太阳，感觉在房间里有点闷。",
    "3. 今天我想吃苹果，可以帮我削一个吗？",
    "4. 今天我想出去走走，呼吸一下外面的新鲜空气。",
    "5. 今天我想吃完饭后看一会儿电视。"
  ]
}

### 情形 4：敏感内容

输入：香港kangyi

思考过程：
1. 解析输入：用户输入包含汉字香港和拼音kangyi。拼音kangyi解析为抗议。组合成为"香港抗议"。
2. 内容审查：检测到香港抗议是政治敏感内容，违反了`<CONSTRAINTS>`。
3. 立即终止后续流程，输出标准错误信息。

输出：
{
  "words": [
    "1. "
  ],
  "sentences": [
    "1. "
  ]
}

### 情形 5：完整句子

输入：我想喝水，可以帮我倒一杯吗？

思考过程：
1. 解析输入：用户输入的结尾是句号、问号、感叹号等可以表示句子结束的符号。
2. 继续生成：继续生成后续，协助用户持续生成句子内容，符合用户意图和逻辑。
3. 前缀限制：对已经输入的内容，不允许任何改动。

输出：
{
  "words": [
    "1. 水",
    "2. 杯子"，
    "3. 吃药"，
    "4. 我"
  ],
  "sentences": [
    "1. 我想喝水，可以帮我倒一杯吗？我有点口渴，",
    "2. 我想喝水，可以帮我倒一杯吗？我有点难受，",
    "3. 我想喝水，可以帮我倒一杯吗？我感觉不舒服",
    "4. 我想喝水，可以帮我倒一杯吗？吃药时间到了"
  ]
}

</FEW_SHOT_EXAMPLES>
""")

# ================================
# 简化版系统提示词配置
# ================================
system_prompt_short = textwrap.dedent("""
### 角色与任务

你是为语言兼运动障碍用户（如：渐冻症、脑瘫患者等）设计的中文拼音智能补全引擎。请根据用户输入的汉字、拼音或混合内容，解析意图，生成1-5个相关词语和5个实用句子，用于辅助日常对话、医疗沟通和情感表达等。

### 指令

1. 核心原则

* 安全第一：严守内容限制。对于任何违规请求，直接返回 {"words": ["1. "], "sentences": ["1. "]}。
* 拼音解析与前缀匹配：系统应首先尝试将末尾的拼音串解析为完整的词语（如 baoxian-> “保险”）。如果无法完整解析（如xiangch），则将其视为前缀，并预测可能的完整拼音和对应汉字（如 xiangch -> “想吃”、“想出去”）。所有生成内容都必须基于解析或预测出的“文本前缀”进行。
* 格式要求：仅输出简体中文。回复必须是完整的 JSON 格式，以 { 开始，以 } 结束，不含任何解释。

2. 内容生成规则

* words (候选字词)：
  * 数量：1-5个。
  * 补全：当用户输入中有拼音时，优先补全拼音并预测拼音对应的汉语词汇。
  * 预测：当输入中没有拼音时，预测用户接下来想输入的词。
* sentences (候选句)：
  * 数量：5个。
  * 前缀限制：输入中的汉字不允许任何修改，严格保留原句结尾标点。然后将汉字部分与拼音转换结果进行拼接。
  * 内容：实用、口语化的完整句子（10-25字），清晰表达用户意图。
* 排序：words 和 sentences 均按“相关性 > 频率”降序排列。

### 内容限制

* **中国政治敏感内容**：
  * **政治与领导人**：禁止批评、调侃国家领导人、中国共产党及政治体制。
  * **主权与领土**：禁止讨论台湾、香港、西藏、新疆等主权争议，以及相关抗议、人权问题和敏感人物。
  * **历史与社会事件**：禁止讨论“六四”、“文革”、“白纸运动”等敏感历史事件，以及重大的社会争议。
  * **意识形态与言论**：禁止宣扬西方民主思想、传播反抗性社会口号、讨论异见人士及信息封锁（如“翻墙”）。
  * **宗教政策**：禁止提及被取缔的宗教团体（如“法轮功”）及其相关内容。
* **其他**：禁止色情、违法犯罪、血腥暴力、仇恨侮辱相关内容。

### 输出格式与示例

#### 情形 1：纯汉字

输入：我感觉
输出：
{
  "words": [
    "1. 头晕",
    "2. 好多了",
    "3. 有点冷",
    "4. 不舒服",
    "5. 累了"
  ],
  "sentences": [
    "1. 我感觉头晕，想躺下休息一会儿。",
    "2. 我感觉好多了，谢谢您的关心。",
    "3. 我感觉有点冷，可以帮我加一条毯子吗？",
    "4. 我感觉身体不舒服，能不能请医生过来看看？",
    "5. 我感觉累了，今天不想进行康复训练了。"
  ]
}

#### 情形 2：纯拼音

输入：baoxian
输出：
{
  "words": [
    "1. 保险",
    "2. 保鲜",
    "3. 宝箱"
  ],
  "sentences": [
    "1. 保险的理赔流程是怎样的，需要我提供什么资料？",
    "2. 保险可以报销这次的费用吗？",
    "3. 保险相关的事情需要咨询一下专业人士。",
    "4. 保鲜对食物很重要，请帮我把它放进冰箱里，谢谢。",
    "5. 保鲜盒的密封性很好，可以保存食物。"
  ]
}

#### 情形 3：汉字拼音混合

输入：今天我xiangch
输出：
{
  "words": [
    "1. 想吃",
    "2. 想出去"
  ],
  "sentences": [
    "1. 今天我想吃点清淡的，比如粥或者面条。",
    "2. 今天我想出去晒晒太阳，感觉在房间里有点闷。",
    "3. 今天我想吃苹果，可以帮我削一个吗？",
    "4. 今天我想出去走走，呼吸一下外面的新鲜空气。",
    "5. 今天我想吃完饭后看一会儿电视。"
  ]
}

#### 情形 4：敏感内容

输入：香港kangyi
输出：
{
  "words": [
    "1. "
  ],
  "sentences": [
    "1. "
  ]
}

### 情形 5：完整句子

输入：我想喝水，可以帮我倒一杯吗？

思考过程：
1. 解析输入：用户输入的结尾是句号、问号、感叹号等可以表示句子结束的符号。
2. 继续生成：继续生成后续，协助用户持续生成句子内容，符合用户意图和逻辑。
3. 前缀限制：对已经输入的内容，不允许任何改动。

输出：
{
  "words": [
    "1. 有点",
    "2. 感觉"
  ],
  "sentences": [
    "1. 我想喝水，可以帮我倒一杯吗？我有点口渴，",
    "2. 我想喝水，可以帮我倒一杯吗？我有点难受，",
    "3. 我想喝水，可以帮我倒一杯吗？我感觉不舒服",
    "4. 我想喝水，可以帮我倒一杯吗？吃药时间到了"
  ]
}
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
    调用AI模型获取智能补全结果（支持多引擎和备用引擎）
    
    Args:
        text: 用户输入的文本
        input_preference: 输入偏好（可选）
        
    Returns:
        包含words和sentences的字典
        
    Raises:
        Exception: 所有引擎调用失败时抛出异常
    """
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
    
    # 尝试主引擎
    primary_engine = ENGINE_CONFIG["primary_engine"]
    logger.info(f"正在使用主引擎: {primary_engine}，输入文本: {text}")
    
    try:
        result = call_ai_engine(primary_engine, contents, text)
        if result and "words" in result and "sentences" in result:
            logger.info(f"主引擎 {primary_engine} 调用成功")
            return result
        else:
            raise ValueError(f"主引擎 {primary_engine} 返回格式不正确")
    except Exception as e:
        logger.warning(f"主引擎 {primary_engine} 调用失败: {e}")
        
        # 如果启用备用引擎，尝试备用引擎
        if ENGINE_CONFIG["enable_fallback"]:
            fallback_engine = ENGINE_CONFIG["fallback_engine"]
            if fallback_engine != primary_engine:
                logger.info(f"尝试备用引擎: {fallback_engine}")
                try:
                    result = call_ai_engine(fallback_engine, contents, text)
                    if result and "words" in result and "sentences" in result:
                        logger.info(f"备用引擎 {fallback_engine} 调用成功")
                        return result
                    else:
                        raise ValueError(f"备用引擎 {fallback_engine} 返回格式不正确")
                except Exception as fallback_error:
                    logger.error(f"备用引擎 {fallback_engine} 也调用失败: {fallback_error}")
        
        # 所有引擎都失败，抛出异常
        raise Exception(f"所有AI引擎调用失败，主引擎错误: {e}")

def call_ai_engine(engine_type: str, contents: str, text: str) -> Dict[str, Any]:
    """
    新增：根据引擎类型调用对应的AI模型
    
    Args:
        engine_type: 引擎类型 ("gemini" 或 "openai_compatible")
        contents: 完整的请求内容
        text: 用户输入文本（用于日志）
        
    Returns:
        解析后的响应数据
        
    Raises:
        Exception: 引擎调用失败时抛出异常
    """
    if engine_type == "gemini":
        # 调用原有的Gemini引擎
        if API_CONFIG["use_local"]:
            logger.info(f"使用本地Gemini部署")
            return call_local_gemini(contents)
        else:
            logger.info(f"使用Google云端Gemini")
            return call_cloud_gemini(contents)
    
    elif engine_type == "openai_compatible":
        # 调用新增的OpenAI兼容引擎
        logger.info(f"使用OpenAI兼容引擎 (Cloud Run)")
        return call_openai_compatible_model(contents)
    
    else:
        raise ValueError(f"不支持的引擎类型: {engine_type}")

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

def call_openai_compatible_model(contents: str) -> Dict[str, Any]:
    """
    新增：调用OpenAI兼容的Cloud Run部署模型
    
    Args:
        contents: 完整的请求内容
        
    Returns:
        解析后的响应数据
    """
    try:
        # 检查配置是否启用
        if not OPENAI_COMPATIBLE_CONFIG["enabled"]:
            raise ValueError("OpenAI兼容引擎未启用")
        
        # 初始化OpenAI客户端，指向Cloud Run端点
        openai_client = OpenAI(
            api_key=OPENAI_COMPATIBLE_CONFIG["api_key"],
            base_url=OPENAI_COMPATIBLE_CONFIG["base_url"]
        )
        
        # 构建消息格式
        messages = [
            {
                "role": "developer",
                "content": "你是一个专业的中文输入智能补全助手，专为有语言或运动障碍的用户设计。请严格按照系统提示词要求，返回JSON格式的补全结果。"
            },
            {
                "role": "user",
                "content": contents
            }
        ]
        
        logger.info(f"正在调用OpenAI兼容模型: {OPENAI_COMPATIBLE_CONFIG['model']}")
        
        # 调用模型生成补全
        completion = openai_client.chat.completions.create(
            model=OPENAI_COMPATIBLE_CONFIG["model"],
            messages=messages,
            temperature=0.7,
            max_tokens=1000,
            timeout=OPENAI_COMPATIBLE_CONFIG["timeout"]
        )
        
        # 获取响应内容
        response_text = completion.choices[0].message.content
        
        if not response_text:
            logger.warning("OpenAI兼容模型返回空内容")
            return {
                "words": ["1. 继续", "2. 好的", "3. 明白", "4. 谢谢", "5. 需要帮助"],
                "sentences": [
                    "1. 请继续输入您想要表达的内容。",
                    "2. 好的，我会尽力帮助您。",
                    "3. 明白您的意思了。",
                    "4. 谢谢您的耐心。",
                    "5. 需要我提供什么帮助吗？"
                ]
            }
        
        # 清理响应文本
        text = response_text.strip()
        
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
                words = ["1. 继续", "2. 好的", "3. 明白", "4. 谢谢", "5. 需要帮助"]
            if not sentences:
                sentences = [
                    "1. 请继续输入您想要表达的内容。",
                    "2. 好的，我会尽力帮助您。",
                    "3. 明白您的意思了。",
                    "4. 谢谢您的耐心。",
                    "5. 需要我提供什么帮助吗？"
                ]
            
            logger.info("OpenAI兼容模型调用成功")
            return {
                "words": words,
                "sentences": sentences
            }
            
        except (json.JSONDecodeError, ValueError) as e:
            logger.error(f"OpenAI兼容模型JSON解析失败: {e}")
            logger.error(f"原始返回内容: {repr(text)}")
            
            # JSON解析失败时的备用处理
            lines = [line.strip() for line in text.split('\n') if line.strip()]
            short_lines = [line for line in lines if len(line) <= 15][:5]
            long_lines = [line for line in lines if len(line) > 15][:5]
            
            return {
                "words": short_lines if short_lines else ["1. 继续", "2. 好的", "3. 明白", "4. 谢谢", "5. 需要帮助"],
                "sentences": long_lines if long_lines else [
                    "1. 请继续输入您想要表达的内容。",
                    "2. 好的，我会尽力帮助您。",
                    "3. 明白您的意思了。",
                    "4. 谢谢您的耐心。",
                    "5. 需要我提供什么帮助吗？"
                ]
            }
        
    except Exception as e:
        logger.error(f"OpenAI兼容模型调用失败: {e}")
        raise

# ================================
# 主要路由
# ================================

@app.route('/api/complete', methods=['POST'])
@rate_limit_decorator
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
        
        # 检查缓存
        cache_key = get_cache_key(text, input_preference)
        cached_result = get_cached_response(cache_key)
        if cached_result:
            return jsonify(cached_result)
        
        # 根据测试模式选择处理方式
        if IS_TEST_MODE:
            # 测试模式：返回假数据
            logger.info("使用测试模式，返回假数据")
            result = get_test_data(text)
        else:
            # 生产模式：调用Gemini模型
            logger.info("使用生产模式，调用Gemini模型")
            result = call_gemini_model(text, input_preference)
        
        # 缓存结果
        set_cached_response(cache_key, result)
        
        return jsonify(result)
        
    except Exception as e:
        logger.error(f"处理请求时发生错误: {e}")
        
        # 如果是429错误，更新全局冷却时间
        if "429" in str(e) or "quota" in str(e).lower():
            global last_429_time
            last_429_time = time.time()
            return jsonify({
                "error": "API配额超限，请稍后再试",
                "retry_after": REQUEST_RATE_LIMIT["cooldown_after_429"]
            }), 429
        
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
    获取当前配置信息（包含新增的引擎配置）
    """
    return jsonify({
        "test_mode": IS_TEST_MODE,
        "gemini_api_configured": bool(API_CONFIG["api_key"] and API_CONFIG["api_key"] != "your-api-key-here"),
        "openai_compatible_configured": bool(OPENAI_COMPATIBLE_CONFIG["api_key"] and OPENAI_COMPATIBLE_CONFIG["enabled"]),
        "primary_engine": ENGINE_CONFIG["primary_engine"],
        "fallback_engine": ENGINE_CONFIG["fallback_engine"],
        "fallback_enabled": ENGINE_CONFIG["enable_fallback"],
        "engines": {
            "gemini": {
                "use_local": API_CONFIG["use_local"],
                "model": API_CONFIG["model"],
                "configured": bool(API_CONFIG["api_key"] and API_CONFIG["api_key"] != "your-api-key-here")
            },
            "openai_compatible": {
                "enabled": OPENAI_COMPATIBLE_CONFIG["enabled"],
                "model": OPENAI_COMPATIBLE_CONFIG["model"],
                "base_url": OPENAI_COMPATIBLE_CONFIG["base_url"],
                "configured": bool(OPENAI_COMPATIBLE_CONFIG["api_key"])
            }
        }
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
    print("中文输入智能补全引擎中间件 (多引擎版本)")
    print("="*50)
    print(f"测试模式: {'开启' if IS_TEST_MODE else '关闭'}")
    print(f"主引擎: {ENGINE_CONFIG['primary_engine']}")
    print(f"备用引擎: {ENGINE_CONFIG['fallback_engine']} ({'启用' if ENGINE_CONFIG['enable_fallback'] else '禁用'})")
    print("="*50)
    print("引擎配置状态:")
    print(f"  Gemini引擎: {'已配置' if API_CONFIG['api_key'] != 'your-api-key-here' else '未配置'} ({'本地部署' if API_CONFIG['use_local'] else 'Google云端'})")
    print(f"  OpenAI兼容引擎: {'已配置' if OPENAI_COMPATIBLE_CONFIG['api_key'] and OPENAI_COMPATIBLE_CONFIG['enabled'] else '未配置'} (Cloud Run)")
    print("="*50)
    print("可用接口:")
    print("  POST /api/complete - 文本智能补全")
    print("  GET  /api/health  - 健康检查")
    print("  GET  /api/config  - 配置信息")
    print("="*50)
    print("引擎使用说明:")
    print("  1. 系统会优先使用主引擎进行文本补全")
    print("  2. 如果主引擎失败且启用备用引擎，会自动切换到备用引擎")
    print("  3. 可通过修改 ENGINE_CONFIG 来调整引擎优先级")
    print("  4. OpenAI兼容引擎使用Cloud Run部署的Gemma模型")
    print("="*50)
    
    # 启动Flask应用
    app.run(
        host='0.0.0.0',  # 允许外部访问
        port=5000,       # 端口号
        debug=True       # 开发模式
    )