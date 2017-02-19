Welcome to the node-rest-primer wiki!
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

### DB Docker instructions
If you have a DB already then skip to the next section "Express application"

For my example I connect to a docker mysql container that I run on my machine.
You can connect to a standalone server as well by providing the right config.

For mysql docker setup
* Download the mysql docker image
* Run this command to start mysql initially
* The -v option is to create a volume and store data on your hard-disk 
* The next time the container starts it will load data from that store.

`docker run --name mysql -v //s/mysqldata:/var/lib/mysql -e MYSQL_USER=mysql -e MYSQL_PASSWORD=mysql -e MYSQL_ROOT_PASSWORD=root -it -p 3306:3306 mysql`

* Use this command for stopping the container

`docker stop mysql`

* From the next time you may use the following command to start mysql again

`docker start mysql`

Enter in interactive mode to your mysql container using this command

`docker exec -it mysql mysql -uroot -p`

### output - mysql
The following snapshot explains the table details
![mysql](https://github.com/spkash-co-in/nodejs-primer/blob/master/mysqlCapture.JPG)



## Express application
## app.js
We instantiate an instance of that class that facilitates us in developing the API by providing the following elements
1. route mapping with the 'use' api that will map an endpoint to a particular route handler
2. body-parser that will be used to convert the body of the HTTP request and response into JSON format
3. additional chaining methods to add more handlers on request or response

## Output

## GET all employees
### Request

![getAll Request](https://github.com/spkash-co-in/node-rest-primer/blob/master/getAllCapture.JPG)

### Response

![getAll Result](https://github.com/spkash-co-in/node-rest-primer/blob/master/getAllResult.JPG)

## GET a particular employee
### Request

![get Id](https://github.com/spkash-co-in/node-rest-primer/blob/master/getIdCapture.JPG)

### Response

![get Id Result](https://github.com/spkash-co-in/node-rest-primer/blob/master/getIdResult.JPG)


## POST a new employee
### Request

![post Request](https://github.com/spkash-co-in/node-rest-primer/blob/master/postCapture.JPG)

### Response

![post Response](https://github.com/spkash-co-in/node-rest-primer/blob/master/postResponse.JPG)

## Check the list of employees now

![getAll after post](https://github.com/spkash-co-in/node-rest-primer/blob/master/getAllResult2.JPG)




## PUT and update a particular employee
### Request

![put Request](https://github.com/spkash-co-in/node-rest-primer/blob/master/putCapture.JPG)

### Response

![put Response](https://github.com/spkash-co-in/node-rest-primer/blob/master/putResponse.JPG)

### Now do a GET to see the change

![get After Put](https://github.com/spkash-co-in/node-rest-primer/blob/master/getAfterPut.JPG)

## DELETE an employee
### Request

![delete Request](https://github.com/spkash-co-in/node-rest-primer/blob/master/deleteCapture.JPG)

### Response

![delete Response](https://github.com/spkash-co-in/node-rest-primer/blob/master/deleteResponse.JPG)

## Check the list of employees now

![get After Delete](https://github.com/spkash-co-in/node-rest-primer/blob/master/getAfterDelete.JPG)

## Another POST for a new employee

## Request

![another post](https://github.com/spkash-co-in/node-rest-primer/blob/master/postDBrequest.JPG)

## Verify employee in DB

![in the DB](https://github.com/spkash-co-in/node-rest-primer/blob/master/dbpost.JPG)



