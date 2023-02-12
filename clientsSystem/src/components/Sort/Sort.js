import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './Sort.css'
const Sort = ({buttonText,style}) => {
 return (
    <div>
        <h3>חפש לפי</h3>
        <div className='options'>
        {buttonText?.map((item)=>
      <Button text={item.text} 
       done={(e)=>item.function(item.sortText,e)}
       style={style}/>
     )}
       
        </div>
    </div>
  )
}

export default Sort