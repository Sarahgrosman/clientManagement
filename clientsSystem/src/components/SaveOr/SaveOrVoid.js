import React from 'react'

const SaveOrVoid = ({voidOrder,save}) => {
  return (
    <div>
       <button onClick={voidOrder}>בטל</button>
       <button onClick={save}>שמור</button>
    </div>
  )
}

export default SaveOrVoid