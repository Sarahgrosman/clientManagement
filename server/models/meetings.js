const mongoose = require("mongoose"); 

const meetingSchema = new mongoose.Schema({
    name:String,
    iduser:Number,
    date:String,
    hour:String
    
})


module.exports=mongoose.model("meetings",meetingSchema)