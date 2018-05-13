import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'
import { randomWord, showGuess, wrongGuessCount, wrongGuessLimit, isWinner, gameFinished } from '../lib/game'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A letter was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Board">
      <button className="NewGameButton" onClick={this.handleClick.bind(this)}>New Game</button>
      <form onSubmit={this.handleSubmit}>
        <label>
          Type a letter:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enter" />
      </form>
      <div className="ShowGuess">{showGuess(this.props.word, this.props.guesses)}</div>
      <div className="wrongGuessCount">{wrongGuessCount(this.props.word, this.props.guesses)}</div>
      <div className="Finished">
          <div lose>{wrongGuessLimit(this.props.word, this.props.guesses)</div
          <div win>{isWinner(this.props.word, this.props.guesses)}
      </div>
      </div>
    );




  }
}

const mapStateToProps = state => {
  return {
    word: state.word,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(Board)
