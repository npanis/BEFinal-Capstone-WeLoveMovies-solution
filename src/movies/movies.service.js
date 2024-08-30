const db = require("../db/connection");

// LIST - GET all movies or get all movies if is_showing = true
async function list(is_showing) {
  return db("movies")
    .select("movies.*")
    .modify((queryBuilder) => {
      if (is_showing) {
        queryBuilder
          .join(
            "movies_theaters",
            "movies.movie_id",
            "movies_theaters.movie_id"
          )
          .where({ "movies_theaters.is_showing": true })
          .groupBy("movies.movie_id");
      }
    });
}

// READ - GET movie with movie_id
async function read(movie_id) {
  return db("movies").select("*").where({ movie_id: movie_id }).first();
}


module.exports = {
  list,
  read,
};
