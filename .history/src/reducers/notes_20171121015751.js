import {  DELETE_NOTE, CREATE_NOTE } from '../actions'




const notes = (state = [], action) => {
  switch (action.type) {

    case CREATE_NOTE: 
        return [...state, action.note]
        
    // case DELETE_NOTE :
    //   return [...state, action.note].sort(byId)

    default:
      return state
  }
}

export default notes