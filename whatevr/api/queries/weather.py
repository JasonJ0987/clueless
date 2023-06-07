import pymongo
from api.queries.models import WeatherIn, WeatherOut

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client.database
collection = db.accounts


def get_account_zip_code(username: str) -> str:
    document = collection.find_one({"username": username})
    if document is None:
        raise HTTPException(status_code=404, detail="Account not found")
    return document["zip_code"]


def get_day_list(username: str) -> WeatherOut:
    document = collection.find_one({"username": username})
    if document is None:
        raise HTTPException(status_code=404, detail="Account not found")
    return document["zip_code"]
