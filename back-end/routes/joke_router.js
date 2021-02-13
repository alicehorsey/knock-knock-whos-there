const jokeRouter = require("express").Router();

jokeRouter.use("/", getAllJokes)
jokeRouter.use("/:jokeId}", getJokeById)

module.exports = jokeRouter;