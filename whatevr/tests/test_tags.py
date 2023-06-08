from fastapi.testclient import TestClient
from api.queries.models import (
    ClosetOut,
    AccountOut,
    ClosetList,
)
from api.utils.token_auth import get_current_user
from api.queries.closet import (
    ClosetQueries
)
from typing import List
from main import app

client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"msg": "Hello Main"}


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


# def fake_closets():
#     return ClosetList(
#         {"name": "test", "id": 10},
#     )


class FakeClosetQuery:
    def get_all(self):
        return [
            {"name": "test", "id": 10}
        ]


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



# def test_get_users():
#     app.dependency_overrides.get_users = FakeUserQuery
#     app.dependency_overrides[get_current_user] = fake_user




# def test_post_closet():


#     # Create a new closet in the database
#     response = client.post("/api/closet", closet_info)

#     # Asserting that the closet was created successfully
#     assert response.status_code == 200
#     assert response.json() == {
#                "name": "test",
#                 "id": 10,
#            }


# def test_get_closets():
#     # Create a new closet
#     closet_info = ClosetIn(
#         name="My Closet",
#     )

#     # Create a new closet in the database
#     client.get("/api/closet", closet_info)

#     # Get all closets
#     response = client.get("/api/closet")

#     # Asserting that the closet was created successfully
#     assert response.status_code == 200
#     assert len(response.json()["closets"]) == 1
#     assert response.json()["closets"][0]["name"] == "My Closet"
