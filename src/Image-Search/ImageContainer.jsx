import axios from 'axios'
import React, { useEffect } from 'react'
import imgstyle from './imgdata.module.css'
import Imagedata from './Imagedata'

function ImageContainer({txt,setdata,data,debouncing,setDebouncing}) {

  let access_Key ='o1QbGAnEYfri8LPBLUWp0EUIzzICe2POGVQ-aLoYRWA'

useEffect(()=>{

let timerId = setTimeout(() => {
  setDebouncing(txt)
}, 1000);

return ()=>{
  clearTimeout(timerId)
}

},[txt])


let getImg = async()=>{
  // console.log('IMG CON');
  await axios
  .get(`https://api.unsplash.com/search/photos?client_id=${access_Key}&query=${txt}`)
  .then(val=>setdata(val?.data?.results))
  .catch(err=>console.log(err))
}

useEffect(()=>{
if(debouncing){
  getImg()
}
},[debouncing])

  return (
    <div className='p-4'>
      <h1 className='text-center pb-3'>TOTAL RESULTS {data.length}</h1>

<div className={imgstyle.main}>
  {
    data && data.map(ele=> (
      <Imagedata key={ele.id} ele={ele}/>
       ))
  }
</div>

    </div>
  )
}

export default ImageContainer