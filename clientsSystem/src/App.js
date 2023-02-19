import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Home from './pages/Home/Home';
import About from './pages/Abuot/About'
import Orders from './pages/Orders/Orders';
import Clients from './pages/Clients/Clients';
import Products from './pages/products/Products';
import AllClients from './pages/allClients/AllClients';
import  Layout  from './components/Layout/Layout';
import OrdersToUser from './pages/OrdersToUser/OrdersToUser';
import NewClient from './pages/newClient/NewClient';
import Login from './pages/Login/Login';


function App() {
 
  
  const [client,setClient] = useState(null);
  const [data,setData] = useState(null)
  const [token, setToken] = useState(null);
  console.log(token);
 

  return (
    <div className="App">
      {/*if(!token){
        <Login setToken={setToken}/>
      }*/}
    
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route path= "/login" element={<Login setToken={setToken} token={token}/>} />
      <Route path= "/" element={<Home />} />
      {/*<Route index element={<Home newCard={newCard} setNewCard={setNewCard}/>}/>*/}
      <Route path= "about" element={<About/>} />
      <Route path = "NewClient" element={<NewClient />}/>
      <Route path='order/:name/:idUser' element={<OrdersToUser client={client}/>}/>
      <Route path ="client/:name/:idUser" element={<Clients client={client} setClient={setClient} />}/>
      <Route path='products' element={<Products client={client} />}/>
      <Route path = "orders" element={<Orders setData={setData} data={data}/>}/>
      <Route path= "allClients" element={<AllClients data={data} setData={setData}/>}/>
      <Route path="*" element = {"נתיב לא חוקי"} />
      </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;


