Template:
A list of features/issues that you worked on and who you worked with, if applicable
A reflection on any design conversations that you had
At least one ah-ha! moment that you had during your coding, however small
1. What did you do?
2. What are you planning to do today?
3. Do you have any blockers/challenges to your progress?

## 5/8/2023
Developed ideas for our project and identified who our users are, the high-level functionality of our application, and the APIs needed to bring our project to life. Next, we constructed a logo and first draft wireframe to represent better what we will need to do for our project.

## 5/9/2023
1. Unavailable to work on the project today.
2. Familiarize myself more with fastAPI, learn more about what needs to go into our API designs, and understand how we will meet our minimal value product.
3. My challenges for today and this week would be related to APIs and with more practice time for understanding how this will work and relate to our project.

## 5/10/2023
1. We finalized our wireframes, met with our project consultant to understand the importance of our Most Viable Product, created our first version of our out API endpoints, and uploaded everything into our project code.
2. Organize our wireframe images and assist in the creation of our FastAPI endpoints to use in our design.
3. Mainting a realist perspective on our work of our wireframe, following our key bullet points addressed to our Minimal Viable Product list, and knowing that the following weeks of learning new technologies and integrating our API needs to be heavily focused on still achieving our Minimal Viable Product list.

## 5/11/2023
 1. Contributed to the template and stories for our issues for the functions used in our project.
2. Defining the story, feature, and descriptions of our features: login, signup, closet page, style button, weekly outfit planner, and a logout button.
3. We discussed establishing baselines for what clothes will be displayed to the user depending on the weather temperature and the weaker description tag from Open Weather API. Currently, this is still being determined as to the accurate baselines we want to use.

## 5/12/2023
1. Contributed to the template and stories for our issues for the functions used in our project. We finalized our issue creation on GitLab. Finishing with thirteen total issues.
2. Completing our issue stories for the various functions we must create for our application to meet our minimum viable requirements.
3. No challenges or blockers for today's work. We are still uncertain about the type of database we will use. However, come Monday, after learning more about MongoDB, we will better understand the direction we pursue a database in our project.

## 5/15/2023
1. Defined what database we were going to use for our application and decided on using MongoDB
2. Help provide feedback and discuss with the team in deciding what database we will implement for our project.
3. No blockers or challenges as we are nearing the end of our planning and design phase and will soon be moving into the development phase, where we begin to code. At this point, more challenges and blockers will exist during this project.

## 5/16/2023

Today, I worked on:

* Getting our Docker Containers running and our Authentication

I worked with Jeanette, Liland, and Sabrina as navigators for Jason, who was the driver for today. We built out our docker.compose.yml file to be able to run our FastAPI server, Mongo, Mongo Express, and React development servers. After getting our development servers to run, we built out the backend server portion for authenticating our users. We now have a queries and routers folder in our monolith (whatevr) directory that allows us to create, get, and list user accounts. Once implemented, our application now can:

- Allow users to log in and log out.
- Require a valid token for access to certain endpoints.
- Get the current account data for a logged-in user.
- Let users sign up for new accounts.

We learned that JWTdown for FastAPI provides two routes for logging in and logging out:
The POST /token to log in using form data sets a cookie and returns a JSON token for you to use in your API calls.
DELETE /token to log out, which deletes the cookie set with logging in.
When requiring a valid token for access to specific endpoints, we can use the authenticator.get_current_account_data method as an injected dependency. This method will return the current account data for a logged-in user or None if the user is not logged in.
We used the authenticator to get the current account data for a logged-in user.try_get_current_account_data method. This method will return the current account data for a logged-in user or None if the user is not logged in.
Finally, we learned that we can use the authenticator to let users sign up for new accounts. Login method. This method takes an AccountForm object as input, containing the new account's username and password. The method will return a Token object if the login is successful or raise an exception if the login is unsuccessful.
We are excited to implement authentication in my application using JWTdown for FastAPI, making our application more secure and user-friendly.

For tomorrow we plan on analyzing the code that Violet provided us to further build our authentication section to the backend of our application and, later this week, integrate React hooks and frontend authentication.

## 5/17/23

Today, I worked on:

* Updating our authentication functionality in our FastAPI and making sure users are authenticated, updated models, and worked on creating the API Open Weather fetch

Our group participated as a whole in updating the authentication in our application and focusing on the query and router directory for our accounts(users), and starting the process of writing our API call for Open Weather API. Today I was the driver, writing most of the code and sharing my screen with the team. Everyone else was the navigator and provided guidance and insight for every line of code. We added a field to confirm passwords upon the creation of accounts. From there, we retested our login and logout and created account functionality. Afterward, we received consulting help from Violet on the structure of our files and directory in our project. After this, we spent the last 2 hours of our group work figuring out how to connect our database (MongoDB) to our Python environment. We want to return the weather for all our users based on the zip code they enter upon account creation.
We attempted numerous different codes in our weather.py file in our router directory in hopes that it would return the correct API call using the zip code that was created for each user in our database. We are left to return the fields created in our model, but, unfortunately, we are still not returning data from our database, which is blocking our ability to perform a correct API call from open weather's API. Last, I installed the pymongo library on a new and separate branch in hopes that this would help with creating a MongoClient object and then have the ability to connect to our MongoDB database. Unforently after an hour of attempting and numerous versions of playing the pymongo in my requirements.txt, I still needed help to import the pymongo library and have it recognized in my code. I will update the team on this attempt and spend the following working day focused on connecting our MongoDB database to our Python environment to use it in our FastAPI and, additionally, spending time working on React Hooks.
