import React,{} from 'react'

const Documentation = ({note}) => {
    
    
    
  return (
    <>
        <span>{note.date}</span>
        <br/>
        <span>{note.note}</span>
    </>
  )
}

export default Documentation