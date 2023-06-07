# Importing the TestClient from FastAPI's testclient module and the app object from api.main
from fastapi.testclient import TestClient
from main import app
import os
os.environ["DATABASE_URL"] = "mongodb://root:password"



# Creating a new client instance using the app object
client = TestClient(app)


# Defining a test function to create an account and get its access token
def test_create_account():
    # Creating a dictionary containing data for a new account
    new_account = {
        "email": "test@example.com",
        "password": "password",
        "confirm_password": "password",
    }

    # Sending a POST request to '/api/accounts' with the JSON payload
    response = client.post("/api/accounts", json=new_account)

    # Checking that the server returns a 201 Created status code
    assert response.status_code == 201

    # Checking that the response body contains the expected data
    assert "id" in response.json()
    assert "email" in response.json()


# Defining a test function to get the access token for an existing account
def test_get_token():
    # Getting the id of the account created in the previous test
    id = response.json()["id"]

    # Sending a GET request to '/token' with the id in the query parameters
    response = client.get("/token", params={"_id": id})

    # Checking that the server returns a 200 OK status code
    assert response.status_code == 200

    # Checking that the response body contains the expected data
    assert "access_token" in response.json()
    assert "type" in response.json()
    assert "account" in response.json()
