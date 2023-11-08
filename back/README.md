# Alten Shop API

## Contents

1. [General information](#General-information)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Author](#author)

## General information

This Back-End is a product API developped in ExpressJS for alten-shop project

## Technologies

This project is developed in **ExpressJS and Typescript**.

**Main libraries used:**

- ExpressJS
- Typescript
- Prisma and prisma client : to connect and manage database (ORM)
- Mysql: The database is managed on mysql and workbench
- Postman : tests on API was made on Postman

### Other miscellaneous libraries

- dotenv
- nodemon and concurrently to ease dev

## Installation

### To start a project

- Clone this repository, go inside back
  Run the npm i command and run build command

- Configure the .env file (to be added in gitignore) - see .env.sample

- Create mysql database and call it 'alten'.
  run npx prisma migrate dev --name init
  You can seed it with npm run seed command

- Run npm run dev command

- Open (http://localhost:5000) with a browser to see the result.

### List of commands and their meaning

    npm run build : Initialization of the backend and typescript
    npm run dev : Start the development server
    npm run seed : Delete all data from the database and inject the data in the prisma/data.js file into the database
