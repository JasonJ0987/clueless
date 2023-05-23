from fastapi import FastAPI
<<<<<<< HEAD
from authenticator.authenticator import authenticator
from authenticator.routers import accounts
=======
from api.utils.authenticator import authenticator
from api.routers import accounts, weather, closet, tags

>>>>>>> closet

app = FastAPI()

app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(weather.router)
app.include_router(closet.router)
app.include_router(tags.router)
