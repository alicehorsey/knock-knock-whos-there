const jokeRouter = require("express").Router();
const { getAllJokes } = require("../controllers/jokes_controller")

jokeRouter.route("/")
    .get(getAllJokes)
// jokeRouter.use("/:jokeId}", getJokeById)

module.exports = jokeRouter;