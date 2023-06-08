from fastapi import (
    Depends,
    APIRouter,
)
from api.queries.models import TagList, TagIn, TagOut
from api.queries.tags import (
    TagQueries,
)

router = APIRouter()


@router.get("/api/tags", response_model=TagList)
def get_tags(repo: TagQueries = Depends()):
    return TagList(tags=repo.get_all())


@router.post("/api/tags", response_model=TagOut)
async def post_tag(tag: TagIn, repo: TagQueries = Depends()):
    new_tag = repo.create(tag)
    return new_tag


@router.delete("/api/tags/{tag_id}", response_model=bool)
async def delete_tag(
    tag_id: str,
    repo: TagQueries = Depends(),
):
    repo.delete(tag_id=tag_id)
    return True
