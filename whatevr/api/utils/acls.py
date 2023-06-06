from ...keys import OPEN_WEATHER_API_KEY
import requests


def get_weather_data(city, state):
    url = "http://api.openweathermap.org/geo/1.0/direct"
    params = {
        "q": f"{city},{state},US",
        "limit": 1,
        "appid": OPEN_WEATHER_API_KEY,
    }
    response = requests.get(url, params=params)
    content = response.json()
    try:
        latitutde = content[0]["lat"]
        longitude = content[0]["lon"]
    except (KeyError, IndexError):
        return None

    params = {
        "lat": latitutde,
        "lon": longitude,
        "appid": OPEN_WEATHER_API_KEY,
        "units": "imperial",
    }
    url = "https://api.openweathermap.org/data/2.5/weather"
    response = requests.get(url, params=params)
    content = response.json()
    return {
        "description": content["weather"][0]["description"],
        "temperature": content["main"]["temp"],
    }
