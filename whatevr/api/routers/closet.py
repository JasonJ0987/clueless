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
from api.queries.models import ClosetIn, ClosetOut, ClosetList
from api.queries.closet import ClosetQueries
from typing import List


router = APIRouter()

@router.get("/api/closet", response_model=ClosetList)
def get_closets(
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user)
):
    return ClosetList(closets=repo.get_all())

@router.post("/api/closet")
async def post_closet(
    closet: ClosetIn,
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user)
):
    closet = repo.create(closet)
    return closet


