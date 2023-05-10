## Endpoints:
1. Login
2. Logout
3. Signup
4. Calendar
5. Bins
6. Clothes
7. New Clothes
8. New Wardrobe


## Login

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        "name": string,
        "email": string,
        "password": string
      },
      "token": string
    }
    ```


### Logout

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```


## Signup

* Endpoint path: /signup
* Endpoint method: POST

* Request shape (JSON):
    * name: string
    * email: string
    * password: string
    * confirm password: string

* Response: Some form of verification of new user created
* Response shape (JSON):
    ```json
    {
        "success": boolean,
        "message": string
    }
    ```


## Calendar

* Endpoint path: /calendar
* Endpoint method: GET

* Headers:
    * Authorization: Bearer token

* Response: Displays our planner
* Response shape (JSON):
    ```json
   {
    "planner": {
        "Monday": string,
        "Tuesday": string,
        "Wednesday": string,
        "Thursday": string,
        "Friday": string,
        "Saturday": string,
        "Sunday": string
    }
   }
   ```


## Bins

* Endpoint path: /bins
* Endpoint method: GET

* Headers:
    * Authorization: Bearer token

* Response: List of bins
* Response body:
    ```json
    {
        "bins": bin object
    }
    ```


## Clothes

* Endpoint path: /clothes
* Endpoint method: GET
* Query parameters:
    * q: What bin are we in

* Headers:
    * Authorization: Bearer token

* Response: List of clothing
* Response body:
    ```json
    {
        "clothes": clothes object
    }
    ```


## New Clothes

* Endpoint path: /clothes
* Endpoint method: POST
* Query parameters:
    * q: What bin are we in

* Headers:
    * Authorization: Bearer token

* Request Body:
    ```json
    {
        "title": string,
        "image": url,
        "tags": tag object
    }
    ```

* Response: Indication of success or failure
* Response Body:
    ```json
    {
        "success": boolean,
        "message": string
    }
    ```

## Create Wardrobe

* Endpoint path: /wardrobe
* Endpoint method: POST

* Headers:
    * Authorization: Bearer token

* Request Body:
    ```json
    {
        "Hat": clothes object,
        "Top": clothes object,
        "Bottom": clothes object,
        "Shoes": clothes object
    }
    ```

* Response: Indication of success or failure
* Response Body:
    ```json
    {
        "success": boolean,
        "message": string
    }
    ```
