from pydantic import BaseModel
from .client import Queries
from .models import Closet

class ClosetQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "closet"

    def get(self) -> Closet:
        props = self.collection.find()

        return Closet(**props)

    def create(self, item: Closet):
        props = item.dict()
        self.collection.insert_one(props)
        # props["id"] = str(props["_id"])
        return Closet(**props)
