import './App.css';
import React, { Component } from 'react';
import { Loading, Title } from "./components";
import { getAllJokes, getJokeById } from "./api";
import haha from "./images/funny-hahaha.png";

class App extends Component {
  state = {
    isLoading: true,
    totalJokes: 0,
    displayTellJokeButton: true,
    displayPunchlineButton: false,
    displayNextButton: false,
    joke: {},
    jokesShown: null,
  }

  //this function randomly generates a number between 0 and the maximum number it is given as an argument.
  createRandomNumber = (maxNum) => Math.floor(Math.random() * maxNum + 1);


  componentDidMount = () => {
    getAllJokes().then((jokes) => {

      const numberOfJokes = jokes.length;
      const firstJokeId = this.createRandomNumber(numberOfJokes);

      this.setState({ totalJokes: numberOfJokes, joke: jokes[firstJokeId - 1], isLoading: false, jokesShown: [firstJokeId] })
    })
  }

  handleTellJokeClick = () => {
    this.setState({ displayTellJokeButton: false, displayPunchlineButton: true })
  }

  handlePunchlineClick = () => {
    this.setState({ displayPunchlineButton: false, displayNextButton: true })
  }

  //This function is to check that we don't randomly generate the same joke multiple times.
  generateNextJokeId = () => {
    const proposedNextJokeId = this.createRandomNumber(this.state.totalJokes);

    return !this.state.jokesShown.includes(proposedNextJokeId) ? proposedNextJokeId : this.generateNextJokeId();
  }

  //This function lines up the next joke, making sure that that randomly generated joke id has not been seen before.
  handleNextClick = () => {
    const nextJokeId = this.generateNextJokeId();

    getJokeById(nextJokeId).then((nextJoke) => {

      this.setState((prevState) => ({
        joke: nextJoke,
        jokesShown: [...prevState.jokesShown, nextJokeId],
        displayNextButton: false,
        displayPunchlineButton: true
      })
      )
    })
  }

  //This function gets any random number and resets the jokesShown array to remove all previously shown jokes to start the app from the beginning again.
  handleRefreshClick = () => {
    const refreshedFirstJokeId = this.createRandomNumber(this.state.totalJokes);

    getJokeById(refreshedFirstJokeId).then((nextJoke) => {
      this.setState({
        joke: nextJoke,
        jokesShown: [refreshedFirstJokeId],
        displayNextButton: false,
        displayPunchlineButton: true
      })
    })
  }


  render() {
    const { isLoading, displayTellJokeButton, displayPunchlineButton, displayNextButton, joke, totalJokes, jokesShown } = this.state;

    if (isLoading) {
      return (
        <div className="App">
          <Loading />
        </div>
      )
    } else if (displayTellJokeButton) {
      return (
        <div className="App">
          <Title />
          <h2>Welcome to Knock Knock Who's There! The best place to find the funniest jokes!</h2>
          <img src={haha} alt="Haha Bubble"></img>

          <h2>Click on the button below to start!</h2>
          <button className="tellJokeButton" onClick={this.handleTellJokeClick}>Tell Me A Joke!</button>
        </div>
      );
    } else if (displayPunchlineButton) {
      return (
        <div className="App">
          <Title />
          <h2 className="joke-setup">{joke.setup}</h2>
          <button className="tellPunchlineButton" onClick={this.handlePunchlineClick}>Reveal punchline!</button>
        </div>
      );
    } else if (displayNextButton) {

      //When we get to the end of all the jokes the Next Button changes to say Refresh to start from the beginning again.
      const isNext = jokesShown.length !== totalJokes;

      return (
        <div className="App">
          <Title />
          <h2 className="joke-setup">{joke.setup}</h2>
          <h2 className="joke-punchline">{joke.punchline}</h2>
          <p hidden={isNext}>We're sorry to say this is your last joke! Boooo! Click on the button to refresh!</p>
          <button className="nextButton" onClick={isNext ? this.handleNextClick : this.handleRefreshClick}>{isNext ? "Next Joke!" : "Refresh"}</button>
        </div>
      );
    }
  }
}

export default App;

