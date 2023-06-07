from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
import os

from api.utils.authenticator import authenticator
from api.routers import accounts, weather, closet, tags


app = FastAPI()


@app.get("/")
async def read_main():
    return {"msg": "Hello Main"}


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(weather.router)
app.include_router(closet.router)
app.include_router(tags.router)


