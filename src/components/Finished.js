import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gameFinished } from '../lib/game'
import NewGameButton from './NewGameButton'

export class Finished extends PureComponent {
  static propTypes = {
    hide: PropTypes.bool
  }

  handleClick = () => {
    this.props.newGame()
  }

  render() {
    if (this.props.hide) return null

    return (
      <div className="Finished">
        <div className="dialog">
          <h1>Well Done!</h1>
          <p>Congrats on finishing the game!</p>
          <div className="actions">
            <NewGameButton label="Play again!" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ word }) => ({
  hide: !gameFinished(word)
})

export default connect(mapStateToProps)(Finished)
