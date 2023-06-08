from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from api.utils.authenticator import authenticator
from api.routers import accounts, weather, closet, tags

app = FastAPI()


@app.get("/")
async def read_main():
    return {"msg": "Hello Main"}


origins = [
    "http://localhost:3000",
    os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authenticator.router, tags=["authentication"])
app.include_router(accounts.router, tags=["accounts"])
app.include_router(weather.router, tags=["weather"])
app.include_router(closet.router, tags=["closet"])
app.include_router(tags.router, tags=["tags"])


