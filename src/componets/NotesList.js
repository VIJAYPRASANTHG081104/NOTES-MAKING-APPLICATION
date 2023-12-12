import React from 'react'
import Note from './Note'
import Addnote from './Addnote'
const NotesList = ({notes,handleAdd,handleDelete,handleEdit}) => {
  return (
    <div className='notes-list'>
        {notes.map((note)=>
        <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeletenote={handleDelete}/>
        )}
        <Addnote handleAddNote={handleAdd}/>
    </div>
  )
}

export default NotesList