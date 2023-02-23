const express = require('express');
const router = new express.Router();
const clientSchema = require("../models/clients")
const mongoose = require('mongoose');

router.post("/newClient",async(req,res)=>{
   
   try{
    const{newCard}= req.body
   
    const check =  async () => {
      const client = await clientSchema.find({name:newCard.name})
      console.log("client:",client);
      if(client.length>0){
         await clientSchema.findOneAndUpdate({name:newCard.name},newCard)
          
      }
          else{
            
            const newClient = new clientSchema(newCard);
            console.log(newClient);
            await newClient.save();
         }
         
      
      }
      check();
     
     res.send("עודכן");
    }
 catch(error){
    res.send(error)
 }
})

 router.post("/findClient",async(req,res)=>{
   try{ 
       const {id,name}= req.body;
       console.log(req.body);
       const client = await clientSchema.find({name:name,id:id})
       console.log(client);
    res.send(client);
   }
   catch(error){
      console.log(error);
   }

 })

 
 
 router.get("/allClients", async(req,res)=>{
   try{
     const allClients= await clientSchema.find({});
     res.send(allClients)
   }
   catch(error){
      res.send(error)
   }
 })

 

 router.post('/payment',async(req,res)=>{
      console.log(req.body);
   const {payment_method} = req.body
   const {name,idUser} = req.body.params
   try{
     const clientPay = await clientSchema.findOneAndUpdate({name,idUser},{payment_method})
      res.send(clientPay)
   }
   catch(err){
      console.log(err);
   }
 })

 router.post('/updateActivity',async(req,res)=>{
   const {note} = req.body
   const {name,idUser} = req.body.params
   try{
      const client = await clientSchema.findOneAndUpdate({name,idUser},note)
      res.send(client)
   }
   catch(err){
      console.log(err);
   }
  
 })

module.exports=router