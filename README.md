# ClientsAPP
Easy CRUD of Clients

## About the project
Application that allows you to realize a CRUD of CLients on a mongoDB Database
### Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [React](https://es.react.dev/)


## Getting Started

Alternatively, to get a local copy up and running follow these simple steps.

### Prerequisites
* MongoDB Community
	* Follow this [installation steps](https://www.mongodb.com/try/download/community).
* MongoDBCompass 
    * Follow this[installation steps](https://www.mongodb.com/try/download/compass).

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Vogeln7/clientsReactApp.git
   cd clientsReactApp
   ```
2. There will be two folders, one called `server` and another called `client`.
We are going to enter each of them with a terminal (two different terminals) it can be the terminal of your operating system or in my case of VsCode
   ```sh
   cd client
   ```   
   ```sh
   cd server 
   ``` 
3. In each of these terminals we are going to install the dependencies of the project.
   ```sh
   npm install
   ```

4. In the root directory there is a file with a .json extension that has the exported clientsApp database to be able to use it.

5. Create a new connection in MongoDB Compass, create a new database and a new collection with the name you want.
   
6. Now you have to import the collection data from the file:
--clientsApp.clients.json

7. Configure in the root folder your `.env` file following the `.env.example` provided in server folder
   ```js

       (In mongoDb compass you can get your connection string by clicking the three dots next to localhost:27017 and clicking copy connection string)

	   DB_URL='mongodb://localhost:27017/clientsApp' {This is the default connection to a database in mongoDB, the port it uses is 27017, the host is localhost and the collection is clientsApp} 
       URL='http://localhost:5001' {This is the url and the port where express initialize the server in the backend}
       SERVER_PORT=5001 {The number of the port user by the express server saved on a constant}
		
   ``` 
8. Configure in the client folder your `.env` file following the `.env.example` provided
```js


	   REACT_APP_BACKEND_URL='http://localhost:5001' {This is the url of the backend for my case, if you change the port yo need to edit this, example: you use port 3001 thn your url will be 'http://localhost:3001'}
		
   ``` 

9. That's it! once you hace your have your .env file in each folder (don't forget to delete de .example from the .dev.example file) we are going to enter on server folder and execute the server.
 ```
   sh
   cd server
   npm start
   ``` 

10. Once our server is up, we go to the open terminal for the client and execute the following command:

   ```
   sh
   cd client
   npm start
   ``` 
11 Done! the last command should run the ClientsCRUD App created in React.


## Authors

- [@DavidVogel](https://www.github.com/Vogeln7)
