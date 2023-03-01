const express = require('express');
const router = new express.Router();
const ordersSchema = require("../models/orders")
const mongoose = require('mongoose');

router.post('/newOrder',async(req,res)=>{
    console.log(req.body);
    const {order}=req.body;
    console.log(order);
 
    try{
        const newOrder = new ordersSchema(order);
            console.log(newOrder);
            await newOrder.save();
       
       if (res.status(200)) {
          res.send("הזמנה בוצעה");
        }
      else{
        res.send("ארעה תקלה");
        }}
      catch(err){
       console.log(err);
      }
 
  })

  router.get('/allOrders',async(req,res)=>{
    try{
       const allOrders = await ordersSchema.find({})
       res.send(allOrders)
    }
    catch(err){
       console.log(err);
    }
  })

  router.post('/updateOrder',async(req,res)=>{
    const {updateProducts}= req.body
    console.log(updateProducts);
    const {name,idUser,products} = updateProducts;
    const order = await ordersSchema.findOneAndUpdate({name,idUser},{products})

    res.send(order)
  })

  router.post('/removeOrder',async(req,res)=>{
    const {item} = req.body;
    console.log(item);
    await ordersSchema.findOneAndDelete({item})
    if (res.status(200)){
        res.send("ההזמנה נמחקה")
    }
    else{
        res.send("ארעה תקלה אנא נסו שנית")
    }
    
  })

  router.post('/clientOrder',async(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    try{
        const clientOrders = await ordersSchema.find({name})
        console.log(clientOrders);
        res.send(clientOrders)
    }
    catch(err){
        res.send(err);
    }
    
  })

module.exports=router