const express = require("express");
const mongoose =require("mongoose");
const cors = require("cors");
require("dotenv").config();
const productsRouter = require("./router/products")
const clientsRouter = require("./router/clients")
const meetingRouter = require("./router/meetings")
const usersRouters = require("./router/users")
const ordersRouters = require("./router/orders")
const app = express();
const port = process.env.PORT
mongoose.connect(

    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@clientsystem.khwxrxk.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log(mongoose.connection.readyState);
    app.use(express.json());
    app.use(cors());
    
    app.use(productsRouter);
    app.use(clientsRouter);
    app.use(meetingRouter);
    app.use(usersRouters);
    app.use(ordersRouters)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})