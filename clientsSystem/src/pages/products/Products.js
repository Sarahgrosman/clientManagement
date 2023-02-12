
import React,{useEffect, useState} from 'react'
import Product from '../../components/Products/Product';
import axios from 'axios';
import './products.css'
const Products = ({client}) => {
  const [products,setProducts] = useState(null);
  console.log(products);
  
  useEffect(() => {
    async function getProducts (){
     const {data} = await axios.get('http://localhost:5000/products')
     setProducts(data)

    }
   
   getProducts();
     
   }, [])


 
  return (
  <div className='products' >
    {products?.map(product=>
        <Product
           key={product.id}  
           product={product} 
           client={client}
           
         />
        ) 
    }
    </div>
  )
}

export default Products