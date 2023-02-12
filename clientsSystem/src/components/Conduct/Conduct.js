import React from 'react'

const Conduct = ({done}) => {
  return (
    <div>
        <textarea name="details" 
        onKeyDown={done}   rows="7" cols="50"></textarea>
    </div>
  )
}

export default Conduct