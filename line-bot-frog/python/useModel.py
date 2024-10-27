from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
  model="ft:gpt-4o-mini:my-org:custom_suffix:id",
  messages=[
    {"role": "system", "content": "蛙化現象の判定を行ってください。"},
    {"role": "user", "content": "財布を忘れてしまいました。"}
  ]
)
print(completion.choices[0].message)
