from google.cloud import storage

def upload_blob(bucket_name, source_file_name, destination_blob_name):
    """ファイルをバケットにアップロードします。"""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(source_file_name)

    print(
        f"ファイル {source_file_name} を {destination_blob_name} としてアップロードしました。"
    )

if __name__ == "__main__":
    # バケット名を指定
    bucket_name = "kaeruka-bucket"
    # ローカルのJSONデータセットファイルへのパスを指定
    source_file_name = "./dataset.jsonl"
    # バケット内での保存名を指定
    destination_blob_name = "dataset.jsonl"

    upload_blob(bucket_name, source_file_name, destination_blob_name)
