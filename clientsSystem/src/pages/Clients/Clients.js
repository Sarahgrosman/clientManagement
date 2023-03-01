import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import Client from '../../components/client/Client'
import ClientActivity from '../../components/ClientActivity/ClientActivity'
import ClientDetails from '../../components/clientDetails/ClientDetails'
import CustomerDetails from '../../components/customerDetails/CustomerDetails'
import './clients.css'
const Clients = ({client,setClient}) => {
    const [isBool,setIsBool] = useState(false)
    const [OrderHistory,setOrderHistory] = useState(null)
    console.log("OrderHistory:",OrderHistory);
    const params = useParams();

  return (
    <div className='clientPage'>
     <div>
        <Client setClient={setClient} params={params}/>
     </div>
    <div>  
    <ClientDetails 
        client={client} 
        setIsBool={setIsBool} 
        isBool={isBool}
        OrderHistory={OrderHistory}
        setOrderHistory={setOrderHistory} />
    </div>
    <div>
    {isBool?
        <CustomerDetails client={client}/>
     :OrderHistory?
     OrderHistory[0].products.map(product=><div>{product.name}</div>)
       : null }
    </div>
    <ClientActivity params={params}/>
  </div>
  )
}

export default Clients