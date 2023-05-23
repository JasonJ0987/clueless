from pydantic import BaseModel
from .client import Queries
from .models import AccountIn, Account, AccountOut
from pymongo.errors import DuplicateKeyError


class DuplicateAccountError(ValueError):
    pass


class AccountQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "accounts"

    def get(self, email: str) -> Account:
        props = self.collection.find_one({"email": email})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return Account(**props)

    def create(self, info: AccountIn, hashed_password: str, roles=["patron"]) -> Account:
        props = info.dict()
        props["password"] = hashed_password
        props["roles"] = roles
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return Account(**props)



#       Possible delete function
# def delete(self, email: str) -> None:
#     """Deletes an account from the database.

#     Args:
#         email: The email address of the account to be deleted.

#     Raises:
#         NotFoundError: If the account is not found in the database.
#     """

#     document = self.collection.find_one({"email": email})
#     if not document:
#         raise NotFoundError("Account not found")

#     self.collection.delete_one(document)
