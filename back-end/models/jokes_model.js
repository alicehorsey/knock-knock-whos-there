const connection = require("../database/connect");

const fetchAllJokes = () => {
    return connection
        .select("*")
        .from("jokes_table")
        .then((jokesRows) => {
            return { jokes: jokesRows };
        })
}

const fetchJokeById = (joke_id) => {

    return connection
        .select("*")
        .from("jokes_table")
        .where("id", "=", joke_id)
        .then((joke) => {
            if (!joke.length) {
                return Promise.reject({ status: 404, msg: "Not Found" });
            } else {
                return { joke: joke[0] };
            }
        })
}


module.exports = { fetchAllJokes, fetchJokeById };