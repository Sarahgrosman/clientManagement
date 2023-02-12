import React from 'react'

const EditableLabel_View = ({startEdit,text}) => {
  return (
    <div>
        <p onClick={startEdit}>{text}</p>
    </div>
  )
}

export default EditableLabel_View