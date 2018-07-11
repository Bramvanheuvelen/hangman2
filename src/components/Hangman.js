import React, { Component } from 'react'
import { showGuess, wrongGuessCount, gameFinished, isWinner, wrongGuessLimit } from '../lib/game'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'

class Hangman extends Component {
  render(){
    const { game, guesses, newGame } = this.props
    const lettersGuessed = guesses.join(",")
    const numberOfWrongs = wrongGuessCount(game, guesses)
    let words = showGuess(game,guesses)

    if(gameFinished)
      if(isWinner(game, guesses))
        words = ('Congratulations you won!')
      else if (wrongGuessLimit(game, guesses))
        words = ('Ohh...You Lost!')

    if(!game)
      newGame()

    return(
      <div>
        <div className="Word">{ words } </div>
        <div className="Guesses">Letters already guessed: { lettersGuessed }</div>
        <div>Number of mistakes: { numberOfWrongs} / 6</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.game,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps, { newGame })(Hangman)
