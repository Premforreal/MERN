# mern-Goals
A simple CRUD application with user authentication and authorization made with MERN stack.

## backend ##
* The backend is developed using nodejs, Express and Mongodb as database.
* Basic Authentication (Register/Login with hashed password using bcryptjs).
* JWT Tokens : make requests with a token after login with Header "Authorization" with value "Bearer yourToken".
* You can access the backend RESTapi using this [link](https://mernbackend-mao3.onrender.com "backend")
**METHODS**
Description      | HTTP Method   | URL               |Payload      |Response     |
-------------    | ------------- | -------------     |-------------|-------------|
user information | GET           | /api/users/me     |||
Login            | POST          | /api/users/login  |||
Register         | POST          | /api/users/       |||
Create goals     | GET           |/api/goals         |||
Update goal      | PUT           | /api/goals/id     |||
Delete goal      | POST          | /api/goals/id     |||

## frontend ##
* The frontend is developed using react.
* It is made into single page application using react router dom.
* The routes are protected until the user is authenticated.
* Click [here](https://premforreal.github.io/mern-Goals/ "backend") to visit the website.
------
### dashboard ###
<img src="dashboard.png" alt="dashboard" width="500"/>

------
### login ###
<img src="login.png" alt="dashboard" width="500"/>

------
### register ###
<img src="register.png" alt="dashboard" width="500"/>

------
