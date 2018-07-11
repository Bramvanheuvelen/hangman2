import { randomWord } from '../lib/game'

export const newGame = () => {
  return {
    type: 'NEW_GAME',
    payload: randomWord()
  }
}

export const makeGuess = (letter) => {
  return {
    type: 'MAKE_GUESS',
    payload: letter
  }
}
