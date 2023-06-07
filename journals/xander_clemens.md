Template:
A list of features/issues that you worked on and who you worked with, if applicable
A reflection on any design conversations that you had
At least one ah-ha! moment that you had during your coding, however small
1. What did you do?
2. What are you planning to do today?
3. Do you have any blockers/challenges to your progress?

## 5/9/2023
Developed ideas for our project and identified who our users are, the high-level functionality of our application, and the APIs needed to bring our project to life. Next, we constructed a logo and first draft wireframe to represent better what we will need to do for our project.

## 5/10/2023
1. Unavailable to work on the project today.
2. Familiarize myself more with fastAPI, learn more about what needs to go into our API designs, and understand how we will meet our minimal value product.
3. My challenges for today and this week would be related to APIs and with more practice time for understanding how this will work and relate to our project.

## 5/11/2023
1. We finalized our wireframes, met with our project consultant to understand the importance of our Most Viable Product, created our first version of our out API endpoints, and uploaded everything into our project code.
2. Organize our wireframe images and assist in the creation of our FastAPI endpoints to use in our design.
3. Mainting a realist perspective on our work of our wireframe, following our key bullet points addressed to our Minimal Viable Product list, and knowing that the following weeks of learning new technologies and integrating our API needs to be heavily focused on still achieving our Minimal Viable Product list.

## 5/12/2023
 1. Contributed to the template and stories for our issues for the functions used in our project.
2. Defining the story, feature, and descriptions of our features: login, signup, closet page, style button, weekly outfit planner, and a logout button.
3. We discussed establishing baselines for what clothes will be displayed to the user depending on the weather temperature and the weaker description tag from Open Weather API. Currently, this is still being determined as to the accurate baselines we want to use.

## 5/13/2023
1. Contributed to the template and stories for our issues for the functions used in our project. We finalized our issue creation on GitLab. Finishing with thirteen total issues.
2. Completing our issue stories for the various functions we must create for our application to meet our minimum viable requirements.
3. No challenges or blockers for today's work. We are still uncertain about the type of database we will use. However, come Monday, after learning more about MongoDB, we will better understand the direction we pursue a database in our project.

## 5/14/2023
1. Defined what database we were going to use for our application and decided on using MongoDB
2. Help provide feedback and discuss with the team in deciding what database we will implement for our project.
3. No blockers or challenges as we are nearing the end of our planning and design phase and will soon be moving into the development phase, where we begin to code. At this point, more challenges and blockers will exist during this project.

## 5/15/2023

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

## 5/16/23

Today, I worked on:

* Updating our authentication functionality in our FastAPI and making sure users are authenticated, updated models, and worked on creating the API Open Weather fetch

Our group participated as a whole in updating the authentication in our application and focusing on the query and router directory for our accounts(users), and starting the process of writing our API call for Open Weather API. Today I was the driver, writing most of the code and sharing my screen with the team. Everyone else was the navigator and provided guidance and insight for every line of code. We added a field to confirm passwords upon the creation of accounts. From there, we retested our login and logout and created account functionality. Afterward, we received consulting help from Violet on the structure of our files and directory in our project. After this, we spent the last 2 hours of our group work figuring out how to connect our database (MongoDB) to our Python environment. We want to return the weather for all our users based on the zip code they enter upon account creation.
We attempted numerous different codes in our weather.py file in our router directory in hopes that it would return the correct API call using the zip code that was created for each user in our database. We are left to return the fields created in our model, but, unfortunately, we are still not returning data from our database, which is blocking our ability to perform a correct API call from open weather's API. Last, I installed the pymongo library on a new and separate branch in hopes that this would help with creating a MongoClient object and then have the ability to connect to our MongoDB database. Unforently after an hour of attempting and numerous versions of playing the pymongo in my requirements.txt, I still needed help to import the pymongo library and have it recognized in my code. I will update the team on this attempt and spend the following working day focused on connecting our MongoDB database to our Python environment to use it in our FastAPI and, additionally, spending time working on React Hooks.

## 5/17/23

Today, I worked on:

* Creating our MongoDB Compass Database, successfully fetching our API from Open Weather.

Jason was the driver today, and the rest of our group were the navigators. We, as a team, worked together on getting our accounts (users) to display in the MongoDB collection displayed on the MongoDB Compass (graphical user interface (GUI) for MongoDB that allows you to explore, query, and analyze your data). After getting this to work, we discussed a team and decided to focus on getting our API call to Open Weather to work on FastAPI. After seeing the data being returned in our API call, we successfully extracted the city, temperature (in Fahrenheit), description of the weather, time, and logo icon of the weather. In addition, we could return a five-day forecast of the weather data for a specific city. We still need to adjust the format for how the time is being produced and will do this later on the front-end side. From here, we discussed again and decided on working and building our models for the closet, clothes, and bins. We were still determining how to include some fields when using MongoDB, but after trial/error and research, we got our Bin model and created a bin to register an object id in our MongoDB compass. Our team has a three-day work break, and we have agreed to focus on Monday to progress our models further and get/post functionality to the three collections we need for our project: clothes, bins, and closets and our work day ended with the team feeling optimistic about our success in returning the correct data required from Open Weather. Our blockage is with MongoDB, and not fully grasping how it works, but every day this week, we learn more and more.

