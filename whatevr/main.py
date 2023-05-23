from fastapi import FastAPI
from authenticator.authenticator import authenticator
from authenticator.routers import accounts

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)
