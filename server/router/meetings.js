const express = require('express');
const router = new express.Router();
const meetingSchema = require("../models/meetings")
const mongoose = require('mongoose');

router.post('/newMeeting',async(req,res)=>{
    const {newMeeting} = req.body
    try{
    const thisClient = new meetingSchema(newMeeting);
    console.log(thisClient);
    await thisClient.save();
    res.send("נשמר בהצלחה")
  }
  catch(err){
    console.log(err);
  }
})

router.post("/dailyMeeting", async(req,res)=>{
  console.log(req.body);
    const {dateSelected} = req.body
    console.log(dateSelected);
    try{
      const dailyMeeting = await meetingSchema.find({date:dateSelected});
      console.log(dailyMeeting);
      res.send(dailyMeeting)
    }
    catch(error){
       res.send(error)
    }
  })
  module.exports=router