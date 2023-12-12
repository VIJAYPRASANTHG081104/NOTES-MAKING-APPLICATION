import React from 'react'
import {MdSearch} from 'react-icons/md'

const Search = ({handlesearch}) => {
  return (
    <div className='search'>
        <MdSearch className='search-icons' size='1.3rem'/>
        <input onChange={(event) => handlesearch(event.target.value)} type='text' placeholder='search' />
        <small style={{fontSize:"11px"}}>Created with love😀 && passion🫡</small>
    </div>
  )
}

export default Search