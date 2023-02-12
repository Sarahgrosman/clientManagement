import React,{ useEffect, useState } from 'react'

import EditableLabel from '../../components/EditableLabel/EditableLabel'
import { useNavigate } from 'react-router-dom'
import "./orders.css"

const Orders = ({setData,data}) => {
  const [orders,setOrders] = useState([])
  console.log("orders: ",orders);

  const navigate = useNavigate();

    useEffect(() => {
        setOrders(data?.filter(item=>item.orders?.length>0))

       }, [])
      
  return (
    <div>
      {orders?.map(item =>
      
          <div className= "details orders" onClick={()=>navigate(`../client/${item[0].name}/${item[0].idUser}`)}> 
                    
                    <div><EditableLabel text={item.orders?.map(order=><div className='ordersList'>
                                                                                          <span>{order.price}</span> <span> : לתשלום </span>
                                                                                          <span>{order.name}</span> <span> : שם המוצר </span>
                                                                                          <span>{order.id}</span> <span> : קוד מוצר </span>
                                                                                          <button>מחק מוצר זה </button>
                                                                                           </div>) 
                                                                                          }/>  
                                                                                          </div>
                                                                                          <span> : הזמנות </span>
                   <div className='ordersList'><EditableLabel text={item.name}/> <span>: שם לקוח</span> </div>
                   <button>מחק את כל הזמנה</button>
                      
                    </div>
        )}
         </div>
  )
}

export default Orders