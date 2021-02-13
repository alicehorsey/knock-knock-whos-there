const jokeRouter = require("express").Router();
const { getAllJokes, getJokeById } = require("../controllers/jokes_controller")

jokeRouter.route("/")
    .get(getAllJokes);

jokeRouter.route("/:jokeId")
    .get(getJokeById);

module.exports = jokeRouter;