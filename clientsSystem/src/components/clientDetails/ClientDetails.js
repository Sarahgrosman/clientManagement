import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const ClientDetails = ({client,setIsBool,isBool,OrderHistory,setOrderHistory}) => {
 
  
const navigate = useNavigate()
    const history = async() => {
      if(!OrderHistory){
       const {name} = client[0];
       console.log("name",name);
       const {data} = await axios.post('http://localhost:5000/clientOrder',{name})
       setOrderHistory(data)

      }
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