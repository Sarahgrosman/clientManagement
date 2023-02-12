import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerDetails = ({client}) => {
  const navigate = useNavigate();
  return (
    <div>
        <p>כתובת:{client[0]?.adress}</p>
        <p>כתובת מייל:{client[0]?.email}</p>
        <p>מספר נייד:{client[0]?.phone}</p>
        <button onClick={()=>navigate('/newClient',{state:client})}>לעדכון פרטי לקוח</button>
    </div>
  )
}

export default CustomerDetails