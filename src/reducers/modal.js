
import { TOGGLE_MODAL } from '../actions'

const modal = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

export default modal