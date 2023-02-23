import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Order from '../../components/Order/Order'
import { OrderList }  from '../../components/orderList/OrderList'
import SaveOrVoid from '../../components/SaveOr/SaveOrVoid'
import { useLocation } from 'react-router-dom'
import OrderCheckout from '../../components/payment/Payment'

const OrdersToUser = ({client}) => {

  const [orderProducts,setOrderProducts] = useState([]);
  console.log("orderProduct: " ,orderProducts);
  const [order,setOrder] = useState(null)
  console.log("order:",order);
  const params = useParams();
  const {name,idUser} = params;
  const location = useLocation();
  const {state} = location;


  const save = async () => {
    setOrder({name,idUser,products:orderProducts})
    localStorage.removeItem("order")
    setOrderProducts([])
  }

  useEffect(()=>{
   const fetchOrder = async() =>{
    if(order){
      try{
        await axios.post('http://localhost:5000/newOrder',{order})
      }
      catch(err){
        console.log(err);
      }
    }
   }
    fetchOrder()

  },[order])
   
   const voidOrder = () => {
    setOrderProducts([])
    localStorage.removeItem("order")
  }

  useEffect(()=>{
    if(state){
      const orders = localStorage.getItem("order")
      console.log(JSON.parse(orders));
      JSON.parse(orders)!=null?
      setOrderProducts([...JSON.parse(orders),{...state , quantity:1}])
      :
      setOrderProducts([{...location.state,quantity:1}])
    }

    },[state])

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