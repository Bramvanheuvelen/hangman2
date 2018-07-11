import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

class Letters extends Component {

  updateLetter() {
    this.setState({
      letter: this.refs.letter.value
    })
  }

  newGuess() {
    this.props.makeGuess(this.state.letter)
    this.refs.letter.value = ""
  }

  render(){
    return(
      <div>
        <input
          type="text"
          ref="letter"
          placeholder="Type your letter"
          defaultValue=""
          onChange={this.updateLetter.bind(this)}
        />

        <div>
          <button className = 'typeButton' onClick={this.newGuess.bind(this)}>Guess</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { makeGuess })(Letters)
