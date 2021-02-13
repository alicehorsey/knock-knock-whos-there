const express = require("express");
const app = express();
const jokeRouter = require("./routes/joke_router");
const { handleInternalErrors, handleCustomErrors, send404 } = require("./controllers/errors");

app.use(express.json());
const localPort = 8080;
app.listen(localPort, () => {
    console.log(`Joke App Back End listening at http://localhost:${localPort}`);
})

app.use("/jokes", jokeRouter);
app.use("/*", send404);

app.use(handleCustomErrors);
app.use(handleInternalErrors);


module.exports = app;