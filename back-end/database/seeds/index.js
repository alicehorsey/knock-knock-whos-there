const jokeData = require("../data/joke-data.json")
const { formatJokeData } = require("../utils/formatting")

exports.seed = (connection) => {

    const formattedJokeData = formatJokeData(jokeData)

    return connection
        .insert(formattedJokeData)
        .into("jokes_table")
        .returning("*")
        .then((jokesRows) => {
            console.log(`${jokesRows.length} jokes inserted into jokes table in database`)
        })
}




