import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'


const Order = ({client,orderProducts}) => {
  
  const params = useParams()
  
  const {idUser,name} = params


  const navigate = useNavigate();

  const setOrder = () =>{
    localStorage.setItem("order",JSON.stringify(orderProducts))
                                   navigate('../products')
  }

  return (
    
      <div>
          <h2>ביצוע הזמנה</h2>
          <p>{name}:שם לקוח</p>
          <p>מספר זהות:{idUser}</p>
            <p>:כתובת</p>
            <p>{client[0]?.adress}</p>
            <p>:מספר נייד</p>
            <p>{client[0]?.phone}</p>
            <p>:כתובת אלקטרונית</p>
            <p>{client[0]?.email}</p>
            <button onClick={()=>{orderProducts.length>0?
                                  setOrder()
                                   :
                                   navigate('../products')

                                  }}>להוספת מוצר להזמנה</button>
                                   
       </div>
    
  )
      }

export default Order

