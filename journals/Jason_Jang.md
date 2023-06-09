## Jason Jang Journal
- Please note: Certain entries were added retroactively to this digital journal from a manual journal

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

## 05/23/2023

Got get_all() for bins functional.
plan to use jwtdownfastapi for front-end authentication
Began construction of CRUD functions for clothes
Need to figure out how to implement relation between clothes models and tags models
Figured out implementation between clothes and tags
completed merge of our branches to our main.
Main is now up to branch

## 05/24/2023

We began work on implementing the Front-End Authentication. We decided to create the token grabber and sign-up form first. We tried testing to see if the back-end was working together with the front-end and we discovered that our sign-up function was not generating an account. We got a bunch of errors regarding the token. We were wondering if the issue was the we needed a log in function for sign in to work so we tried to create a login function. We discovered that we were unable to find an access token. Turns out our payload did not match what it does in the Playground app that was provided to us. We struggled with getting the authentication on the front end to work for the rest of the day


## 05/25/2023

Still in the process of implementing the Front-End Authentication. We ran console logs to test to see if the back-end data was matching with the front-end data but the sign-up function we made was not generating account and created errors regarding the token. We decided to take a break from the sign-up and thought that maybe it will work if the log-in form is made first. However, we were unable to find an access token no matter the form. We used the template provided to us from the instructors and changed it around to fit our purposes. The payload does not look like what it does in the authentication playground example provided to us. We kept getting a TypeError failed to fetch response.


## 05/26/2023

We must address the issue we had with obtaining the token. After consulting the other groups we decided to add a baseurl variable that is assigned a value of a string of the localhost location of our front end. Then, after providing the <Authprovider> with the baseurl, we managed to properly generate our token. Now both our sign in and log in components in the front end were properly functioning. We set it up so that after a user registers a new account, they will be logged in right away and navigated to the main page. The current main page is empty so we decided to work on styling it. While some of us worked on developing a navbar the others worked on the main page as well. The navbar will contain a sign in and log in button that leads to either form while the user is not logged in. For the time being we placed a simple "please log in" message if the user is not logged in and a "main page" message if they are. Our next goal after setting up the navbar and main page was to load our closet back end data to the front end. The day was dedicated to generating a view page that lets the user see the closet page that will contain the required bins.

## 05/30/2023

Sabrina finished coding out the Navbar functionality. It is now only showing the login and sign in buttons when the user is logged out and it will disappear upon login. We decided we wanted to use some sort of slider view for our Planner. With that in mind, however, we begain to work on generating a page that will allow us to see all items within a specific bin within the closet. We also discussed that our next actions will be to create a clothing upload form and an outfit creation form.

We succesfully generated the bin view, however it is visually very bare bones. During development we had some issues loading the bin and clothing data in the bin view. Using "{ X && X }" to load the data fixed the issue. Originally the bin view was using div blocks but we changed it to be cards so now each bin is a card and so are the clothing objects.

Sabrina formatted the navbar further and bin card images were reformatted to include more information such as the image of the bin. Tomorrow we plan to work on generating tags and to assign them to the clothes so that it will show on their cards.

## 05/31/2023

We added an error message to the login form. If the user inputs an incorrect email or password then they will see a red alert message notifying them that their login information is incorrect.

We decided to start writing the clothing form to allow users to upload their own clothes to the site. There was concern on how to apply multiple tags to a clothing item through a select tag. Eventually we figured a method to do so, instead of using select tags we allowed the user to select multiple tags by presenting to them the list of tags available and allowing them to click as many of them as desired. Once they enter in all the required information they can hit the upload button and they will be navigated to the bin page they were on to see their new item.

We realized an interesting issue after getting the form to this state. Perhaps a user_id needs to be applied to the clothes? For now, we decided to leave it. We also saw that the tags to be associated with the clothing item needed an id property as well. Although we were able to get the form to appear as we wanted, submitting it did not generate a clothing item into our database. This was a blocker for the day.

The navbar's styling was also further updated to be more stylistic; including a logo and a drop down menu

We started creating the wardrobe form as well.

## 06/01/2023

Today, we tried separating clothes and setClothes to individual useStates. Now the form successfully uploads clothing items. However all users are able to see all uploaded clothing, despite whoever made it. Only the user who created the clothes should be able to see them so we returned to the back-end and applied a user_id property to the clothing item. Now create clothing functions by checking the current user and populating the clothing data to have the user's id. Now on the front end, we can create a clothing item and only have whoever made it see it in their closet.

The login form was stylized to be less of a boring form, color was added and everything was formatted to be visualy appealing.

While creating the wardrobe form, we realized we needed a wardrobe model as well. This model was named to be Outfit and the appropriate CRUD routers were generated for this model. The model has 4 clothesOut objects (hat, top, bottom, shoes) and also generates a user_id based on the user creating it.

## 06/02/2023

Continued working on the wardrobe/outfit form. Today we got the CRUD functions fully functional. Now on the back end you can see all your outfits made, create an outfit, look at a particular outfit, and delete an outfit. We wanted to figure out hwo to fit the outfits with the planner that will be made. Perhaps a wardrobe form is not needed at all? We discussed the possibility of simply selecting the hats, shirts, bottoms, and shoes in each day of the planner instead of using a whole form. The wardrobe form still not completed but is slowly coming together.

Further style updates were made, previously the drop down had an issue that prevented us from smoothly moving from the root button to the actual dropdown without losing the dropdown. But now the dropdown is as functional as possible, however the routes from bin to bin was acting odd. This will be investigated further.

## 06/05/2023

## 06/06/2023

## 06/07/2023

## 06/08/2023

## 06/09/2023
