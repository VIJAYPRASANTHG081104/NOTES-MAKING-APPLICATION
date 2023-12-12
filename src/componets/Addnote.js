import React, { useState } from 'react'
const Addnote = ({handleAddNote}) => {
    //setting the note intitially as 'empty';
    const [note,setnote] = useState("")
    const handlechange = (event) =>{
        //used to get the characters form the form
        if(remainingcharacter - event.target.value.length>=0){
            setnote(event.target.value);//updating the characters and storing it in note
    }
    } 
    const handleSaveSubmit =() =>{
        if(note.trim().length>0){ //removes empty space
            //handleaddNote is used to store the note(which is taken as an input in handlechange function), 
            handleAddNote(note);
        }
        setnote("");//making it default
    }
    const remainingcharacter = 1000;
    const leftchar = note.length;
  return (
    <div className='note new'>
        <textarea 
        rows={8}
        cols={10}
        placeholder='Enter your text after adding the title'
        value={note}
        onChange={(event) => handlechange(event)}
        ></textarea>
        <div className='notes-footer'>
            <small>Remaining words {remainingcharacter - leftchar}</small>
            <button className='save' onClick={handleSaveSubmit}>Save</button>
        </div>
    </div>
  )
}

export default Addnote