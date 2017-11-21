import {  SHOW_NOTES, DELETE_NOTE, CREATE_NOTE } from '../actions'


const byId = (note_a, note_b) => {
  if (note_a.id < note_b.id) return -1
  if (note_a.id > note_b.id) return 1
  return 0
}

const notes = (state = [], action) => {
  switch (action.type) {
    case SHOW_NOTES:
      return [...state, ...action.notes].sort(byId)

    case CREATE_NOTE: 
        return [...state, action.note]
        
    case DELETE_NOTE :
      return [...state, action.note].sort(byId)

    default:
      return state
  }
}

export default notes