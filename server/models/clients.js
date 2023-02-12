const mongoose = require("mongoose"); 

const clientSchema = new mongoose.Schema({
    name:{type:String,
          required:[true,"fullname not provided. Cannot create user without fullname "],
          trim:true,
        lowercase:true,},
    idUser:{type:String,
            required:[true,"Id field is not provided. Cannot create user without email "],
            unique:true,
            minlenght:9,
            trim:true,
            },
    adress:String,
    phone:{type:String,
           validate: {
                validator: function (v) {
                    return /^[0-9]{10}/.test(v);
                 },
                message: '{VALUE} is not a valid 10 digit number!'
            },},
    email:{
           type:String,
           trim:true,
           lowecase:true,
           validate: {
            validator: function (v) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
          }},
    source:String,
    status:String,
    activity:{
      note:{note:String,date:Date},
      callLog:{callLog:String,date:Date},
    },
    orders:{
        nameClient:String,
        payment_method:{type:String,
                        enum:["cash","paypall","credit"],},
        orders:[[{
           id:Number,
           name:String,
           price:String,
           description:String,
           image:String,
           status:String,
           quantity:String,
           total_product:String,
           created: {
            type: Date,
            default: Date.now
          }
       }]],


    }
     

});

module.exports=mongoose.model("clients",clientSchema)