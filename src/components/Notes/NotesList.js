 /* eslint-disable-line no-lone-blocks */
import React from 'react'
import * as actions from '../../actions'; 
import NotesListItem from './NoteListItem'

const  NotesList = ({notes=[] }) => {
    
          { 
          return notes.map( (note , i)  => {
              if (notes.length > 0) {
              return (
                <div>
                      <NotesListItem 
                          text={note.text} 
                          title={note.title}
                          id={i+1} 
                        />
                </div>
              )
           } else {
                 return null;
          }
        })
      } 
  
  }
  
  export default NotesList