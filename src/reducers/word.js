import { NEW_GAME } from '../actions/types.js'

export default (state = '', action) => {
  switch (action.type) {
    case NEW_GAME:
      return action.payload
    default:
      return state
  }
}
