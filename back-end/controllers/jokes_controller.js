const jokeRouter = require("../routes/joke_router");
const { fetchAllJokes, fetchJokeById } = require("../models/jokes_model");

const getAllJokes = (req, res, next) => {

    fetchAllJokes().then((jokes) => {
        res.status(200).send(jokes);
    }).catch(next)
}

const getJokeById = (req, res, next) => {
    const joke_id = req.params.jokeId;

    fetchJokeById(joke_id).then((joke) => {
        res.status(200).send(joke);
    }).catch(next)
}

module.exports = { getAllJokes, getJokeById };