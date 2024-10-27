from openai import OpenAI
client = OpenAI()

client.files.create(
  file=open("dataset.jsonl", "rb"),
  purpose="fine-tune"
)
