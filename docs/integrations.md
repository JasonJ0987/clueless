# Integrations

The application will need to get the following kinds of data from third-party sources:

- Weather data from our users zip codes using the [Open Weather API](https://openweathermap.org/api)

We created our API fetch call for Open Weather in our [weather.py](whatevr/api/routers/weather.py)in our routers of our whatevr appicaltion rolder. This code imports two libraries, requests and pydantic, and uses them to make a fetch call to the Open Weather API. The get_weather_by_zipcode function retrieves the user's zip code from a dictionary and constructs a URL for the Open Weather API using the zip code and a constant API key. The function then makes a request to the Open Weather API using the requests library and parses the response using the pydantic library. Finally, the function returns a dictionary containing the weather data for the next five days. This allows us to easily access and utilize the specific weather data that we need for our application.
