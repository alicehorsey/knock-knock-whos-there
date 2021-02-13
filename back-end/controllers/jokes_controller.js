const jokeRouter = require("../routes/joke_router");
const { fetchAllJokes } = require("../models/jokes_model");

const getAllJokes = (req, res, next) => {
    console.log("in controller")
    fetchAllJokes().then((jokes) => {
        res.status(200).send(jokes)
    })
}

module.exports = { getAllJokes };