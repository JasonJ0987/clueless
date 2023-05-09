## Endpoints:
1. login
2. logout
3. signup
4. main
5. closet
6. closet/<bin:id>
7. closet/<bin:id>/<clothes:id>
8. planner
9. clothesnew
10. account


## Log In

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


### Log out

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```

## Sign Up

* Endpoint path: /token
* Endpoint method: POST

* Request shape (JSON):
    * name: string
    * email: string
    * password: string
    * confirm password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
        "account": {
            "name": string,
            "email": string,
            "password": string,
            "confirm password": string
        },
        "token": string
    }
    ```

## Main
* Endpoint path: /main
* Endpoint method: GET
* Query parameters:
    * loggedin: true

* Headers:
    * Authorization: Bearer token

* Response: displays main page (planner preview)
* Response shape (JSON):
    ```json
   {
    "planner": {
        "days of the week": string
    }
   }
    ```
