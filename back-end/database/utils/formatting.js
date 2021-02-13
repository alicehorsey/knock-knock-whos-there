//formatJokeData removes the id key from every object in the joke data array so that that key can be automatically generated during the seeding process of the data into the database.

const formatJokeData = (jokeData) => {
    return jokeData.map(({ id, ...restOfJokeData }) => {
        const newJokeData = { ...restOfJokeData }
        return newJokeData;
    })
}

module.exports = { formatJokeData }