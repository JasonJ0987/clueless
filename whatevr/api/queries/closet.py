from pydantic import BaseModel
from .client import Queries
from .models import ClosetIn, ClosetOut
from typing import List


class ClosetQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "closet"

    def get_all(self) -> List[ClosetOut]:
        props = self.collection.find()
        closetPropsList = list(props)
        for closetProps in closetPropsList:
            closetProps["id"] = str(closetProps["_id"])
        return [ClosetOut(**closet) for closet in closetPropsList]


    def create(self, item: ClosetIn) -> ClosetOut:
        props = item.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return ClosetOut(**props)