## 5/22/2023

Today, I worked on:

* CRUD functionality for our Bins and Closet models used in our Mongo Database and making successful execution when running them in FastAPI

Liland was our driver today with the goal and focus of successfully executing our get, post functionality FastAPI calls for our Bins, Closets, and clothes models. After completing our closet GET and POST on FastAPI. After doing so, we focused on developing our code for Bins in our queries and routers folder. For several hours today, our team continually addressed errors with how our _id data for each bin was being returned and ran into TypeError or dict errors. After working as a group on our blockage, we had our coding consultant Violet join our video call, and after working on our code and adjusting our closet.py folder in our queries directory, we successfully returned our bins GET execution on FastAPI. The primary fix was adding the following:
```
def get_one(self, bin_id: str, closet_id: str) -> BinOut | None:
    props = self.collection.find_one(
        {
            "_id": ObjectId(bin_id),
            "closet_id": ObjectId(closet_id),
        }
    )
    if not props:
        return None
    props["closet_id"] = str(props["closet_id"])
    props["id"] = str(props["_id"])
    return BinOut(**props)

```
This allowed our errors to go away and for us to fetch the din data and ensure it is turned into a string since the model for bins is set in strings. Tomorrow, we will finalize our GET functionality for bins and then make the GET/PUT functionality for our clothes model. Additionally, this week, the focus will shift to the front end by first focusing on authentication on the front end.

## 5/23/2023

* Today, I worked on the CRUD functionality for our clothes and tag models and executing our FastAPI endpoints.

Sabrina was the driver today, and we all worked together on mob programming to code out our clothes routers and queries for our FastAPI endpoints. In addition, we created our tags routers and questions for our FastAPI endpoints. For the clothes, we made four functions to perform the following:
- Get a clothing item.
- Get all clothing items.
- Create a clothing item.
- Delete a specific clothing item.
We then created a new file for the tags in our routers and queries directory. We created four functions to perform the following:
- Get all tags
- Create a tag
- Delete a specific tag
We didn't have any blockages today, and we only had to fix errors that would return to us in our docker logs. We ended the day by merging our features into our main branch. For the following day, we plan on working on the front end of our project by first doing the front-end authentication.

## 5/24/2023

* Today, I worked on the front end authentication for the first time and creating the signup form and loging form to be able to access the JavascriptWebToken.

Jeanette was the driver today, and the rest of the team assisted with our mob programming style for the workday. We created a file directory called components in our ghi folder (React section) to store the following files: Login, Main, SignUp, TokenCard, and UserDataCard. We added the routing path to our signup form and login. During this time, we have successfully registered a new user on the front end to connect to the backend. Our main error is having the data we attempt to post from the Signup form return that the data is undefined.

When we evaluated and looked into the developer tools and Netowk tab, we saw that our payload attempted to be sent, had an error with finding our web token, and missing the web_token, token type, and hashed_password. This is because of an issue on the backend and not having a fetch function for our web token. We have gone ahead and created a router. Get in whatevr/api/routers/accounts.py to be able to fetch the web token. After testing last night, it successfully retrieves the token to display on our backend in our Mango Express. However, we are still running into this error on the front end. We plan on continuing to fix this error tomorrow by reviewing syntax in our Frontend and continually referencing source code from the JWTdown library. After we fix this error, we will focus on finishing the login form and logout ability.

## 5/25/2023

* Today, we made significant progress on our project. Our main focus was finalizing the ability to create a user account on the application's front end, which involved a lot of coding and testing. Jeanette and Jason served as drivers today, and we employed mob programming, which allowed us to work collaboratively and efficiently.

In the morning, we spent a significant amount of time editing our code to get it to successfully POST from the front end and register a user in our MongoDB database. It was a challenging task, but we were able to overcome it with persistence and teamwork.

After we successfully achieved our goal, we moved on to front-end design. We began using Bootstrap to create our navigation bar and made adjustments to the padding and margins of our links to ensure that they are visually pleasing and easy to use. We also discussed our plans for tomorrow, which include focusing on creating a more visually appealing navigation bar and starting to design our pages based on the wireframe designs that we have created.

While working on the CSS and designing the frontend, we realized that dividing our group into teams of 2 or 3 people per section or micro feature would be better to avoid multiple errors being displayed on the React server.

## 5/26/2023

* Today, we focused on building the React page containing the view closet section.

We focused our entire work day on the Views of our closet to display from Jason being the driver and Jeannette, Liland, and myself assisting with navigation. Sabrina was working on the Navigation bar today and got the Nav Bar to look more pleasing to the eyes. Through the work section, to return the bin and closet data needed for our closet page, we had to make sure we used the following snippets to be able to return the data correctly.

```
setClosets(data.closets);
setBins(data.bins);
```

