# employee-tracker

## Description 
I ran an npm i to require my inquirer and mysql files. I created query, seeds and schema.sql files to my repo to run my database and import the data into my javascript files. I also created an .env file to import my root user and password to run mysql.

Connections:
In my connections.js file I required my dotenv and mysql2 files to process my .env so that my information would not be shown publicly.

Server.js:
In server.js all of my functions were implemented to run my test. When node is ran the user is presented with a question to add, view or updated employee information. I used the switch case methods to answer the prompt questions and to load my prompt again after each question was successfully entered. I added in a quit function to end the connection to the server if the user selects quit. 

