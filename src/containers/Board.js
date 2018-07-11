import React, { Component } from 'react'
import Letters from '../components/Letters'
import './Board.css'
import Hangman from '../components/Hangman'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'

export class Board extends Component {
  startNewGame = () => {
    this.props.newGame()
  }
  render(){
    return(
      <div className="Board">
        <button className="Button" onClick={ this.startNewGame }>New Word</button>
        <Hangman />
        <Letters />
      </div>
    )
  }
}

export default connect(null, { newGame })(Board)
