# mern-Goals
A simple CRUD application with user authentication and authorization made with MERN stack.

## backend ##
* The backend is developed using nodejs, Express and Mongodb as database.
* Basic Authentication (Register/Login with hashed password using bcryptjs).
* JWT Tokens : make requests with a token after login with Header "Authorization" with value "Bearer yourToken".
* You can access the backend RESTapi using this [link](https://mernbackend-mao3.onrender.com "backend")
* The api endpoints for **user login**:

Purpose       | Method        | End point |
------------- | ------------- | ------------- |
credentials   | GET           | https://mernbackend-mao3.onrender.com/api/users/me |
Login         | POST          | https://mernbackend-mao3.onrender.com/api/users/login  |
Register      | POST          | https://mernbackend-mao3.onrender.com/api/users/  |
* The api endpoints for **user data**:

Purpose       | Method        | End point |
------------- | ------------- | ------------- |
Create goals  | GET           | https://mernbackend-mao3.onrender.com/api/goals    |
Update goal   | PUT           | https://mernbackend-mao3.onrender.com/api/goals/id |
Delete goal   | POST          | https://mernbackend-mao3.onrender.com/api/goals/id |

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





<details>
    <summary>📁 Backend</summary>
    <p>
		<details>
    		<summary>📁Config</summary>
			<p>
				db.js
			</p>
		</details>
	</p>
	<p>
		<details>
    		<summary>📁Controllers</summary>
			<p>
					goalController.js
			</p>
			<p>
					userController.js
			</p>
		</details>
	</p>
	<p>
		<details>
    		<summary>📁Middleware</summary>
			<p>
					authMiddleware.js
			</p>
			<p>
					errorMiddleware.js
			</p>
		</details>
	</p>
	<p>
		<details>
    		<summary>📁Models</summary>
			<p>
					goalModel.js
			</p>
			<p>
					userModel.js
			</p>
		</details>
	</p>
	 <p>
		<details>
    		<summary>📁Routes</summary>
			<p>
					goalRoutes.js
			</p>
			<p>
					userRoutes.js
			</p>
		</details>
	</p>
</details>
<details>
    <summary>📁 Frontend</summary>
    <p>Content 1 Content 1 Content 1 Content 1 Content 1</p>
</details>
