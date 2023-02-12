import React from 'react'
import "./NewClient.css"
import NewCard from '../../components/newCard/NewCard'

const NewClient = ({setNewCard,newCard}) => {
  
  return (
    <div className='form'>
      <NewCard newCard={newCard} setNewCard={setNewCard}/>
    </div>
  )
}

export default NewClient