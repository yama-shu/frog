import time
import vertexai
from vertexai.preview.tuning import sft
from vertexai.preview.language_models import ChatModel

# TODO: プロジェクトIDとロケーションを設定します
PROJECT_ID = "gen-lang-client-0856134807"
LOCATION = "us-central1"

# Vertex AI SDK を初期化します
vertexai.init(project=PROJECT_ID, location=LOCATION)

# チューニングジョブを作成します
sft_tuning_job = sft.train(
    source_model="gemini-1.0-pro-002",  # ベースとなるモデルを指定
    train_dataset="gs://kaeruka-bucket/dataset.jsonl",  # 学習用データセットのパス
    # 以下のパラメータは任意です
    validation_dataset=None,  # 検証用データセットがあればパスを指定
    epochs=4,
    adapter_size=4,
    learning_rate_multiplier=1.0,
    tuned_model_display_name="kaeruka-model",  # チューニングしたモデルの表示名
)

# ジョブの完了をポーリングします
while not sft_tuning_job.has_ended:
    time.sleep(60)
    sft_tuning_job.refresh()

# チューニング結果を表示します
print(f"チューニング済みモデル名: {sft_tuning_job.tuned_model_name}")
print(f"モデルエンドポイント名: {sft_tuning_job.tuned_model_endpoint_name}")
print(f"実験情報: {sft_tuning_job.experiment}")


# チューニング済みモデルを取得
chat_model = ChatModel.from_pretrained(sft_tuning_job.tuned_model_name)

# チャットインスタンスを開始
chat = chat_model.start_chat()

# メッセージを送信して予測を取得
response = chat.send_message("お会計現金で払うわ〜")

print(f"モデルからの応答: {response}")