Our focus from when we return from the three day weekend is to follow the next four days of work hitting these schedule goals:
Tuesday - finish Bin view page
Wednesday - create forms for adding a new item to bin and form for wardrobe
Thursday - planner view page
Friday - connecting 3rd party api to planner

## 5/30/2023

* Today, we focused on improving our navigation bar by adjusting the spacing of our clickable buttons and logo. Additionally, we worked on connecting our view bins page from the front end to the back end and ensuring that the associated images were displayed correctly for each bin.

Liland was responsible for writing the code to display the bin views in React, while Sabrina and I focused on enhancing the navigation bar and logo at the top of the page. We did not encounter any major issues during our session, although we spent some time tweaking the CSS in both the React component and CSS files.

During our next working session, we plan to expand the bin view page to fully display the tags on the front-end, similar to what we did on the closet view page. We also plan to integrate the planner on the front-end, allowing token code to display specific buttons tailored to the user who is logged in or non-users.

## 5/31/2023

* Today, we focused on developing further development of our CSS on the Nav Bar and presentation of our images on our closet page, creating our ClothingForm, and starting to build out our planner page.

I was responsible for driving today, and as a group, we created the code today for our ClothingForm. We added the JSX code and built out our use effect and useState. We were able to display all of our model fields on our form on the front end and, at times, were able to submit the form successfully and have it be able to be shown on the front end on our closet and bin page. We had challenges today with getting an error message to display correctly on our Login component and have the ability for the user to correctly input their correct details and be taken to the home page. We have yet to get an error message to display correctly and will need to work on this for Thursday. Jeanette also worked on developing the front end for our Bin View Page, giving our group a great head start on our work schedule for tomorrow. The focus for tomorrow is to resolve our ClothingForm, login, and BinView pages. To get them functioning correctly with our MongoDB Database.

## 6/1/2023

* Today, we worked on advancing our application on three issues: Our CSS for the login/closet-view page and the clothing and wardrobe form.

And Jeanette did the driving today while Jason and Liland assisted with navigation. Sabrina focused on the front-end styling adding new CSS to the various pages of our application. In the morning, we faced the challenge of getting our new clothing POST on the front end to only display based on which user is logged in. We were experiencing seeing both clothing items being displayed in the same user account. We can make the adjustments successfully by only displaying the clothing items in the bin view pages specifically to the user who is logged in. Sabrina then added new CSS to the login and background of our application, created a logout button, and enhanced the dropdown functionality. Jeanette added more to the Wardrobe form, and the main blockage we are currently experiencing is docker issues preventing her from seeing her new updates being made on her browser and displaying her React server. The focus for tomorrow will be to successfully pull our data from our database to be displayed on our Wardrobe form. Additionally, Liland successfully created a dropdown select tag to show our bins and tags on our Clothing Form page.

## 6/2/2023

* Today, we made progress in improving our CSS and spent a significant amount of time debugging our code on the wardrobe form. Additionally, we began building the skeleton of our planner page and started creating our unit tests.

Jason and Jeanette were the primary developers today. In the morning, we added OutfitIn and OutfitOut models to our models.py file in the queries directory. We then added the following functions to our closet.py file in the routers directory. Afterward, we tested our FastAPI to ensure that the endpoints were working correctly, and they were. We then proceeded to build out our wardrobe form page and successfully applied CSS to display it nicely. However, we spent most of our workday figuring out how to display our new clothing models on the front end. Although we could get the data to display on our MongoDB Compass, we could not get the data to display on the front end. We will continue to work on this issue, but after having other engineers review our code, we have decided that we must adjust the page's presentation to address the problem caused by the JWTdown authenticator library. Additionally, I started building our unit tests, focusing on testing the accounts and API endpoints. I'm encountering difficulty importing the models from our files in the queries directory. We have agreed to meet on Sunday to continue our progress and work on the project.

## 6/5/2023

* Today, we made progress on our Wardrobe page and CSS and cleaned up our repository home page by addressing issues, closing them, and completing merge requests.

Jason and Jeanette did a good portion of the driving today, improving our planner page by connecting our OpenWeather API call, working on our wardrobe form page, and getting a successful submission that now registers in our MongoDB. We made adjustments to the CSS layout on the Wardrobe form and allowed the clothing items in a user's closet to be successfully picked from a dropdown select tag. We must focus on taking the data submitted on our wardrobe form and connecting that to our planner page. After doing this, the next focus will be to create Unit tests and get them to pass.

## 6/6/2023

* Today, we made progress on how our wardrobe form is sending data and then how it is returning our data to our planner page. In addition, we further built out our unit tests.

Today, we first focused on finishing up the last of our merge requests and closing any issues still open. We then focused on getting our wardrobe form to send data to our planner page. We got the data to send successfully. However, we are still working on getting the data to return to our planner page and figuring out how to get our clothes for the specific day to be saved and regenerated upon a day change. We also worked on building out our unit tests and getting them to pass. However, we continually ran into the issue of needing help to import the modules used throughout the unit tests we constructed. We attempted to move the files around and change the file structure, but we still needed to get our unit tests to pass. We will continue working on this issue and hope to resolve it by tomorrow.

