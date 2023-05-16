# I Wear Whatevr 

- Jason Jang
- Jeanette Gonzalez
- Liland Pham
- Sabrina Blinder
- [Xander Clemens](https://gitlab.com/XanderRubio) 
- [text](https://www.google.com/ "Optional title")


Clueless – bringing you clothing outfit reccomnedations based on the weather. 

## Design

- [API design](docs/endpoints.md)
- [Data model](docs/data-model.md) (NEED TO CREATE)
- [GHI](docs/wireframe.md)
- [Integrations](docs/integrations.md) (NEED TO CREATE)

## Intended users

We are targeting users with lots of clothes in there closet and want to have the abilty to receive recommend outfit combinations from the clothes that they have based off what the weahter is for the day. 

## Functionality

- Visitors to the site can create an account to then upload their clothes into the databass.
  

## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume create clueless-db`
4. Run `docker compose build`
5. Run `docker compose up`
6. Run `docker exec -it NEED TO EDIT-api-1 bash`
7. Run `python manage.py loaddata products.json`
8. Exit the container's CLI, and enjoy Clueless to its fullest! (CHECK THIS STEP)

