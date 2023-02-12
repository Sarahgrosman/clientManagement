
import React, {  } from 'react'

const EditableLabel_Edit = ({done,setText,text}) => {

    
   
    function doneIfEnter(e) {
        if (e.keyCode === 13) {
          
          done();
        }
      }
  return (
    <div>
        <input
            type="text"
            value={text}
            onBlur={done}
            onChange = {(e)=>setText(e.target.value)}
            onKeyDown={doneIfEnter}
      />
     
    </div>
  )
}

export default EditableLabel_Edit