DROP DATABASE IF EXISTS joke_app;
CREATE DATABASE joke_app;

\c joke_app;

CREATE TABLE jokes (
    id INT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    setup VARCHAR(255) NOT NULL,
    punchline VARCHAR(255) NOT NULL
);
