const mongoose = require("mongoose"); 

const meetinngSchema = new mongoose.Schema({
    name:String,
    iduser:Number,
    date:String,
    hour:String
    
})


module.exports=mongoose.model("meetings",meetinngSchema)