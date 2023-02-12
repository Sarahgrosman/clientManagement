import React from 'react';
import { useNavigate } from 'react-router-dom';
const Product = ({product,client}) => {
   const navigate = useNavigate();
  return (
    <div>
      <h3>{product?.name}</h3>
      <img src={product?.image} alt={product.name}/>
      <p>{product?.description}</p>
      <button onClick={()=>{
        if(client) navigate(`../order/${client[0].name}/${client[0].idUser}`,{state:product})
       else{ alert("לקוח חדש נא לעדכן")
         navigate("./NewClient")}

      }}>להוספת המוצר להזמנה</button>
             
    </div>
  )
}

export default Product