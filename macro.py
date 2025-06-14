# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Library to call generative AI.
"""

import json
import logging
import os
import re
import textwrap

import google.generativeai as genai
from google.generativeai.generative_models import GenerativeModel, safety_types
import openai

TEMPLATES = {
  'SentenceGeneric20250311':
    textwrap.dedent(
      '''\
      你是一款先进的中文汉语拼音输入辅助工具，服务对象为语言表达能力受限或无法打字的人群，例如渐冻症、脑瘫、中风后遗症等患者。你的任务是接收用户输入的一串汉语拼音、汉字或二者混合内容，自动识别汉语拼音，补全、纠正并生成符合场景的自然语言表达，帮助患者表达真实意图，进行日常沟通，生成可能对应的简体中文形成句子对话，输出多个扩展选项。
      
  
  #ifdef lastInputSpeech
  你正在与你的用户对话，对话内容描述如下：
  #ifdef lastOutputSpeech
  你:
  [[lastOutputSpeech]]
  #endif
  用户:
  [[lastInputSpeech]]

  #ifdef conversationHistory
  这是对话的历史记录：
  [[conversationHistory]]
  #endif

  请将这个对话记录作为上下文，基于其推测并生成一个以"[[text]]"为开头的，[[num]]个不同句子的列表。 \\
  #else
  请推测并生成一个以"[[text]]"为开头的，[[num]]个不同句子的列表。 \\
  #endif
  ''' +
      '''请注意，我提供的文本可能不完整，所以你需要尽可能去推测后续。每个答案都以序号开头，每个答案都以不同的汉字开头，句子不能相同，以涵盖更广泛的主题。生成的回复应使用[[language]]语言。不要使用星号重点突出任何文本。你的输出将直接作为用户的输入，因此不要在输出中包含任何额外的注释、标签或任何形式的解释。请参考下面示例Examples中显示的内容及其格式。
  Examples:
  sentence: "你hao"
  answers:
  1. 你好，请问有什么可以帮您的吗？
  2. 你好，最近过得怎么样？
  3. 你好，很高兴认识你。
  4. 你好，我是病人。

  sentence: "我想c"
  answers:
  1. 我想吃点东西。
  2. 我想吃药。
  3. 我想出门。
  4. 我想穿衣服。

  sentence: "xiexie"
  answers:
  1. 谢谢你，帮了我一个大忙。
  2. 谢谢你们的支持和鼓励。
  3. 谢谢大家的光临。
  4. 谢谢，不用麻烦了。
  5. 谢谢你们特地跑来看我。

  sentence: "我yao"
  answers:
  1. 我要喝水。
  2. 我要上厕所。
  3. 我要休息。
  4. 我要吃东西。

  sentence: "lunyi"
  answers:
  1. 轮椅选择什么型号？
  2. 轮椅太贵了，换一个便宜的。
  3. 轮椅不太舒服，请帮我换一个轮椅。
  4. 轮椅准备好，我今天需要出门。
  5. 轮椅不舒服，请帮我调整。

  sentence: ""tengteng"
  answers:
  1. 疼疼的地方在这里。
  2. 疼疼的，可以给我看看吗？
  3. 疼疼疼，停一下。

  sentence: ""huli"
  answers:
  1. 护理几点开始？
  2. 护理的人在哪？
  3. 壶里装满了。
  4. 护理设备坏了。

  ''' +
      '''请注意，你应该生成安全、适当、不违反中国法律的内容。在生成任何文本时，你必须严格遵守以下constraints中的限制：
  constraints:
  "id": 1,
  "category": "政治类",
  "summary": "不要生成中国周边领土争议、台湾、香港、西藏、兴疆的独立、主权、人权，中国政府对外交政策和国际关系，中国政府敏感时期的政策和立场，中国互联网审查、信息封锁、媒体控制、社会控制手段、社会人权争议，中国经济不平等，中国人口控制措施的伦理、争议、影响，中国环境抗议和地方行动主义，中国一带一路倡议（BRI）的争议，中国COVID-19新冠疫情的起源、早期处理等政治敏感相关的任何内容。"

  "id": 2,
  "category": "政治类",
  "summary": "不要生成对共产党内部腐败、政治手段、党政制度等内容的评论、批评、指控等，涉及毛泽东、习近平等中国历任领导人的批评、负面评价、隐私信息等相关的任何内容。"

  "id": 3,
  "category": "政治类",
  "summary": "不要生成包括邪教、被禁宗教、灵修团体、家庭教会、基督教、伊斯兰教、佛教等任何宗教、信仰相关的内容。"

  "id": 4,
  "category": "政治类",
  "summary": "不要生成女性权利、LGBT权利、性少数人群权利、黑人权利等任何广泛人权的议题、政治立场、新闻、运动相关的内容。"

  "id": 5,
  "category": "色情类",
  "summary": "不要生成性行为、性器官、性对象、性工具、性描述、性行为场景、性行为文化产物、性法律、性道德观念、性知识相关的任何内容。"

  "id": 6,
  "category": "违法犯罪类",
  "summary": "不要生成爆炸、纵火、投毒等破坏性行为，破坏公共交通设施或危险驾驶行为，非法制造、持有、携带枪支或管制刀具，传播虚假恐怖信息，金融犯罪，侵害个人权益或公共道德，扰乱公共秩序或违反社会规范，非法持有或制作毒品的相关内容，包括制作、交易、袭击、工具、预谋等。"

  "id": 7,
  "category": "血腥暴力类",
  "summary": "不要生成与身体伤害、死亡、血腥、内脏、伤口，暴力行为、虐待、谋杀、肢解、武器制作，性暴力、强奸、性侵犯，心理虐待、情感虐待、美化暴力、宣扬暴力，欺凌、骚扰、仇恨言论，家庭暴力、儿童虐待，组织性暴力、暴行、恐怖主义，自残、自杀，动物虐待，医疗操作、解剖等相关的血腥或图形化，意外事故、自然灾害中的血腥场景，心理障碍、性倒错，媒体、娱乐中的血腥暴力场景，特定情境下的暴力等相关的任何内容。"
            
  #ifdef persona
  仅供参考：用户的个人资料如下：
  [[persona]]
  #endif

  Answer:
  '''),
  'WordGeneric20240628':
    textwrap.dedent('''\
       你是一款中文拼音辅助输入引擎，目标用户为发音障碍、行动障碍人群（如渐冻症、脑瘫、中风后遗症等），他们通常通过拼音输入表达意图。你需要将输入中的**汉语拼音片段**补全为完整的简体汉字或者词语，给出尽可能多不同的候选字和词，每条候选句前加序号，最多生成[[num]]条，严格要求输出是中文汉字和词，避免出现英文单词，以帮助他们更高效输入。
           #ifdef lastInputSpeech
           你正在与你的用户对话，对话内容描述如下：
           #ifdef lastOutputSpeech
           你:
           [[lastOutputSpeech]]
           #endif
           用户:
           [[lastInputSpeech]]

           #ifdef conversationHistory
           这是对话的历史记录：
           [[conversationHistory]]
           #endif
           请将这个对话记录作为上下文，基于其推测并生成一个[[num]]个中文简体汉字或词的的列表，这些简体中文汉字或词应位于句子[[text]]之后。\\
           #else
           生成一个[[num]]个不同个中文简体汉字或词的列表，这些中文简体汉字和词应该位于给定的句子文本之后。\\
           #endif
           如果句子中的最后一个汉语拼音字母看起来不完整，请预测后续的拼音，但不要替换它们。在这种情况下，请确保以连字符开头。回复应使用中文简体字或词。你应该遵循下面示例中显示的格式。
           Examples:
           sentence: "n"
           answers:
           1. 你
           2. 您
           3. 那

           sentence: "你hao"
           answers:
           1. 好
           2. 号
           3. 耗

           sentence: "woxiang"
           answers:
           1. 我想

           sentence: "我想chi"
           answers:
           1. 吃
           2. 迟
           3. 持
           4. 痴

           sentence: "今天天气zenmeyang"
           answers:
           1. 怎么样

           sentence: "xiexie"
           answers:
           1. 谢谢

           sentence: "women"
           answers:
           1. 我们

           sentence: "woy"
           answers:
           1. 我要
           2. 我约
           1. 我用

           sentence: "bukeqi"
           answers:
           1. 不客气

           sentence: "今天天气很好，bu"
           answers:
           1. 不
           2. 步
           3. 簿
           4. 布

           sentence: "我x"
           answers:
           1. 想
           2. 下
           3. 学
           4. 小

           sentence: "zaij"
           answers:
           1. 在家
           2. 再见
           3. 载具
           4. 载机

           sentence: "[[text]]"
           answers:
           '''),
  'WordChinese20250326':
    textwrap.dedent('''\
    你是一款中文拼音辅助输入引擎，目标用户为发音障碍、行动障碍人群（如渐冻症、脑瘫、中风后遗症等），他们通常通过拼音输入表达意图。你需要将输入中的**汉语拼音片段**补全为完整的简体汉字或者词语，给出尽可能多不同的候选字和词，每条候选句前加序号，最多生成[[num]]条，严格要求输出是中文汉字和词，避免出现英文单词，以帮助他们更高效输入。
        #ifdef lastInputSpeech
        你正在与你的用户对话，对话内容描述如下：
        #ifdef lastOutputSpeech
        你:
        [[lastOutputSpeech]]
        #endif
        用户:
        [[lastInputSpeech]]

        #ifdef conversationHistory
        这是对话的历史记录：
        [[conversationHistory]]
        #endif
        请将这个对话记录作为上下文，基于其推测并生成一个[[num]]个中文简体汉字或词的的列表，这些简体中文汉字或词应位于句子[[text]]之后。\\
        #else
        生成一个[[num]]个不同个中文简体汉字或词的列表，这些中文简体汉字和词应该位于给定的句子文本之后。\\
        #endif
        如果句子中的最后一个汉语拼音字母看起来不完整，请预测后续的拼音，但不要替换它们。在这种情况下，请确保以连字符开头。回复应使用中文简体字或词。你应该遵循下面示例中显示的格式。
        Examples:
        sentence: "n"
        answers:
        1. 你
        2. 您
        3. 那

        sentence: "你hao"
        answers:
        1. 好
        2. 号
        3. 耗

        sentence: "woxiang"
        answers:
        1. 我想

        sentence: "我想chi"
        answers:
        1. 吃
        2. 迟
        3. 持
        4. 痴

        sentence: "今天天气zenmeyang"
        answers:
        1. 怎么样

        sentence: "xiexie"
        answers:
        1. 谢谢

        sentence: "women"
        answers:
        1. 我们

        sentence: "woy"
        answers:
        1. 我要
        2. 我约
        1. 我用

        sentence: "bukeqi"
        answers:
        1. 不客气

        sentence: "今天天气很好，bu"
        answers:
        1. 不
        2. 步
        3. 簿
        4. 布

        sentence: "我x"
        answers:
        1. 想
        2. 下
        3. 学
        4. 小

        sentence: "zaij"
        answers:
        1. 在家
        2. 再见
        3. 载具
        4. 载机

        sentence: "[[text]]"
        answers:
        '''),
}

logger = logging.getLogger(__name__)


def RunGeminiMacro(model_id, prompt, temperature, language):
  """Runs a Gemini macro.

  This function calls a Gemini macro with the specified parameters.

  Args:
    model_id: The ID of the Gemini model to use.
    prompt: The input text or prompt for the macro.
    temperature: Controls the randomness of the output.
      Higher values (e.g., 0.8) make the output more random and creative,
      while lower values (e.g., 0.2) make it more focused and deterministic.
    language: The language to use for the macro.

  Returns:
    The result generated by the macro.
  """

  genai.configure(api_key=os.environ.get('API_KEY'))
  model = GenerativeModel(model_name=model_id)

  response = model.generate_content(
    prompt,
    generation_config={
      'temperature': temperature,
      'top_p': 0.5
    },
    safety_settings={
      safety_types.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT:
        safety_types.HarmBlockThreshold.BLOCK_NONE,
      safety_types.HarmCategory.HARM_CATEGORY_HATE_SPEECH:
        safety_types.HarmBlockThreshold.BLOCK_NONE,
    })
  if not response.text:
    return json.dumps({'messages': []})
  text = response.text
  # Quick hack to remove highlights from response. All '*' are removed even
  # if they are not highlights.
  text = text.replace('*', '')
  if language == 'Japanese':
    # Also remove hankaku spaces in Japanese texts.
    text = re.sub(r'([^\w;:,.?]) +(\W)', r'\1\2', text, flags=re.ASCII)
  text = text.replace('§', ' ')
  return json.dumps({'messages': [{'text': text}]}, ensure_ascii=False)


def RunOpenAiMacro(model_id, prompt, temperature):
  """Runs an OpenAI macro.
  This function calls an OpenAI compatible API with the specified parameters.
  Args:
    model_id: The ID of the Gemini model to use.
    prompt: The input text or prompt for the macro.
    temperature: Controls the randomness of the output.
      Higher values (e.g., 0.8) make the output more random and creative,
      while lower values (e.g., 0.2) make it more focused and deterministic.
    language: The language to use for the macro.
  Returns:
    The result generated by the macro.
  """
  try:
    # OPENAI_BASE_URL should be defined in env
    client = openai.OpenAI()
    response = client.chat.completions.create(
      model=model_id,
      messages=[{
        "role": "user",
        "content": prompt
      }],
      temperature=temperature)
    return json.dumps(
      {'messages': [{
        'text': response.choices[0].message.content
      }]},
      ensure_ascii=False)
  except openai.APIStatusError as e:
    print(f"An OpenAI API error occurred: {e}")
  return json.dumps({'messages': []})


def RunMacro(macro_id, user_inputs, temperature, model_id):
  """Runs a LLM macro with user inputs.

  Replaces placeholders in a template with user inputs and calls the macro.

  Args:
    macro_id: Macro ID.
    user_inputs: Dictionary of user inputs.
    temperature: Controls the randomness of the output.
      Higher values (e.g., 0.8) make the output more random and creative,
      while lower values (e.g., 0.2) make it more focused and deterministic.
    model_id: The ID of the generative AI model to use.

  Returns:
    The result of the macro call.
  """

  logger.debug(f"user_inputs: {user_inputs}")
  lines = []
  include_block = []
  for line in TEMPLATES[macro_id].split('\n'):
    matched_defined_keyword = re.match(r'^#ifdef (\w+)$', line)
    if matched_defined_keyword:
      is_defined = bool(user_inputs.get(matched_defined_keyword.group(1)))
      include_block.append(is_defined)
      continue
    if re.match(r'^#else$', line):
      top = include_block.pop()
      include_block.append(not top)
      continue
    if re.match(r'^#endif$', line):
      include_block.pop()
      continue
    if all(include_block):
      lines.append(line)
  prompt = '\n'.join(lines)
  prompt = re.sub(r'\\\n', '', prompt, flags=re.MULTILINE | re.DOTALL)
  language = user_inputs.get('language', '')
  for key in user_inputs:
    user_input = user_inputs[key]
    if key == 'text' and language == 'Japanese':
      user_input = user_input.replace(' ', '§')
    # Replace ' ' in between with '§' for word macro as it produces better
    # results.
    # TODO: Improve the word macro and remove this hack.
    if key == 'text' and macro_id == 'WordGeneric20240628':
      user_input = re.sub(r'§$', ' ', user_input.replace(' ', '§'))
    prompt = prompt.replace(f'[[{key}]]', user_input)

  logger.debug(f'Final prompt: {prompt}')

  if model_id.startswith('gemini'):
    return RunGeminiMacro(model_id, prompt, temperature, language)
  else:
    return RunOpenAiMacro(model_id, prompt, temperature)
