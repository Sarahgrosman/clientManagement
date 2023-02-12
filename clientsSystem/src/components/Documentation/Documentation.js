import React,{} from 'react'

const Documentation = ({note}) => {
    
    
    
  return (
    <>
        <span>{note.date}</span>
        <span>{note.note}</span>
    </>
  )
}

export default Documentation