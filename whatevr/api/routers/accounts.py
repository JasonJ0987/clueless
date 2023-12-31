from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from api.utils.authenticator import authenticator

from pydantic import BaseModel

from api.queries.accounts import (
    AccountQueries,
    DuplicateAccountError,
)

from api.queries.models import (
    AccountIn,
    AccountOut,
)


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):
    if info.password == info.confirm_password:
        hashed_password = authenticator.hash_password(info.password)
        try:
            account = accounts.create(info, hashed_password)
        except DuplicateAccountError:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Cannot create an account with those credentials",
            )
        form = AccountForm(username=info.email, password=info.password)
        token = await authenticator.login(response, request, form, accounts)
        return AccountToken(account=account, **token.dict())
    else:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password does not match",
        )


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: dict = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }
