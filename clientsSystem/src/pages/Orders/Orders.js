import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import EditableLabel from '../../components/EditableLabel/EditableLabel'
import { useNavigate } from 'react-router-dom'
import "./orders.css";


const Orders = ({}) => {
  const [allOrders,setAllOrders] = useState([])
  
  console.log("AllOrders: ",allOrders);

  const navigate = useNavigate();

    useEffect(() => {
        const getAllOrders = async () =>{
          try{
            const {data} = await axios.get('http://localhost:5000/allOrders')
            const sortData = data?.sort((a,b)=> a.created.split("T")[0]>b.created.split("T")[0]? 1 
                                             : b.created.split("T")[0]>a.created.split("T")[0]? -1 
                                             :0)
            setAllOrders(sortData)
          }
          catch(err){
            console.log(err);
          }
        }
        getAllOrders()

       }, [])

       const removeProduct = async (id,i) =>{
        const orders = allOrders;
        console.log(orders);
        orders[i].products = orders[i].products.filter(item=>item.id !== id);
        setAllOrders(orders)
        const updateProducts = orders[i]
        try{
          const {data} = await axios.post('http://localhost:5000/updateOrder',{updateProducts})
          console.log(data);
        }
        catch(err){
          console.log(err);
        }
       }
       const removeOrder = async(item) => {
        const updatingOrders = allOrders.filter(order=>order!==item);
        setAllOrders(updatingOrders);
        try{
          const {data} = await axios.post('http://localhost:5000/removeOrder',{item})
          alert(data)
        }
        catch(err){
          console.log(err);
        }

       } 
      
  return (
    <div>
      {allOrders?.map((item,i) =>
          <table border="1">
            <thead> 
              <th onClick={()=>navigate(`../client/${item.name}/${item.idUser}`)}>
                <span>{item.name} שם לקוח:  </span> 
                <span>  תאריך ביצוע הזמנה: {item.created.split("T")[0]} </span>
              </th>
            </thead>
            <tbody>
              <td>
                {item.products.map((product)=> 
                <div className='ordersList'>
                    <span>{product.price} :לתשלום </span>
                    <span>{product.name} :שם המוצר </span>
                    <span>{product.id} :קוד מוצר </span>
                    <button onClick={()=>removeProduct(product.id,i)}>מחק מוצר זה </button>
                    <hr/>
                </div>
                    )}  
              </td>
              <td>
                <button onClick={()=>removeOrder(item)}>מחק את כל הזמנה</button>       
              </td>
            </tbody>
          </table>
        )}
    </div>
  )
}

export default Orders