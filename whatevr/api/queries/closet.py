from bson.objectid import ObjectId
from .client import Queries
from .models import (
    ClosetIn,
    ClosetOut,
    BinOut,
    BinIn,
    ClothesIn,
    ClothesOut
)
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


class BinQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "bins"

    def get_all(self, closet_id: str) -> List[BinOut]:
        props = self.collection.find(
            {"closet_id": ObjectId(closet_id)},
        )
        binPropsList = list(props)
        for binProps in binPropsList:
            binProps["id"] = str(binProps["_id"])
            binProps["closet_id"] = str(binProps["closet_id"])
        return [BinOut(**bins) for bins in binPropsList]

    def get_one(self, bin_id: str, closet_id: str) -> BinOut | None:
        props = self.collection.find_one(
            {
                "_id": ObjectId(bin_id),
                "closet_id": ObjectId(closet_id),
            }
        )
        if not props:
            return None
        props["closet_id"] = str(props["closet_id"])
        props["id"] = str(props["_id"])
        return BinOut(**props)

    def create(self, item: BinIn) -> BinOut | None:
        props = item.dict()
        props["closet_id"] = ObjectId(props["closet_id"])
        self.collection.insert_one(props)
        if not props:
            return None
        props["closet_id"] = str(props["closet_id"])
        props["id"] = str(props["_id"])
        return BinOut(**props)


class ClothesQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "clothes"

    def get_all(self, closet_id: str, bin_id: str, user_id) -> List[ClothesOut]:
        props = self.collection.find(
            {
                "closet_id": ObjectId(closet_id),
                "bin_id": ObjectId(bin_id),
                "user_id": ObjectId(user_id)
            }
        )
        clothesPropsList = list(props)
        for clothesProps in clothesPropsList:
            clothesProps["id"] = str(clothesProps["_id"])
            clothesProps["closet_id"] = str(clothesProps["closet_id"])
            clothesProps["bin_id"] = str(clothesProps["bin_id"])
            clothesProps["user_id"] = str(clothesProps["user_id"])
        return [ClothesOut(**clothes) for clothes in clothesPropsList]

    def get_one(self, clothes_id: str, closet_id: str, bin_id: str) -> ClothesOut | None:
        props = self.collection.find_one(
            {
                "_id": ObjectId(clothes_id),
                "closet_id": ObjectId(closet_id),
                "bin_id": ObjectId(bin_id)
            }
        )
        if not props:
            return None
        props["closet_id"] = str(props["closet_id"])
        props["bin_id"] = str(props["bin_id"])
        props["id"] = str(props["_id"])
        return ClothesOut(**props)

    def create(self, item: ClothesIn) -> ClothesOut | None:
        props = item.dict()
        props["closet_id"] = ObjectId(props["closet_id"])
        props["bin_id"] = ObjectId(props["bin_id"])
        props["user_id"] = ObjectId(props["user_id"])
        self.collection.insert_one(props)
        if not props:
            return None
        props["closet_id"] = str(props["closet_id"])
        props["bin_id"] = str(props["bin_id"])
        props["id"] = str(props["_id"])
        props["user_id"] = str(props["user_id"])
        return ClothesOut(**props)

    def delete(self, clothes_id: str, closet_id: str, bin_id: str):
        self.collection.delete_one(
            {
                "_id": ObjectId(clothes_id),
                "closet_id": ObjectId(closet_id),
                "bin_id": ObjectId(bin_id)
            }
        )
