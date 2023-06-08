import pymongo
from fastapi.exceptions import HTTPException


client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client.database
collection = db.accounts


def get_account_zip_code(username: str) -> str:
    document = collection.find_one({"username": username})
    if document is None:
        raise HTTPException(status_code=404, detail="Account not found")
    return document["zip_code"]
