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

        Considering this context, please guess and generate a list of [[num]] different sentences that start with "[[text]]". \\
        #else
        Please guess and generate a list of [[num]] different sentences that start with "[[text]]". \\
        #endif
        ''' +
            '''Please note the word I provide may not be complete, so use your best guess. Each answer must start with an index number, and each answer should start with different word to cover wider topics. The response should be in [[language]]. Those sentences should not be the same. Do not highlight answers with asterisk. Since your output will be used as the user's input, do not include any extra notes, labels or explanations in your output.
        The answer should be in [[language]].
        #ifdef persona

        FYI: The user's profile is as follows:
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
