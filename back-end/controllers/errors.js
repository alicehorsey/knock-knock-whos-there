const handleCustomErrors = (err, req, res, next) => {
    err.status ? res.status(err.status).send({ msg: err.msg }) : next(err);
}

const handleInternalErrors = (err, req, res, next) => {
    res.status(500).send({ msg: "Internal Server Error" });
}

const send404 = (req, res, next) => {
    res.status(404).send({ msg: "Not Found" });
}

module.exports = { handleInternalErrors, handleCustomErrors, send404 };