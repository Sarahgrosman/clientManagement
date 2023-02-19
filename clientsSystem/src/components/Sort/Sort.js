import React, { useEffect, useState } from 'react'
import './Sort.css'
const Sort = ({buttonText,style}) => {
 return (
    <div>
        <h3>חפש לפי</h3>
        <div className='options'>
        {buttonText?.map((item)=>
      <button onClick={(e)=>item.function(item.sortText,e)}style={style}>{item.text}</button>
     )}
       
        </div>
    </div>
  )
}

export default Sort