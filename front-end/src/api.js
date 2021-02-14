import axios from 'axios';

const localPort = 8080;
const jokesAPI = axios.create({ baseURL: `http://localhost:${localPort}` });


export const getAllJokes = () => {
    return jokesAPI.get(`http://localhost:${localPort}/jokes`).then(({ data }) => {
        return data.jokes;
    })
};

export const getJokeById = (jokeId) => {
    return jokesAPI.get(`http://localhost:${localPort}/jokes/${jokeId}`).then(({ data }) => {
        return data.joke;
    })
};

