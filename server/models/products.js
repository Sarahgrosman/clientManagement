const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:String
    },
    image:{
        type:String
    }
})

module.exports=mongoose.model("products",productSchema);