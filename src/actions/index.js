export const CREATE_NOTE = 'CREATE_NOTE'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

export const createNote = note => ({
  type: CREATE_NOTE,
  note
 
})


export const toggleModal = () => ({
  type: TOGGLE_MODAL 
})