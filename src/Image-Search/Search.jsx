import React from 'react'
import { Form } from 'react-bootstrap'

function Search({txt,setxt}) {
  return (
   <>
   <form >
   <Form.Control 
   type="text" 
   placeholder="Search ...!"
   className='w-50 m-auto my-3'
   value={txt}
   onChange={(e)=>setxt(e.target.value)}
    />
   </form>
   </> 
  )
}

export default Search