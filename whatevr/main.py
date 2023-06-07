from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
import os

from api.utils.authenticator import authenticator
from api.routers import accounts, weather, closet, tags


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authenticator.router, tags=["authentication"])
app.include_router(accounts.router, tags=["accounts"])
app.include_router(weather.router, tags=["weather"])
app.include_router(closet.router, tags=["closet"])
app.include_router(tags.router, tags=["tags"])



# from fastapi import FastAPI, Depends, HTTPException, Request, status
# from fastapi.middleware.cors import CORSMiddleware
# import os
# from models import AccountOut, AccountIn, Account, AccountToken
# from queries import AccountRepo
# from authenticator import MyAuthenticator

# authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
# app = FastAPI()
# app.include_router(authenticator.router)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# @app.get("/api/user/{pk}")
# async def get_user(
#     pk: int,
#     accounts: AccountRepo = Depends(),
#     ra=Depends(authenticator.get_current_account_data),
# ) -> AccountOut:
#     account = accounts.get_user_by_id(pk)
#     if not account:
#         raise HTTPException(
#             status.HTTP_400_BAD_REQUEST, detail="Account does not exist"
#         )
#     else:
#         return account


# @app.post("/api/user")
# def create_user(
#     info: AccountIn,
#     accounts: AccountRepo = Depends(),
# ) -> AccountOut:
#     hashed_password = authenticator.hash_password(info.password)
#     ar = Account(
#         username=info.username,
#         first=info.first,
#         last=info.last,
#         age=info.age,
#         email=info.email,
#     )
#     try:
#         pk = accounts.create_user(ar, hashed_password)
#     except Exception as e:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail=str(e),
#         )
#     return accounts.get_user_by_id(pk)


# @app.get("/token")
# async def get_by_cookie(
#     request: Request,
#     account_data: dict
#     | None = Depends(authenticator.try_get_current_account_data),
#     accounts: AccountRepo = Depends(),
#     ra=Depends(authenticator.get_current_account_data),
# ) -> AccountToken:
#     account = await get_user(account_data["id"], accounts=accounts, ra=ra)
#     return {
#         "access_token": request.cookies[authenticator.cookie_name],
#         "type": "Bearer",
#         "account": account,
#     }
