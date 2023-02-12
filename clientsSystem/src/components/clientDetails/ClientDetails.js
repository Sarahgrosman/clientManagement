import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClientDetails = ({client,setIsBool,isBool}) => {
   
const navigate = useNavigate()
    const history = () => {

    }

   
    return(
    <div>
        <button onClick={()=>isBool?setIsBool(false):setIsBool(true)}>פרטי לקוח</button>
        <button onClick={history}>הסטורית הזמנות</button>
        <button onClick={()=>navigate(`../order/${client[0].name}/${client[0].idUser}`)}>הזמנה חדשה</button>
    </div>
  )
}

export default ClientDetails