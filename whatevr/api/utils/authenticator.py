import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from api.queries.accounts import AccountQueries
from api.queries.models import AccountOut, Account


class ExampleAuthenticator(Authenticator):
    async def get_account_data(
        self,
        username: str,
        accounts: AccountQueries,
    ):
        return accounts.get(username)

    def get_account_getter(
        self,
        accounts: AccountQueries = Depends(),
    ):
        return accounts

    def get_hashed_password(self, account: Account):
        return account.password

    def get_account_data_for_cookie(self, account: Account):
        return account.email, AccountOut(**account.dict())


authenticator = ExampleAuthenticator(os.environ["SIGNING_KEY"])
