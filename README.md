# WeLoveMovies

Render (BE): https://befinal-capstone-welovemovies-solution.onrender.com/movies

Render (FE) : https://starter-movie-front-end-h5f7.onrender.com/

## Overview

You've been hired on as a backend developer for a new startup called WeLoveMovies! As another developer works on the design and frontend experience, you have been tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.
Built using:
  - PostgreSQL
  - Node.js
  - Express.js
  - Knex.js

Tasks to complete:

  -  Install and use common middleware packages.
  -  Receive requests through routes.
  -  Run tests from the command line.
  -  Access relevant information through route and query parameters.
  -  Create an error handler for the case where a route does not exist.
  -  Build an API following RESTful design principles.
  -  Create and customize a knexfile.js file.
  -  Create a connection to your database with Knex.
  -  Write database queries to complete CRUD routes in an Express server.
  -  Return joined and nested data with Knex.
  -  Write database migrations using Knex's migration tools.
  -  Deploy your backend server to a cloud service. It's not necessary to deploy the frontend.
## Routes

The following routes and methods are available:

### Movies

#### `/movies`

- `GET` returns all columns for each movie in the database

#### `/movies?is_showing=true`

- `GET` returns all columns for each movie in database that is currently showing

#### `/movies/:movieId`

- `GET` returns all columns for requested movie

#### `/movies/:movieId/theaters`

- `GET` returns all columns for theater where the requested movie is playing

#### `/movies/:movieId/reviews`

- `GET` returns all columns, including detailed critic data, for each review of the requested movie

### Reviews

#### `/reviews/:reviewId`

- `PUT` updates data for requested review and returns all columns for that review including updated and detailed critic data

* `DELETE` deletes requested review from database

### Theaters

#### `/theaters`

- `GET` returns all columns for each theater in the database with detailed movie data for each movie showing at that theater

### To run locally

1. Run `npm install`
2. Copy `.env.sample` and add db urls to `.env`
3. Run `npm run start:dev`

### To run and deploy via Render:
1. Make sure git repository is connected to render
2. Make sure all postgre db is live and tables are correctly migrated and seeded
3. Make sure to add all env environments: 

    DEVELOPMENT_DATABASE_URL 

    NODE_ENV

    NODE_VERSION

    PRODUCTION_DATABASE_URL



