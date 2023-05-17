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

## May 16th, 2023
1. Finished creating the authentication with JWTdown (login, logout, and signup). Attempted to add a username in the AccountIn and AccountOut model in order for the user to login with both email/username but under the hood with JWTdown, we found out from Violet that email can only be used to login. We also added a zip code field to determine the user's location and to connect that with the third-party API, OpenWeather. Will also attempt to have OpenWeather connected with FastAPI.
2. Today, we will be finishing up creating the authentication with JWTdown. As of now, we will not be adding any functions to delete an account or getting an account's detail by its token since it's not necessary for our project. As a team, we will try incorporating OpenWeather (third party API).
3. Not really sure on how to go about utilizing a third project API into the project. I feel like I don't have much insight on what to add in both the router and queries folder. Will be attempting to connect to a third-party API again tomorrow.
