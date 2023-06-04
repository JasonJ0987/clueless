from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from api.utils.keys import OPEN_WEATHER_API_KEY
import requests
from pydantic import BaseModel
from api.utils.token_auth import get_current_user


router = APIRouter()


class ZipCodeInput(BaseModel):
    zipcode: int


@router.get("/api/weather")
def get_weather_by_zipcode(
    current_user: dict = Depends(get_current_user)
):
    zip_code = current_user.zipcode

    url = "https://api.openweathermap.org/data/2.5/forecast"
    params = {"zip": str(zip_code), "appid": OPEN_WEATHER_API_KEY, "units": "imperial"}

    response = requests.get(url, params=params)
    response.raise_for_status()
    data = response.json()
    weather_data = {
        1: {
            "temperature": str(data["list"][0]["main"]["temp"]) + " °F",
            "description": data["list"][0]["weather"][0]["main"],
            "icon": data["list"][0]["weather"][0]["icon"],
            "time": data["list"][0]["dt_txt"]
        },
        2: {
            "temperature": str(data["list"][8]["main"]["temp"]) + " °F",
            "description": data["list"][8]["weather"][0]["main"],
            "icon": data["list"][0]["weather"][0]["icon"],
            "time": data["list"][8]["dt_txt"]
        },
        3: {
            "temperature": str(data["list"][16]["main"]["temp"]) + " °F",
            "description": data["list"][16]["weather"][0]["main"],
            "icon": data["list"][0]["weather"][0]["icon"],
            "time": data["list"][16]["dt_txt"]
        },
        4: {
            "temperature": str(data["list"][24]["main"]["temp"]) + " °F",
            "description": data["list"][24]["weather"][0]["main"],
            "icon": data["list"][0]["weather"][0]["icon"],
            "time": data["list"][24]["dt_txt"]
        },
        5: {
            "temperature": str(data["list"][32]["main"]["temp"]) + " °F",
            "description": data["list"][32]["weather"][0]["main"],
            "icon": data["list"][0]["weather"][0]["icon"],
            "time": data["list"][32]["dt_txt"]
        }

    }
    return weather_data
