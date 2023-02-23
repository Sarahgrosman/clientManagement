const express = require ('express')
const router = new express.Router()
const productSchema = require ("../models/products")
const mongoose = require('mongoose');

router.get('/products',async(req,res)=>{
    
  try{
    const products = await productSchema.find();
    res.send(products)
  }
  catch(error){
    res.send(error);
  }
})

module.exports=router