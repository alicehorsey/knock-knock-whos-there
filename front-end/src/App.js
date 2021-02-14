import './App.css';
import React, { Component } from 'react';
import { Loading } from "./components";
import { getAllJokes } from "./api";


class App extends Component {
  state = {
    isLoading: false,
    totalJokes: 0,
    showTellJokeButton: true,
    showPunchlineButton: false,
    showNextJokeButton: false,
    currentJoke: {},
    jokesShown: []
  }

  componentDidMount = () => {
    getAllJokes().then((jokes) => {
      console.log(jokes, "in app.js line 20")
    })
  }




  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <Loading />
      )
    }

    return (
      <div className="App">
        <h1>Knock Knock Who's There?</h1>

      </div>
    );
  }
}

export default App;

