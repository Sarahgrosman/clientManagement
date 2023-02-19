import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isLogin,setIsLogin] = useState(null)
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>setIsLogin("log in")}
              onDoubleClick={()=>navigate('../login', {state:isLogin})}>להכנס</button>
      <button onClick={()=>setIsLogin("Register")}
              onDoubleClick={()=>navigate('../login', {state:isLogin})}>להרשם</button>
    </div>
  )
}

export default Home