from bson.objectid import ObjectId
from .client import Queries
from .models import (
    ClosetIn,
    ClosetOut,
    BinOut,
    BinIn,
    ClothesIn,
    ClothesOut,
    OutfitIn,
    OutfitOut,
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


class OutfitQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "outfits"

    def create(self, item: OutfitIn) -> OutfitOut | None:
        props = item.dict()
        props["user_id"] = ObjectId(props["user_id"])
        self.collection.insert_one(props)
        if not props:
            return None
        props["id"] = str(props["_id"])
        props["user_id"] = str(props["user_id"])
        return OutfitOut(**props)

    def get_all(self, user_id) -> List[OutfitOut]:
        props = self.collection.find(
            {
                "user_id": ObjectId(user_id),
            }
        )
        outfitPropsList = list(props)
        for outfitProps in outfitPropsList:
            outfitProps["id"] = str(outfitProps["_id"])
            outfitProps["user_id"] = str(outfitProps["user_id"])
        return [OutfitOut(**outfits) for outfits in outfitPropsList]

    def get_one(self, outfit_id: str, user_id: str) -> OutfitOut | None:
        props = self.collection.find_one(
            {
                "_id": ObjectId(outfit_id),
                "user_id": ObjectId(user_id),
            }
        )
        if not props:
            return None
        props["id"] = str(props["_id"])
        props["user_id"] = str(props["user_id"])
        return OutfitOut(**props)

    def delete(self, outfit_id: str):
        self.collection.delete_one(
            {
                "_id": ObjectId(outfit_id),
            }
        )
