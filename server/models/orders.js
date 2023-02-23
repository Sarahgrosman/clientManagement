const mongoose = require("mongoose"); 

const ordersSchema = new mongoose.Schema({
    name:String,
    idUser:String,
    payment_method:{type:String,
                    enum:["cash","paypall","credit"],},
    created: {
        type: Date,
        default: Date.now
        },                
    products:[{
       id:Number,
       name:String,
       price:String,
       description:String,
       image:String,
       status:String,
       quantity:String,
       total_product:String,
       
   }]

})

module.exports=mongoose.model("orders",ordersSchema)  
