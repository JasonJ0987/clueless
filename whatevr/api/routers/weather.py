from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from api.utils.keys import OPEN_WEATHER_API_KEY
from api.queries.accounts import AccountOut
import requests
from pydantic import BaseModel


router = APIRouter()


class ZipCodeInput(BaseModel):
    zipcode: int


class WeatherResponse(BaseModel):
    zip_code: int
    temperature: float
    description: str


@router.get("/api/weather", response_model=WeatherResponse)
def get_weather_by_zipcode(
    zip_code_input: ZipCodeInput,
    current_user: AccountOut

):
    zip_code = current_user.zipcode

    url = "https://api.openweathermap.org/data/2.5/forecast"
    params = {"zip": str(zip_code), "appid": OPEN_WEATHER_API_KEY}

    # try:
    response = requests.get(url, params=params)
    response.raise_for_status()
    data = response.json()

    weather_data = {
        "zip_code": data["city"]["coord"]["lat"],
        "temperature": data["main"]["temp"],
        "description": data["weather"][0]["description"]
    }
    return WeatherResponse(**weather_data)

#     except requests.exceptions.RequestException as e:
#         raise HTTPException(
#             status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
#             detail="Error getting weather data",
#         ) from e




# @router.get("/api/weather")
# def get_weather_by_zipcode(
#     context: AccountOut
# ):
#     url = "https://api.openweathermap.org/data/2.5/forecast"
#     params = {"zip": str(context.zipcode), "appid": OPEN_WEATHER_API_KEY}

#     r = requests.get(url, params=params)
#     return r.json()






# @router.get("/weather")
# async def get_weather(
#     info: AccountOut,
#     request: Request,
#     response: Response,
#     weatherdb: WeatherQueries = Depends(),
# ):
#     zip_code = info.zip_code
#     url = f"https://api.openweathermap.org/data/2.5/forecast?zip={zip_code}&appid={OPEN_WEATHER_API_KEY}"
#   response = await get(url)

#     content = response.json()

#     weather_query = weather_query(
#         city=content["name"],
#         description=content["weather"]["description"],
#     )

#     return weather_query



#
#
#
