1. What did you do?
2. What are you planning to do today?
3. Do you have any blockers/challenges to your progress?


## May 8th, 2023
1. With the help of the team, we came up with a project idea of creating a clothing, planning app in order to know what to wear to an event based on the weather of the week. The outfits will have to fall in line with the weather and the type of event the end-user is attending.
2. Today, I am planning ideas for Project Gamma and seeing what third party API the team should use to implement in the project.
3. As of today, I currently have no blockers per say but I would like to get better at reading the documentations for the third party APIs and seeing if I can implement the APIs.

Project Details For Now:
Team Name: Corporate Espionage
Title: I Wear Whatevr
Slogan: Clueless for now

## May 9th, 2023
1. Finished the wire-framing design with the team. Added comments to Excalidraw and prioritized the pages that are more important for the project. The pages that are considered as "stretch goals", we placed them to the side, for now.
2. Today, I am planning to talk to my team whether it's important for us to have multiple microservices or not. As of now, it seems like we can just work out of one monolith folder since none of the app seems to be polling from one another. Also, we will attempt to have a head start with the API design.
3. Not quite understanding on how API design works so far but maybe I'll have a better understanding after Thursday's lecture.

## May 10th, 2023
1. Went over the wire-framing design with the team before presenting it to Violet. Violet made some suggestions and we cleaned up the design a little bit before importing it into VS Code.
2. Finishing wire-framing design and completing the API design. Try to get a little bit more insight/clarification on how to write an API endpoint for the project.
3. No blockers for today.

## May 11th, 2023
1. Reviewed the API design endpoints and discussed how to arrange the format for the issues that are being created on GitLab. Went through the examples of the issues that were released on Learn. Got started on the simpler functions such as login, logout, sign up, and buttons to redirect to a new page.
2. Get started on writing issues for the project's functions and hopefully get through most of the creation of the issues by today. If not, we have time to finish creating them on Friday.
3. No blockers for today.

## May 12th, 2023
1. Completed the rest of our issues.
2. Today, the team and I will create the rest of our issues and start talking about whether we want to implement SQL or MongoDB to the project.
3. No blockers for today.

## May 15th, 2023
1. Choosing a database for 'I Wear Whatevr" project. We've implemented SQL before in past projects and it'll be cool if we are able to implement a No SQL database instead (for the experience aspect).
2.Today, as a group, we will be deciding on whether we will be using a relational database(PostgresSQL) or a documental database (MongoDB) for the project.
3. After going through the explorations for MongoDB, I still don't quite understand how to implement this database into our project.

## May 16th, 2023
1. As a team, we decided to go with MongoDB as the database. I downloaded the MongoDB Compass onto my computer in order to access the database locally on my computer.
2. We are going to begin the project setup by adding the necessary codes in the docker-compose.yaml file and the requirements.txt file. Since we are going with MongoDB DDBMS, we needed to add things such as Mongo Express in order to view the database in the browser. Using JWTdown, we were able to start the authentication process. So far, the login, logout, and create an account for a user is working. FastAPI was used to make sure the endpoints were operating correctly and the token was able to be created/deleted whenever a user has been logged in or logged out.
3. No current blockers.

## May 17th, 2023
1. Finished creating the authentication with JWTdown (login, logout, and signup). Attempted to add a username in the AccountIn and AccountOut model in order for the user to login with both email/username but under the hood with JWTdown, we found out from Violet that email can only be used to login. We also added a zip code field to determine the user's location and to connect that with the third-party API, OpenWeather. Will also attempt to have OpenWeather connected with FastAPI.
2. Today, we will be finishing up creating the authentication with JWTdown. As of now, we will not be adding any functions to delete an account or getting an account's detail by its token since it's not necessary for our project. As a team, we will try incorporating OpenWeather (third party API).
3. Not really sure on how to go about utilizing a third project API into the project. The team and I were also unsure with how the folder structure should look like in FastAPI - we were trying to break it down as if the folders were different microservices like in Mod 2. Violet gave a brief overview regarding having an API folder that holds the routers and queries and a separate folder called "Utils" where we can place any other unrelated API files in there. I feel like I don't have much insight on what to add in both the router and queries folder. Will be attempting to connect to a third-party API again tomorrow.

## May 18th, 2023
1. Finally was able to connect to our third-party API, OpenWeather! Yay! We had to create a get_user function in order to  make sure that the information of current user that's logged in will be connected to the weather's endpoint. This also protects the user's information. After connecting to OpenWeather, we decided to start creating our models for the database and from there create the queries and routers for the closet page, bin, and closet item. We attempted to create CRUD functions as well.
2. Able to add and connect to OpenWeather API. OpenWeather only allows you to grab weather for 5 days at a time.
As for the weather description, we're sticking to "main" since there's only 16 of them. All found on this link: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
3. Have to go over the basics of MongoDB in order to understand the creation of models, routers, and queries.

## May 22nd, 2023
1. As a team, we discussed about MongoDB and how to utilize it in our CRUD functions. First, we changed some of our models and rewriting some of them to include the "in" and "out" for each API. With my observation, I noticed the "in" model does not need the "id" as part of the collection for the database but the "out" function does -- this is to handle data validation and serialization/deserialization. We finished creating a GET and POST endpoint for the closet (including both router and query); We referred to the setup to the mongo-api-example project, but we were able to connect to the closet endpoints with ease. I was the driver for the afternoon - I will be creating the CRUD functions for the bins.
2. Finished setting up CRUD for the closet, changing around the models for closet, bins, clothes, and tags, and starting CRUD function for bins. It's a little different creating CRUD for bins than closet because now we are referring to both the closet_id and bin_id. With Violet's help, I am able to understand how to utilize ObjectId a little bit more. We will need ObjectId in order to convert the id to a Mongo-readable ID.
As for now, the GET one bin and POST endpoints are only working for the bins.
3. Was having trouble with setting the CRUD functions for bins, particularly retrieving the data of only one bin (get_one function). With Violet's help we were able to finally get the correct ID back from the bin model.

## May 23rd, 2023
1. Continuation of creating CRUD for bins. Able to create the endpoint get_all.
2. Sabrina is the driver for today. We will be setting up the CRUD functions for clothes and tags. For clothes, we will be creating a POST to create a clothes item, GET one clothes item, GET all clothes in a particular bin, and DELETE a single clothes item. For tags, we will be setting up CRUD functions as well. POST a tag, DELETE a tag, and GET all tags.
3. Not really a blocker but my team and I are wondering how we can implement the tags for each clothing item. Is it a foreign key? If so, is it a one to many relationship between a single clothing item with many tags?

## May 23th, 2023
