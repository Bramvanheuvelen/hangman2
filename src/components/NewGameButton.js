import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'
import { randomWord } from '../lib/game'

export class NewGameButton extends PureComponent {
  static propTypes = {
    newGame: PropTypes.func.isRequired,
    label: PropTypes.string
  }

  handleClick = () => {
    this.props.newGame(randomWord())
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="NewGameButton"
      >
        { this.props.label || 'New Game' }
      </button>
    )
  }
}

export default connect(null, { newGame })(NewGameButton)
