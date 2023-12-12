import React from 'react'
import notespad from './images/notepad.png'

const Header = ({handleToggle}) => {
  return (
    <div className='header'>
      <div style={{display:"flex"}}>
        <img src={notespad} width={50} height={50} style={{marginTop:"15px"}}/>
      <h1 className='logo'>NONotes</h1>
      </div>
        <button onClick={
            ()=>handleToggle(
                (prevdark) => !prevdark
            )} className='save'>Mode</button>
    </div>
  )
}

export default Header