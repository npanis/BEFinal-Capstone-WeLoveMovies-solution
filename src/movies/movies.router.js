const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

// Movies Router
router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route("/:movieId([0-9]+)")
    .get(controller.read)
    .all(methodNotAllowed);

//Movie - Theater Route:
router.use("/:movieId([0-9]+)/theaters", theatersRouter);

//Movie - Reviews Route
router.use("/:movieId([0-9]+)/reviews", reviewsRouter);

module.exports = router;
