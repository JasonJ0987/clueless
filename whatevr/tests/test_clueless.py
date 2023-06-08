from fastapi.testclient import TestClient
from api.queries.models import (
    AccountOut,
)
from api.utils.token_auth import get_current_user
from api.queries.closet import (
    ClosetQueries,
    BinQueries,
    ClothesQueries
)
from main import app


@app.get("/api/token")
async def get_token():
    return {
        "access_token": "string",
        "token_type": "Bearer",
        "account": {
            "id": "string",
            "email": "user@example.com",
            "username": "string",
            "first": "string",
            "last": "string",
            "zipcode": 0
        }
    }


client = TestClient(app)


def fake_user():
    return AccountOut(
        id="1",
        email="test@example.com",
        username="test",
        first="test",
        last="test",
        zipcode=12345
    )


class FakeUserQuery:
    def get_user(self, email):
        if email == "test@example.com":
            return {
                "id": "1",
                "email": "test@example.com",
                "username": "test",
                "first": "test",
                "last": "test",
                "zipcode": 12345
            }
        else:
            return None


class FakeClosetQuery:
    def get_all(self):
        return [
            {"name": "test", "id": 10}
        ]


class FakeBinQuery:
    def get_all(self, closet_id):
        if closet_id == "10":
            return [
                {
                    "id": "1",
                    "name": "bintest",
                    "picture": "bintest",
                    "closet_id": "10",
                }
            ]
        else:
            return None


class FakeClothesQuery:
    def get_all(self, closet_id, bin_id):
        if closet_id == "10" and bin_id == "1":
            return [
                {
                    "id": "100",
                    "name": "clothestest",
                    "picture": "test",
                    "primary_color": "test",
                    "type": "test",
                    "tag_ids": ["test"],
                    "bin_id": "1",
                    "closet": "10",
                    "user_id": "1000"
                }
            ]
        else:
            return None


class FakeTagQuery:
    def get_all(self):
        return [
            {
                "id": "10",
                "description": "test"
            }
        ]


def test_get_tag():
    app.dependency_overrides[ClosetQueries] = FakeClosetQuery
    app.dependency_overrides[get_current_user] = FakeUserQuery
    id = "10"
    response = client.get("/api/tags")
    assert response.status_code == 200
    assert len(response.json()) == 1
    app.dependency_overrides = {}
    data = response.json()
    assert "tags" in data
    assert data["tags"][0]["id"] == "10"
    assert data["tags"][0]["description"] == "test"


def test_get_bins():
    app.dependency_overrides[ClosetQueries] = FakeClosetQuery
    app.dependency_overrides[get_current_user] = FakeUserQuery
    app.dependency_overrides[BinQueries] = FakeBinQuery
    closet_id = "10"
    response = client.get(f"/api/closet/{closet_id}/bins")
    assert response.status_code == 200
    assert len(response.json()) == 1
    app.dependency_overrides = {}
    data = response.json()
    assert "bins" in data
    assert data["bins"][0]["id"] == "1"
    assert data["bins"][0]["name"] == "bintest"
    assert data["bins"][0]["picture"] == "bintest"
    assert data["bins"][0]["closet_id"] == "10"


def test_get_closets():
    app.dependency_overrides[ClosetQueries] = FakeClosetQuery
    app.dependency_overrides[get_current_user] = FakeUserQuery
    response = client.get("/api/closet")
    assert response.status_code == 200
    assert len(response.json()) == 1
    app.dependency_overrides = {}
    data = response.json()
    assert "closets" in data
    assert data["closets"][0]["id"] == 10
    assert data["closets"][0]["name"] == "test"


def test_get_token():
    response = client.get("/api/token")
    assert response.status_code == 200
    assert "access_token" in response.json()
    assert response.json()["access_token"] == "string"
    assert "token_type" in response.json()
    assert response.json()["token_type"] == "Bearer"
    assert "account" in response.json()
    assert "id" in response.json()["account"]
    assert response.json()["account"]["id"] == "string"
    assert "email" in response.json()["account"]
    assert response.json()["account"]["email"] == "user@example.com"
    assert "username" in response.json()["account"]
    assert response.json()["account"]["username"] == "string"
    assert "first" in response.json()["account"]
    assert response.json()["account"]["first"] == "string"
    assert "last" in response.json()["account"]
    assert response.json()["account"]["last"] == "string"
    assert "zipcode" in response.json()["account"]
    assert response.json()["account"]["zipcode"] == 0


def test_get_clothes():
    app.dependency_overrides[ClothesQueries] = FakeClothesQuery
    app.dependency_overrides[get_current_user] = FakeUserQuery
    response = client.get("/api/clothes")
    assert response.status_code == 200
    assert len(response.json()) == 1
    app.dependency_overrides = {}
    data = response.json()
    assert "clothes" in data
    assert data["clothes"][0]["name"] == "test"
    assert data["clothes"][0]["picture"] == "test"
    assert data["clothes"][0]["primary_color"] == "test"
    assert data["clothes"][0]["type"] == "test"
    assert data["clo"]
