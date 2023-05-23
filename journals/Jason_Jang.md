## 05/08/2023:
Application brainstorming
Decided as a team that we will develop a weather/event based fashion coordinator planner
Sabrina created a mock-up of the app's home page
Team Name: Coporate Espionage
App Name: I Wear Whatevr-Don't Be Clueless, Wear Whatevr
Customers: Those with clothes, any fashion conscious individual who needs assistance with organization and coordination
Needs/Desires: Organization, Forethought, Coordination
Features/Functions:
    As a user, I can access my closet

    As a user, I can update/edit my closet

    As a user, I can upload a coordinated outfit on a weekly/monthly planner

    As a user, I can arrange my outfit using the recommendations based on the day's event/weather

    As a user, I can preview my outfit virtually using a carousel previewer

    As a user, I can save favorited outfits or clothings

    As an admin, I can add/edit/delete types of events


    Social Features (extra):

    As a user, I can track my friend's OOTDs or share my own OOTD

    As a user, I can compare my friends' outfits with my own to coordinate or ensure no duplicates

    As a user, I can customize my page to fit my style

## 05/09/2023
1. Yesterday, we started our WireFrame production. We generated an idea and gave an elevator pitch to our instructors. They gave us recommendations on our project, mostly to skim down on our functions and get our VMP out. Form over function is the mindset we need.

2. Today we will aim to finish up our WireFrame and discuss whether we want separate microservices or a single monolithic app. Will begin to structure our API design and endpoints.

3. No current blockers


## 05/10/2023
1. Yesterday, we wrapped up our WireFrame. Started on the API design.

2. Today we will present our WireFrame to the instructor to get the okay to export the Wireframe to our project, once we get the okay, we will move the wireframe into our docs folder. Then we will aim to complete our API designs.

3. Concept of API Design is challenging, will need time and clarification.

## 05/11/2023
1. Yesterday, we got clarification on how API designs are generated. As a team we tackled how we want our API designs to look like, ideally. We were made aware that our end product and API design may not necessarily line up together and that is fine.

2. Today, as a group we plan on taking another look at our API design to make sure we like what we created. Then we will look into making issues.

3. Blockers for today is that we don't know how to make issues yet.

## 05/12/2023
1. Yesterday, we explored how to make issues and created a few for our features.

2. Today, we will finish making the rest of the issues for our remaining features.

3. There are no blockers today.

## 05/15/2023
1. Last time, we finished writing out the rest of our issues.

2. Today, we will discuss whether or not we want to use a RDBMS or a DDBMS.

3. There are no blockers today.

## 05/16/2023
1. Yesterday, we decided to use MongoDB, a DDBMS for our database

2. Today, we will work on starting our docker files and authentication. I was the driver for coding today. We updated our docker yml file to include our application and the mongo express database. Our service depends on a DDBMS database using mongo. Using jwtdown we implemented a login and logout function. Furthermore we created a signin function as well. We used fastapi to test our functions to make sure that we were able to properly sign in, log in and log out. We made sure that the bearer tokens were properly being generated and deleted corresponding to the functions. We created a new function branch called 'authentication' where we uploaded our new functions.

3. No current blockers.

## 05/17/2023

Today, as a group we decided to add a few additional features to the authentication feature. We added a confirm password function that makes sure that the user can input their password again to make sure they have it written out properly. If their confirm password does not match their password, then a 401 bad request error will be thrown. Otherwise, the user will be able to create an account regularly.

Once completed we found out that while using jwtdown fastapi, we would not be able to implement the ability to log in with either an email or a username. Due to some under the hood circumstances of jwtdown we decided to pass on this function for now.

Afterwards, we decided it was time we start implementing access into our third-party api, OpenWeather. However, we had lots of difficulties getting started and relied on an instructor to help us initialize. We got a refresher on the basics of FastAPI and learned how the folder structure should look like. Although we understood queries, routers, and utils better we are still struggling to implement the third-party api data. We will continue to try to get the feature working properly.

## 05/18/2023

Today, as a group we tackled the implementation of a third party API once again. This time we refreshed ourselves on FastAPI and got additional assistance from Violet on the implementation. We learned we had to create some type of get_user function that will grab the current loggin user's bearer token so that the function will know the user's information. We learned how to ensure that the funciton is authentication locked so that you must be logged in to access the function. This was achieved by using the Depends() function using the get_user function. Once we had that knowledge, we applied it to our get_weather function.

Now in order to grab weather data, you must be logged in. The weather function will access the user's zip code information and use that to ask our third party api to grab the forecast for the next 5 days based on the zip code. The function will then return the temperature, the datetime, and the weather condition for the next 5 days.

Afterwards, we decided to start working on our CRUD functions. We created models for our closet, bins, clothes, and tags which will be used to classify the clothes. We our struggling to wrap our heads around how CRUD will work with Mongo so we will use the weekend to do further research as well.

## 05/22/2023

All models cleaned up formatting
Get all Closets and Create closets properly implemented
Create bins properly implemented
Blockers: get all bins and get one bin
    seeked assistance for this
