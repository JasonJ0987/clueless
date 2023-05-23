from fastapi import (
    Depends,
    APIRouter,
)
<<<<<<< HEAD
import requests
from api.utils.token_auth import get_current_user
from api.queries.models import (
=======
from api.utils.token_auth import get_current_user
from api.queries.models import (
    ClosetOut,
>>>>>>> closet
    ClosetIn,
    ClosetList,
    BinList,
    BinOut,
    BinIn,
<<<<<<< HEAD
    ClosetOut
)
from api.queries.closet import ClosetQueries, BinQueries
from typing import List

=======
    ClothesOut,
    ClothesList,
    ClothesIn,

)
from api.queries.closet import (
    ClosetQueries,
    BinQueries,
    ClothesQueries,
)
>>>>>>> closet

router = APIRouter()


<<<<<<< HEAD
@router.get("/api/closet", response_model=ClosetList)
def get_closets(
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user)
):
    return ClosetList(closets=repo.get_all())


=======
>>>>>>> closet
@router.post("/api/closet", response_model=ClosetOut)
async def post_closet(
    closet: ClosetIn,
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user)
):
    closet = repo.create(closet)
    return closet


<<<<<<< HEAD
@router.get("/api/closet/{closet_id}/bins", response_model=BinList)
=======
@router.get("/api/closet", response_model=ClosetList)
def get_closets(
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user)
):
    return ClosetList(closets=repo.get_all())


@router.post("/api/closet/{closet_id}/bins", response_model=BinOut)
async def post_bin(
    bin: BinIn,
    repo: BinQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    new_bin = repo.create(bin)
    return new_bin


@router.get("/api/closet/{closet_id}/bins", response_model=BinList | None)
>>>>>>> closet
def get_bins(
    closet_id: str,
    repo: BinQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
<<<<<<< HEAD
    return BinList(bins=repo.get_all())
=======
    if BinList(bins=repo.get_all(closet_id=closet_id)) == []:
        return None
    return BinList(bins=repo.get_all(closet_id=closet_id))
>>>>>>> closet


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


<<<<<<< HEAD
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
=======
@router.post("/api/closet{closet_id}/bins/{bin_id}/clothes", response_model=ClothesOut)
async def post_clothes(
    clothes: ClothesIn,
    repo: ClothesQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    new_clothes = repo.create(clothes)
    return new_clothes


@router.get("/api/closet/{closet_id}/bins/{bin_id}/clothes", response_model=ClothesList | None)
def get_clothes(
    closet_id: str,
    bin_id: str,
    repo: ClothesQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    if ClothesList(clothes=repo.get_all(closet_id=closet_id, bin_id=bin_id)) == []:
        return None
    return ClothesList(clothes=repo.get_all(closet_id=closet_id, bin_id=bin_id))


@router.get("/api/closet/{closet_id}/bins/{bin_id}/clothes/{clothes_id}", response_model=ClothesOut | None)
def get_clothing_item(
    closet_id: str,
    bin_id: str,
    clothes_id: str,
    repo: ClothesQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    props = repo.get_one(clothes_id=clothes_id, bin_id=bin_id, closet_id=closet_id)
    if not props:
        return None
    return props


@router.delete("/api/closet/{closet_id}/bins/{bin_id}/clothes/{clothes_id}", response_model=bool)
async def delete_clothing(
    closet_id: str,
    bin_id: str,
    clothes_id: str,
    repo: ClothesQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    repo.delete(closet_id=closet_id, bin_id=bin_id, clothes_id=clothes_id)
    return True


>>>>>>> closet
