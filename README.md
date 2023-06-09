# Clueless - I Wear Whatevr

Our Clueless application can be viewed at [https://xanderrubio.gitlab.io/clueless/](https://xanderrubio.gitlab.io/clueless/)

The team (corporate-espionage👀) behind this project is:

- Jason Jang | [LinkedIn](https://www.linkedin.com/in/chiyoung-jang) | [GitLab](https://gitlab.com/JasonJJ98)
- Jeanette Gonzalez | [LinkedIn](https://www.linkedin.com/in/jeanetteglz) | [GitLab](https://gitlab.com/JeanetteGz)
- Liland Pham | [LinkedIn](https://www.linkedin.com/in/lilandpham) | [GitLab](https://gitlab.com/phamliland)
- Sabrina Blinder | [LinkedIn](https://www.linkedin.com/in/sabrina-blinder-959575260) | [GitLab](https://gitlab.com/sabrinablinder)
- Xander Clemens | [LinkedIn](https://www.linkedin.com/in/alexanderclemens/) | [GitLab](https://gitlab.com/XanderRubio)



Clueless – Quickly create outfits based on the weather forecast.

Clueless - Clothing organizer catogroized by hat, top, bottoms, and shoes.

Clueless - Stay stylish and organized, all in one place.


## Design

- [API design](docs/endpoints.md)
- [Data model](docs/data-model.md)
- [GHI](docs/wireframe.md)
- [Integrations](docs/integrations.md)
- [Deployment to Cirrus By Galvanize](docs/deployment.md)

## Intended users

This application is perfect for individuals interested in fashion, organization, and saving time. Specifically, fashionistas who want to store images of their clothes, create outfits, and get weather forecasts for their area; organizers who need a visual way to organize their clothes and easily find the perfect outfit for any occasion; and time-savers who want to quickly create outfits by using the weather forecast to guide them. If you fall into any of these categories, this app is the ideal solution for you!

## Functionality

- Create an account: Users can create an account by providing their email address, password, and zip code.
- Upload clothing images: Users can upload images of their clothes by clicking on the "Upload" button and selecting the images from their computer.
- See images: Users can see the images they have uploaded by clicking on the "Images" tab.
- View a five-day calendar: Users can view a five-day calendar to see the weather for their location based on their zip code. The calendar will display the date, temperature, and a weather description with the icon of the weather.
- Select different outfit combinations: Users can select different outfit combinations from the planner/calendar page to take into consideration their outfit combination based on the weather for that day. To do this, users can click on the "Planner" tab and then select the outfit combinations they want to wear for each day.


## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume create clueless-db`
4. Run `docker compose build`
5. Run `docker compose up`

Enjoy your new wardrobe with I Wear Whatevr!
