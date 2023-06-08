from fastapi import (
    Depends,
    APIRouter,
)
from api.utils.token_auth import get_current_user
from api.queries.models import (
    ClosetOut,
    ClosetIn,
    ClosetList,
    BinList,
    BinOut,
    BinIn,
    ClothesOut,
    ClothesList,
    ClothesIn,
    OutfitIn,
    OutfitOut,
    OutfitList,
)
from api.queries.closet import (
    ClosetQueries,
    BinQueries,
    ClothesQueries,
    OutfitQueries,
)

router = APIRouter()


@router.post("/api/closet", response_model=ClosetOut)
async def post_closet(
    closet: ClosetIn,
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    closet = repo.create(closet)
    return closet


@router.get("/api/closet", response_model=ClosetList)
def get_closets(
    repo: ClosetQueries = Depends(),
    current_user: dict = Depends(get_current_user),
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
def get_bins(
    closet_id: str,
    repo: BinQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    if BinList(bins=repo.get_all(closet_id=closet_id)) == []:
        return None
    return BinList(bins=repo.get_all(closet_id=closet_id))


@router.get(
    "/api/closet/{closet_id}/bins/{bin_id}", response_model=BinOut | None
)
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


@router.post(
    "/api/closet/{closet_id}/bins/{bin_id}/clothes", response_model=ClothesOut
)
async def post_clothes(
    clothes: ClothesIn,
    repo: ClothesQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    new_clothes = repo.create(clothes)
    return new_clothes


@router.get(
    "/api/closet/{closet_id}/bins/{bin_id}/clothes",
    response_model=ClothesList | None,
)
def get_clothes(
    closet_id: str,
    bin_id: str,
    repo: ClothesQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    if (
        ClothesList(
            clothes=repo.get_all(
                closet_id=closet_id, bin_id=bin_id, user_id=current_user.id
            )
        )
        == []
    ):
        return None
    return ClothesList(
        clothes=repo.get_all(
            closet_id=closet_id, bin_id=bin_id, user_id=current_user.id
        )
    )


@router.get(
    "/api/closet/{closet_id}/bins/{bin_id}/clothes/{clothes_id}",
    response_model=ClothesOut | None,
)
def get_clothing_item(
    closet_id: str,
    bin_id: str,
    clothes_id: str,
    repo: ClothesQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    props = repo.get_one(
        clothes_id=clothes_id,
        bin_id=bin_id,
        closet_id=closet_id,
        user_id=current_user.id,
    )
    if not props:
        return None
    return props


@router.delete(
    "/api/closet/{closet_id}/bins/{bin_id}/clothes/{clothes_id}",
    response_model=bool,
)
async def delete_clothing(
    closet_id: str,
    bin_id: str,
    clothes_id: str,
    repo: ClothesQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    repo.delete(closet_id=closet_id, bin_id=bin_id, clothes_id=clothes_id)
    return True


@router.post("/api/wardrobe", response_model=OutfitOut)
async def post_outfit(
    outfit: OutfitIn,
    repo: OutfitQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    new_outfit = repo.create(outfit)
    return new_outfit


@router.get("/api/wardrobe", response_model=OutfitList | None)
async def get_outfits(
    repo: OutfitQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    if OutfitList(outfits=repo.get_all(user_id=current_user.id)) == []:
        return None
    return OutfitList(outfits=repo.get_all(user_id=current_user.id))


@router.get("/api/wardrobe/{outfit_id}", response_model=OutfitOut | None)
def get_outfit(
    outfit_id: str,
    repo: OutfitQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    props = repo.get_one(outfit_id=outfit_id, user_id=current_user.id)
    if not props:
        return None
    return props


@router.delete("/api/wardrobe/{outfit_id}", response_model=bool)
async def delete_outfit(
    outfit_id: str,
    repo: OutfitQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    repo.delete(outfit_id=outfit_id)
    return True


@router.put("/api/wardrobe/{outfit_id}", response_model=OutfitOut | None)
def update_outfit(
    outfit_id: str,
    outfit: OutfitIn,
    repo: OutfitQueries = Depends(),
    current_user: dict = Depends(get_current_user),
):
    new_outfit = repo.update_outfit(outfit_id, outfit)
    return new_outfit
