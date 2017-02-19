# A REST Primer in NodeJS

This is a demonstration of implementing a REST api in NodeJS using express middleware.
We will create a REST api application that will work with a MySQL backend and provide a REST interface to the outside world to do CRUD on an Employee database.
The following is the layout of the application and is representative of most REST api implementations.
## Model
### /models/ directory
Employee is the model class and is designed simply with each employee having a name and a title. It exposes the following functions to the outside world
1. getAllEmployees
2. getEmployeeById
3. addEmployee
4. deleteEmployee
5. updateEmployee
6. deleteAll

## Routes
### /routes/ directory
Employee routes will provide a url mapping wrapper on top of the Employee model class. The standard REST api standard dictatest the following url mappings.

1. GET    - http://localhost:3000/employees     - get all employees
2. GET    - http://localhost:3000/employees/1   - get the employee with this id
3. DELETE - http://localhost:3000/employees/1 	- delete the employee with this id
4. POST   - http://localhost:3000/employees    	- create a new employee (with data in HTTP request body)
5. PUT    - http://localhost:3000/employees/1 	- update the employee with this id (with data in HTTP request body)

## DB
## db.js
The DB class connects to the mySQL database and provides connections to the application.
I run a docker container of mySQL as the backend database, you can connect to a standalone as well by providing the config.


## Express application
## app.js
We instantiate an instance of that class that facilitates us in developing the API by providing the following elements
1. route mapping with the 'use' api that will map an endpoint to a particular route handler
2. body-parser that will be used to convert the body of the HTTP request and response into JSON format
3. additional chaining methods to add more handlers on request or response

## Output

## GET all employees


## GET a particular employee

## POST a new employee

## PUT and update a particular employee

## DELETE an employee

## Another POST for a new employee

## Verify employee in DB



