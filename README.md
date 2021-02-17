# Knock Knock Who's There
Knock Knock Who's There is a new web application, built using Node.js, Express and React, where you can enjoy lots of classic jokes at the press of a button!

The jokes for this project have come from https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json.

## Installation
To view this web application on your local machine please follow these steps, after cloning the project down from the GitHub website.

### Dependencies
* I built this project using node v14.15.4.
* This project also requires Postgres to be installed on your machine as it uses a PostgreSQL database. I have PostgreSQL 13 which is set up to run on port 5432.

To install Postgres please follow this link to the Postgres installation website for more details. https://www.postgresql.org/
Once on the Postgres site you can click on the button called ```Download->``` and follow the instructions for your operating system.

I created this project on MacOS and would recommend using Homebrew to install Postgres. The link to Homebrew is here https://brew.sh/.

If using Linux you will need to set the username and password for Postgres once installation has completed. Follow this command exchanging username for your Linux username and choosing a password in place of your password (this must be wrapped in quotation marks and the command should end with a ```;```) 
In your terminal run ```psql``` followed by ```ALTER USER username WITH PASSWORD 'yourpassword';```. You can exit out of psql by typing ```\q```.

### Installation Instructions

1. In the terminal navigate to the ```knock-knock-whos-there``` folder then ```cd back-end``` into the back-end folder.

2. Create a knexfile.js at the root of the folder with the following code inside. If you are using Linux you will need to add your username and password (as set above) to the connection object.

```
const ENV = process.env.NODE_ENV || 'development';

const development = {
    client: 'pg',
    connection: {
        database: 'joke_app'
    },
    seeds: {
        directory: './database/seeds'
    }
}

const dbConfig = {
    development
}

module.exports = dbConfig[ENV];
```
3. In your terminal (still in the back-end folder) ```npm install``` to install all dev dependencies into the back-end part of the project.
4. Run ```npm run seed-database``` to create and seed the database. There will be a confirmation in the terminal to confirm that the jokes have been inserted into the database.
5. Run ```node app.js``` to serve the app onto https://localhost:8080.
NB: If you are unable to use port 8080 you can change the number of the port in the back-end app.js file on line 10.

At this point the back-end is all set up and running.

6. Open a second terminal window and ```cd front-end``` into the front-end folder.
7. Run ```npm install``` to install all dev dependencies into the front-end part of the project.
8. Run ```npm start``` to start the React app on https://localhost:3000 and navigate to the page on your browser.

I hope you enjoy the jokes!

## Back-end Endpoints
The back-end of the project has 2 endpoints as follows;
1. ```/jokes```
which serves an array of joke objects from the database.
Example:
```
{
  "jokes": [
    {
      "id": 1,
      "type": "general",
      "setup": "What did the fish say when it hit the wall?",
      "punchline": "Dam."
    },
    {
      "id": 2,
      "type": "general",
      "setup": "How do you make a tissue dance?",
      "punchline": "You put a little boogie on it."
    },
    {
      "id": 3,
      "type": "general",
      "setup": "What's Forrest Gump's password?",
      "punchline": "1Forrest1"
    },
  ]
}
```
2. ```/jokes/:jokeId``` which serves a joke object for the requested id.
Example:
```
{
  "joke": {
    "id": 1,
    "type": "general",
    "setup": "What did the fish say when it hit the wall?",
    "punchline": "Dam."
  }
}
```

## Back-end Tests
To run the tests for the back-end part of the project run ```npm run test``` from the back-end folder.


