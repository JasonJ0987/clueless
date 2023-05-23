from bson.objectid import ObjectId
from pydantic import BaseModel, EmailStr
from typing import List


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except:
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
    # roles: List[str]


class AccountOut(BaseModel):
    id: str
    email: EmailStr
    username: str
    first: str
    last: str
    zipcode: int
    # roles: List[str]


class TagIn(BaseModel):
    description: str


class TagList(BaseModel):
    tags: List[TagIn]


class TagOut(BaseModel):
    id: str
    description: str


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
    tags: List[str]
    bin_id: str
    closet_id: str

class ClothesOut(BaseModel):
    id: str
    name: str
    picture: str
    primary_color: str
    type: str
    tags: List[str]
    bin_id: str
    closet_id: str


class ClothesList(BaseModel):
    clothes: List[ClothesOut]
