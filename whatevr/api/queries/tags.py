from bson.objectid import ObjectId
from .client import Queries
from .models import (
    TagIn,
    TagOut,
)
from typing import List


class TagQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "tags"

    def get_all(self) -> List[TagOut]:
        props = self.collection.find()
        tagPropList = list(props)
        for tagProps in tagPropList:
            tagProps["id"] = str(tagProps["_id"])
        return [TagOut(**tags) for tags in tagPropList]

    def create(self, tag: TagIn) -> TagOut | None:
        props = tag.dict()
        self.collection.insert_one(props)
        if not props:
            return None
        props["id"] = str(props["_id"])
        return TagOut(**props)

    def delete(self, tag_id: str) -> bool:
        self.collection.delete_one({"_id": ObjectId(tag_id)})
