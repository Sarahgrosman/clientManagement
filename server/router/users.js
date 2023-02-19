const express = require('express');
const router = new express.Router();
const axios = require("axios")
const usersSchema = require("../models/users")

router.post('/newUser',async(req,res)=>{
    const {credentials} = req.body
    const newUser = new usersSchema(credentials);
    await newUser.save();
    res.send("עודכן בהצלחה")

})

router.post("/login",async(req,res)=>{
    const {credentials} = req.body
    console.log(credentials);
    const user = await usersSchema.find(credentials)
    console.log(user);
    if(user.length>0){
        res.send(`ברוכ/ה הבא/ה${user[0].username}`)
    }
    else{
        res.send("עדיין לא נרשמת,עליך להרשם כדי להתחבר")
    }

})


router.post("/checkToken", async (req, res) => {
    //Destructuring response token from request body
        const {token} = req.body;
    //sends secret key and response token to google
        await axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
          );
    
    //check response status and send back to the client-side
          if (res.status(200)) {
            res.send("Human 👨 👩");
        }else{
          res.send("Robot 🤖");
        }
    });

    module.exports=router