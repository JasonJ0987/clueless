from bson.objectid import ObjectId
from pydantic import BaseModel, EmailStr
from typing import List
# from jwtdown_fastapi.authentication import Token


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except
                raise ValueError(f"Not a valid object id: {value}")
        return value


class SessionOut(BaseModel):
    jti: str
    account_id: str


class AccountIn(BaseModel):
    email: EmailStr
    username: str
    password: str
    confirm_password: str
    first: str
    last: str
    zipcode: int


class Account(AccountIn):
    id: PydanticObjectId


class AccountOut(BaseModel):
    id: str
    email: EmailStr
    username: str
    first: str
    last: str
    zipcode: int


class TagIn(BaseModel):
    description: str


class TagOut(BaseModel):
    id: str
    description: str


class TagList(BaseModel):
    tags: List[TagOut]


class ClosetIn(BaseModel):
    name: str


class ClosetOut(BaseModel):
    id: int | str
    name: str


class ClosetList(BaseModel):
    closets: List[ClosetOut]


class BinIn(BaseModel):
    name: str
    picture: str
    closet_id: str


class BinOut(BaseModel):
    id: str
    name: str
    picture: str
    closet_id: str


class BinList(BaseModel):
    bins: List[BinOut]


class ClothesIn(BaseModel):
    name: str
    picture: str
    primary_color: str
    type: str
    tag_ids: List[str]
    bin_id: str
    closet_id: str
    user_id: str


class ClothesOut(BaseModel):
    id: str
    name: str
    picture: str
    primary_color: str
    type: str
    tag_ids: List[str]
    bin_id: str
    closet_id: str
    user_id: str


class ClothesList(BaseModel):
    clothes: List[ClothesOut]


class OutfitIn(BaseModel):
    hat: ClothesOut
    top: ClothesOut
    bottom: ClothesOut
    shoes: ClothesOut
    user_id: str


class OutfitOut(BaseModel):
    id: str
    hat: ClothesOut
    top: ClothesOut
    bottom: ClothesOut
    shoes: ClothesOut
    user_id: str


class OutfitList(BaseModel):
    outfits: List[OutfitOut]


# class AccountOut(Account):
#     id: int
#     modified: str
#     hashed_password: str


# class AccountIn(Account):
#     password: str


# class AccountToken(Token):
#     account: AccountOut
