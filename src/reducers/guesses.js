export const MAKE_GUESS = 'MAKE_GUESS'
export const NEW_GAME = 'NEW_GAME'

export default (state =  [], { type, payload } = {}) => {
  switch (type) {
  case NEW_GAME:
    return state = []
  case MAKE_GUESS:
    return [...state].concat(payload)
  default:
    return state
  }
}
