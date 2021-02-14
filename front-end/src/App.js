import './App.css';
import React, { Component } from 'react';
import { Loading, Title } from "./components";
import { getAllJokes } from "./api";


class App extends Component {
  state = {
    isLoading: true,
    totalJokes: 0,
    isShowingTellJokeButton: true,
    isShowingPunchlineButton: false,
    isShowingNextButton: false,
    joke: {}
  }

  //this function randomly generates a number between 0 and the maximum number it is given as an argument.
  createRandomNumber = (maxNum) => Math.floor(Math.random() * maxNum + 1);

  componentDidMount = () => {
    getAllJokes().then((jokes) => {

      const numberOfJokes = jokes.length;
      const firstJokeId = this.createRandomNumber(numberOfJokes);

      this.setState({ totalJokes: numberOfJokes, joke: jokes[firstJokeId], isLoading: false })
    })
  }

  handleTellJokeClick = () => {
    this.setState({ isShowingTellJokeButton: false, isShowingPunchlineButton: true })
  }

  handlePunchlineClick = () => {
    this.setState({ isShowingPunchlineButton: false, isShowingNextButton: true })
  }

  handleNextClick = () => {
    console.log("next click")
  }

  render() {
    const { isLoading, isShowingTellJokeButton, isShowingPunchlineButton, isShowingNextButton, joke } = this.state;

    if (isLoading) {
      return (
        <Loading />
      )
    } else if (isShowingTellJokeButton) {
      return (
        <div className="App">
          <Title />
          <button className="tellJokeButton" onClick={this.handleTellJokeClick}>Tell Me A Joke!</button>
        </div>
      );
    } else if (isShowingPunchlineButton) {
      return (
        <div className="App">
          <Title />
          <h2>{joke.setup}</h2>
          <button className="tellPunchlineButton" onClick={this.handlePunchlineClick}>Reveal punchline!</button>
        </div>
      );
    } else if (isShowingNextButton) {
      return (
        <div className="App">
          <Title />
          <h2>{joke.setup}</h2>
          <h2>{joke.punchline}</h2>
          <button className="tellPunchlineButton" onClick={this.handleNextClick}>Next Joke!</button>
        </div>
      );
    }
  }
}

export default App;

