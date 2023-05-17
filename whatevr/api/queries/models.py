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
    

"""

class SessionOut(BaseModel):
    jti: str
    account_id: str


class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str


class Account(AccountIn):
    id: PydanticObjectId
    roles: List[str]


class AccountOut(BaseModel):
    id: str
    email: str
    full_name: str
    roles: List[str]
"""
