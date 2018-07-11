export const NEW_GAME = 'NEW_GAME'

export default (state = '', { type, payload }) => {
  switch (type) {
  case NEW_GAME:
    return payload
  default:
    return state
  }
}
