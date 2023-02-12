import React from 'react'

const Button = ({text,done,style}) => {
  return (
    <div>
      <button onClick={done} style={style}>{text}</button>
    </div>
  )
}

export default Button