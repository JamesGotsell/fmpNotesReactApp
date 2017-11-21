import {  CREATE_NOTE } from '../actions'

const notes = (state = [], action) => {
  switch (action.type) {

    case CREATE_NOTE: 
        return [...state, action.note]

    default:
      return state
  }
}

export default notes