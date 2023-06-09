# I Wear Whatevr

- Jason Jang | [LinkedIn](https://www.linkedin.com/in/chiyoung-jang) | [GitLab](https://gitlab.com/JasonJJ98)
- Jeanette Gonzalez | [LinkedIn](https://www.linkedin.com/in/jeanetteglz) | [GitLab](https://gitlab.com/JeanetteGz)
- Liland Pham | [LinkedIn](https://www.linkedin.com/in/lilandpham) | [GitLab](https://gitlab.com/phamliland)
- Sabrina Blinder | [LinkedIn](https://www.linkedin.com/in/sabrina-blinder-959575260) | [GitLab](https://gitlab.com/sabrinablinder)
- Xander Clemens | [LinkedIn](https://www.linkedin.com/in/alexanderclemens/) | [GitLab](https://gitlab.com/XanderRubio)



Clueless – bringing you clothing outfit recommendations based on the weather.

## Design

- [API design](docs/endpoints.md)
- [Data model](docs/data-model.md)
- [GHI](docs/wireframe.md)
- [Integrations](docs/integrations.md) 

## Intended users
(REVIEW AND UPDATE)
We are targeting users with lots of clothes in there closet and want to have the ability to receive recommend outfit combinations from the clothes that they have based off what the weather is for the day.

## Functionality
(REVIEW AND UPDATE)
- Visitors to the site can create an account to then upload their clothes into the database.


## Project Initialization
(REVIEW AND UPDATE)
To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume create clueless-db`
4. Run `docker compose build`
5. Run `docker compose up`
6. Run `docker exec -it NEED TO EDIT-api-1 bash`
7. Run `python manage.py loaddata products.json`
8. Exit the container's CLI, and enjoy Clueless to its fullest! (CHECK THIS STEP)
