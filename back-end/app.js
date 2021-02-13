const express = require("express");
const app = express();
const jokeRouter = require("./routes/joke_router");

app.use(express.json());
const localPort = 8080;

app.use("/jokes", jokeRouter);

app.listen(localPort, () => {
    console.log(`Joke App Back End listening at http://localhost:${localPort}`);
})

module.exports = app;