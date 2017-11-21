export const CREATE_NOTE = 'CREATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const SHOW_NOTES = 'SHOW_NOTES'
export const EDIT_NOTE  = 'EDIT_NOTE'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const showNotes = notes => ({
  type: SHOW_NOTES,
  notes
})

export const createNote = note => ({
  type: CREATE_NOTE,
  note
 
})
export const editNote = note => ({
  type: EDIT_NOTE,
  note,

})

export const deleteNote = note => ({
  type: DELETE_NOTE ,

  
})

export const toggleModal = () => ({
  type: TOGGLE_MODAL 
})