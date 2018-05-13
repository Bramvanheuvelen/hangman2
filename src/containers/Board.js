import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'
import { showGuess, wrongGuessCount, wrongGuessLimit, isWinner } from '../lib/game'

class Board extends PureComponent {
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Type a letter:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enter" />
      </form>
      <div className="ShowGuess">{showGuess(this.props.word, this.props.guesses)}</div>
      <div className="wrongGuessCount">{wrongGuessCount(this.props.word, this.props.guesses)}</div>
      <div className="Finish">
          <div className="lose">{wrongGuessLimit(this.props.word, this.props.guesses) && "LOSE!"}</div>
          <div className="win">{isWinner(this.props.word, this.props.guesses) && "WIN!"}</div>
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
