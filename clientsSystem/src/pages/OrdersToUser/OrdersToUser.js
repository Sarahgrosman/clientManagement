import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Order from '../../components/Order/Order'
import { OrderList }  from '../../components/orderList/OrderList'
import SaveOrVoid from '../../components/SaveOr/SaveOrVoid'
import { useLocation } from 'react-router-dom'
import OrderCheckout from '../../components/payment/Payment'

const OrdersToUser = ({client}) => {

  
  const [orderProducts,setOrderProducts] = useState([])
  console.log("orderProduct: " ,orderProducts);
  
  const params = useParams()
  const location = useLocation()
 

  const save = async () =>{
    
    try{
      await axios.post('http://localhost:5000/updateOrder',{orderProducts,params})
    }
    catch(err){
      console.log(err);
    }
    localStorage.removeItem("order")
    setOrderProducts([])
  }

  const voidOrder = () => {
    setOrderProducts([])
    localStorage.removeItem("order")
  }
  useEffect(()=>{
    //localStorage.clear()
    if(location.state){
      const orders = localStorage.getItem("order")
      console.log(JSON.parse(orders));
      JSON.parse(orders)!=null?
      setOrderProducts([...JSON.parse(orders),location.state])
      :
      setOrderProducts([location.state])
    }

    }
   
,[location.state])

  return (
    <div>
        <Order client={client} orderProducts={orderProducts}/>
         <OrderList  orderProducts={orderProducts} setOrderProducts={setOrderProducts} /> 
         <SaveOrVoid voidOrder={voidOrder} save={save} /> 
         <OrderCheckout orderProducts={orderProducts} params={params}/> 
    </div>
  )
}

export default OrdersToUser