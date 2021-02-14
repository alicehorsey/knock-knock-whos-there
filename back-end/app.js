const express = require("express");
const app = express();
const cors = require("cors");
const { getAllJokes, getJokeById } = require("./controllers/jokes_controller")
const { handleInternalErrors, handleCustomErrors, send404 } = require("./controllers/errors");


app.use(cors())
app.use(express.json());
const localPort = 8080;
app.listen(localPort, () => {
    console.log(`Joke App Back End listening at http://localhost:${localPort}`);
})


//Add a "/" endpoint to just get a json back of the available endpoints here.
app.use("/jokes/:jokeId", getJokeById);
app.use("/jokes", getAllJokes);
app.use("/*", send404);

app.use(handleCustomErrors);
app.use(handleInternalErrors);


module.exports = app;