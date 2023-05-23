from bson.objectid import ObjectId
from pydantic import BaseModel
from .client import Queries
from .models import (
    ClosetIn,
    ClosetOut,
    BinOut,
    BinIn
)
from typing import List


class ClosetQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "closet"

    def get_all(self) -> List[ClosetOut]:
        props = self.collection.find()
        closetPropsList = list(props)
        # print("props", closetPropsList)
        for closetProps in closetPropsList:
            closetProps["id"] = str(closetProps["_id"])
        return [ClosetOut(**closet) for closet in closetPropsList]

    def create(self, item: ClosetIn) -> ClosetOut:
        props = item.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return ClosetOut(**props)


class BinQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "bins"

    def get_all(self) -> List[BinOut]:
        props = self.collection.find()
        binPropsList = list(props)
        # print("props", binPropsList)
        for binProps in binPropsList:
            binProps["id"] = str(binProps["_id"])
        return [BinOut(**bins) for bins in binPropsList]

    def get_one(self, bin_id: str, closet_id: str) -> BinOut | None:
        bin_id = ObjectId(bin_id)
        props = self.collection.find_one(
            {
                "_id": bin_id,
                "closet_id": closet_id,
            }
            # {
            #     "_id": 0,
            # }

        )
        if not props:
            return None
        # props["closet_id"] = str(props["closet_id"])
        props["id"] = str(props["_id"])
        return Binoprops

    def create(self, item: BinIn):
        props = item.dict()
        props["closet_id"] = ObjectId(props["closet_id"])
        self.collection.insert_one(props)
        props["closet_id"] = str(props["closet_id"])
        props["id"] = str(props["_id"])
        # return BinOut(**props)
        return props



    # def delete(self, book_id: str, account_id: str):
    #     self.collection.delete_one(
    #         {
    #             "account_id": ObjectId(account_id),
    #             "book_id": ObjectId(book_id),
    #         }
    #     )
