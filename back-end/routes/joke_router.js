const jokeRouter = require("express").Router();
const { getAllJokes } = require("../controllers/jokes_controller")

jokeRouter.use("/", getAllJokes)
// jokeRouter.use("/:jokeId}", getJokeById)

module.exports = jokeRouter;