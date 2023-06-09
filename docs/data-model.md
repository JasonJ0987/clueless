# Data Model that was used when creating the API using FASTAPI and Mongo DB

In our models, each model has a corresponding class that defines its structure. These classes are created using the Pydantic library, which includes features for validating and serializing data.

- SessionOut
- AccountIn
- Account
- AccountOut
- TagIn
- TagOut
- TagList
- ClosetIn
- ClosetOut
- ClosetList
- BinIn
- BinOut
- BinList
- ClothesIn
- ClothesOut
- ClothesList
- OutfitIn
- OutfitOut
- OutfitList

# The SessionOut class represents a session that authenticates a user.
    ```python
    class SessionOut(BaseModel):
        jti: str
        account_id: str
    ```

#  The AccountIn class contains the data needed to create a new account.
    ```python
class AccountIn(BaseModel):
    email: EmailStr
    username: str
    password: str
    confirm_password: str
    first: str
    last: str
    zipcode: int
    ```

# The Account class represents an account that has already been created.
    ```python
class Account(AccountIn):
    id: PydanticObjectId
    ```

# The AccountOut class contains the data returned when an account is retrieved.
    ```python
class AccountOut(BaseModel):
    id: str
    email: EmailStr
    username: str
    first: str
    last: str
    zipcode: int
    ```

# The TagIn class contains the data needed to create a new tag.
    ```python
class TagIn(BaseModel):
    description: str
    ```

# The TagOut class represents a tag that has already been created.
    ```python
class TagOut(BaseModel):
    id: str
    description: str
    ```

#  The TagList class represents a list of tags.
    ```python
class TagList(BaseModel):
    tags: List[TagOut]
    ```

# The ClosetIn class contains the data needed to create a new closet.
    ```python
class ClosetIn(BaseModel):
    name: str
    ```

# The ClosetOut class represents a closet that has already been created.
    ```python
class ClosetOut(BaseModel):
    id: int | str
    name: str
    ```

# The ClosetList class represents a list of closets.
    ```python
class ClosetList(BaseModel):
    closets: List[ClosetOut]
    ```

#  The BinIn class contains the data needed to create a new bin.
    ```python
class BinIn(BaseModel):
    name: str
    picture: str
    closet_id: str
    ```

# The BinOut class represents a bin that has already been created.
    ```python
class BinOut(BaseModel):
    id: str
    name: str
    picture: str
    closet_id: str
    ```

# The BinList class represents a list of bins.
    ```python
class BinList(BaseModel):
    bins: List[BinOut]
    ```

# The ClothesIn class contains the data needed to create a new piece of clothing.
    ```python
class ClothesIn(BaseModel):
    name: str
    picture: str
    primary_color: str
    type: str
    tag_ids: List[str]
    bin_id: str
    closet_id: str
    user_id: str
    ```

# The ClothesOut class represents a piece of clothing that has already been created.
    ```python
class ClothesOut(BaseModel):
    id: str
    name: str
    picture: str
    primary_color: str
    type: str
    tag_ids: List[str]
    bin_id: str
    closet_id: str
    user_id: str
    ```

# The ClothesList class represents a list of pieces of clothing.
    ```python
class ClothesList(BaseModel):
    clothes: List[ClothesOut]
    ```

# The OutfitIn class contains the data needed to create a new outfit.
    ```python
class OutfitIn(BaseModel):
    date: str
    hat: ClothesOut
    top: ClothesOut
    bottom: ClothesOut
    shoes: ClothesOut
    user_id: str
    ```

# The OutfitOut class represents an outfit that has already been created.
    ```python
class OutfitOut(BaseModel):
    id: str
    date: str
    hat: ClothesOut
    top: ClothesOut
    bottom: ClothesOut
    shoes: ClothesOut
    user_id: str
    ```

# The OutfitList class represents a list of outfits.
    ```python
class OutfitList(BaseModel):
    outfits: List[OutfitOut]
    ```
