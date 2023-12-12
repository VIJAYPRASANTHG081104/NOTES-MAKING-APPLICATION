import React, { useEffect } from 'react'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import NotesList from './componets/NotesList'
import Search from './componets/Search'
import Header from "./componets/Header.js"

const App = () => {
  const [notes, setnotes] = useState(
    JSON.parse(localStorage.getItem('react-notes-app-data'))||[]);

  const [darkMode, setdarkMode] = useState(localStorage.getItem('darkmode')==='true');

  const [seachtext,setseachttext] =useState('')

  useEffect(() =>{
    localStorage.setItem('darkmode',darkMode)
  },[darkMode])   

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);
  

  const addNote = (note) =>{
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: note,
        date: date.toLocaleDateString(),
      }
      console.log("hello vijay");
      //this newnote creates a new array with the elements in notes + newNote ',' is used to apped the element
      const newnote = [...notes,newNote];
      setnotes(newnote);
  }
  const deleteNote = (id) => {
    //it just filter elements and update to notes array
    const newNote1 = notes.filter((note) => note.id !== id)//note.id is the id present in the notes array where it is compared to the id of that element
    setnotes(newNote1)
  }

  return (
    <div className={`${(Boolean(darkMode) && 'dark-mode') || 'light-mode'}`}>

      <div className='container'>
      <Header handleToggle={setdarkMode}/>
      <Search handlesearch={setseachttext}/>
      <NotesList 
      notes={notes.filter((note)=> note.text.includes(seachtext))}
      key={""} 
      handleAdd={addNote} 
      handleDelete={deleteNote}/>
    </div>
    </div>
  )
}

export default App 