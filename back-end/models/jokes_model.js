const connection = require("../database/connect");

const fetchAllJokes = () => {
    console.log("inside model")
    return connection
        .select("*")
        .from("jokes_table")
        .then((jokesRows) => {
            return { jokes: jokesRows }
        })

}

module.exports = { fetchAllJokes };