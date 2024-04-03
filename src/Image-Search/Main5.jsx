import React, { useState } from 'react'
import Search from './Search'
import ImageContainer from './ImageContainer'

function Main5() {

    let [txt,setxt] = useState('')
    let [data,setdata] = useState([])

    // for debouncing
    let [debouncing,setDebouncing] = useState(txt)

console.log('txt = ',txt);
console.log('debouncing = ',debouncing);

  return (
    <div>
        <Search txt={txt} setxt={setxt}/>
        <ImageContainer txt={txt} setdata={setdata} data={data} debouncing={debouncing} setDebouncing={setDebouncing}/>
    </div>
  )
}

export default Main5