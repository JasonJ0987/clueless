from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)

import requests
from pydantic import BaseModel
from api.utils.token_auth import get_current_user
from api.queries.models import Closet
from api.queries.closet import ClosetQueries

router = APIRouter()

@router.get("/api/closet")
def get_closet(
    current_user: dict = Depends(get_current_user)
):
    pass

@router.post("/api/closet")
async def post_closet(
    closet: Closet,
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user)
):
    closet = repo.create(closet)
    return closet
