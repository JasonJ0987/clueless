from fastapi import FastAPI
from api.utils.authenticator import authenticator
from api.routers import accounts, weather


app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(weather.router)
