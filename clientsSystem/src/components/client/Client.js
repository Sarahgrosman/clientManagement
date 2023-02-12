import axios from 'axios';
import React, { useEffect,useState } from 'react'


const Client = ({setClient,params}) => {
    
    const {name,idUser}=params;
    
  
    useEffect(()=>{
        async function clientDetails(){
            try{
              const {data} = await axios.post('http://localhost:5000/findClient',{name,idUser})
               setClient(data);
            }
            catch(error){
              console.log(error);
            }
        }
            clientDetails();

    },[])
  return (
    <div>
        <h2>{name} :שם הלקוח</h2>
        <h3>מספר זהות: {idUser}</h3>
        
    </div>
  )
}

export default Client