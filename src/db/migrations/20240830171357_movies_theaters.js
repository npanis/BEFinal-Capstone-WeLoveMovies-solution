/*
The `movies_theaters` table is a join table that connects movies with theaters. It represents which movies are being shown in which theaters. It also includes a key that represents whether or not a movie is currently showing at the theater, or if it has in the past.

    - `movie_id`: (Foreign Key) A reference ID to a particular movie.
    - `theater_id`: (Foreign Key) A reference ID to a particular theater.
    - `is_showing`: (Boolean) A representation of whether or not the movie is currently showing in the referenced theater.
*/
exports.up = function(knex) {
    return knex.schema.createTable('movies_theaters', (table) => {
      table.increments("id").primary();
      table.integer('movie_id').unsigned().notNullable();
      table.integer('theater_id').unsigned().notNullable();
      table.boolean('is_showing').defaultTo(false);
      table.timestamps(true, true);
  
      // Define foreign keys
      table
        .foreign('movie_id')
        .references('movie_id')
        .inTable('movies')
        .onDelete('CASCADE');
  
      table
        .foreign('theater_id')
        .references('theater_id')
        .inTable('theaters')
        .onDelete('CASCADE');
  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies_theaters');
  };