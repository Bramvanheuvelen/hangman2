export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export const newGame = Word => {
  return {
    type: NEW_GAME,
    payload: Word
  }
}

export const makeGuess = guess => {
  return {
    type: MAKE_GUESS,
    payload: guess
  }
}
