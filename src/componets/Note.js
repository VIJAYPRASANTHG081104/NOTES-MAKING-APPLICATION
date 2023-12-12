import React from 'react'
import {MdDeleteForever} from "react-icons/md"
const Note = (props) => {
  return (
    <div className='note' id={props.id}>
        <span>{props.text}</span>
        <div className='notes-footer'>
            <small>{props.date}</small>
            <MdDeleteForever onClick={(_id) => props.handleDeletenote(props.id)} className="delete-icon" size="1.3rem"/>        </div>
    </div>
  )
}

export default Note