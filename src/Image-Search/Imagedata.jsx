import React from 'react'
import imgstyle from './imgdata.module.css'

function Imagedata({ele}) {
  return (
    <div className={imgstyle.imgdiv}>
      <img src={ele?.urls?.raw} alt="" />
   </div>
  )
}

export default Imagedata