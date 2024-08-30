const db = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const tableName = "reviews";

async function destroy(reviewId) {
  return db(tableName).where({ "review_id": reviewId }).del();
}

async function list(movie_id) {
  return db(tableName)
    .select("*")
    .where({ "movie_id": movie_id });
}

const addCritic = mapProperties({
  "critic_id": "critic.critic_id",
  "preferred_name": "critic.preferred_name",
  "surname": "critic.surname",
  "organization_name": "critic.organization_name",
  "created_at": "critic.created_at",
  "updated_at": "critic.updated_at"
});

async function listReviewAndCritics(movie_id){
  return db("reviews as r")
  .select(
    "r.review_id",
    "r.content",
    "r.score",
    "r.created_at",
    "r.updated_at",
    "r.critic_id",
    "r.movie_id",
    "c.critic_id",
    "c.preferred_name",
    "c.surname",
    "c.organization_name",
    "c.created_at as critic_created_at",
    "c.updated_at as critic_updated_at"
  )
  .join("critics as c", "r.critic_id", "c.critic_id")
  .where({ "r.movie_id": movie_id })
  .then((reviews) => reviews.map(addCritic));
  }

async function read(reviewId) {
  return db(tableName).select("*").where({"review_id": reviewId }).first();
}

async function readCritic(critic_id) {
  return db("critics").where({ critic_id }).first();
}

async function setCritic(review) {
  review.critic = await readCritic(review.critic_id);
  return review;
}

async function update(review) {
  return db(tableName)
    .where({ review_id: review.review_id })
    .update(review, "*")
    .then(() => read(review.review_id))
    .then(setCritic);
}

module.exports = {
  delete: destroy,
  list,
  read,
  update,
listReviewAndCritics
};
