from google.cloud import storage

def create_bucket_class_location(bucket_name):
    """
    USリージョンに新しいバケットを作成し、ストレージクラスをCOLDLINEに設定します。
    """
    # bucket_name = "kaeruka-bucket"

    storage_client = storage.Client()

    bucket = storage_client.bucket(bucket_name)
    bucket.storage_class = "COLDLINE"
    new_bucket = storage_client.create_bucket(bucket, location="us")

    print(
        "バケット {} をリージョン {} に作成し、ストレージクラスを {} に設定しました。".format(
            new_bucket.name, new_bucket.location, new_bucket.storage_class
        )
    )
    return new_bucket

if __name__ == "__main__":
    create_bucket_class_location("kaeruka-bucket")
