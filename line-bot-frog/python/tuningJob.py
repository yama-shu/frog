from openai import OpenAI
client = OpenAI()

client.fine_tuning.jobs.create(
  training_file="file-HTZZcwJNFBfv6zwKxBfPhc6o",
  model="gpt-4o-mini-2024-07-18"
)
