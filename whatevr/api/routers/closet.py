from fastapi import (
    Depends,
    APIRouter,
)
import requests
from api.utils.token_auth import get_current_user
from api.queries.models import (
    ClosetIn,
    ClosetList,
    BinList,
    BinOut,
    BinIn,
    ClosetOut
)
from api.queries.closet import ClosetQueries, BinQueries
from typing import List


router = APIRouter()


@router.get("/api/closet", response_model=ClosetList)
def get_closets(
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user)
):
    return ClosetList(closets=repo.get_all())


@router.post("/api/closet", response_model=ClosetOut)
async def post_closet(
    closet: ClosetIn,
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user)
):
    closet = repo.create(closet)
    return closet


@router.get("/api/closet/{closet_id}/bins", response_model=BinList)
def get_bins(
    closet_id: str,
    repo: BinQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    return BinList(bins=repo.get_all())


@router.get("/api/closet/{closet_id}/bins/{bin_id}", response_model=BinOut | None)
def get_bin(
    closet_id: str,
    bin_id: str,
    repo: BinQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    props = repo.get_one(bin_id=bin_id, closet_id=closet_id)
    if not props:
        return None
    return props


@router.post("/api/closet/{closet_id}/bins/", response_model=BinOut)
async def post_bin(
    # closet_id: str,
    bin: BinIn,
    repo: BinQueries = Depends(),
    current_user: dict = Depends(get_current_user)
):
    # bin = BinIn(closet_id=closet_id)
    new_bin = repo.create(bin)
    return new_bin





# @router.post("/books/{book_id}/loans", response_model=LoanOut)
# async def create_loan(
#     book_id: str,
#     repo: LoanQueries = Depends(),
#     account: dict = Depends(get_current_user),
# ):
#     if "patron" not in account.roles:
#         raise not_authorized
#     await socket_manager.broadcast_refetch()
#     loan_request = LoanIn(book_id=book_id, account_id=account.id)
#     loan_request = repo.create(loan_request)
#     return loan_request
