const express = require("express");
const app = express();
require('dotenv').config()
const cors = require('cors');
const connection = require('./database');
const authRoutes=require("./router/author");
const orderRoutes=require("./router/order");

//database
connection();

//middlewares
app.use(express.json());
app.use(cors());

app.use(authRoutes)
app.use(orderRoutes)

app.get('/',(req,res)=>{
    res.send("hello world from the server app.js")
})

const port = process.env.PORT || 8080;

app.listen(port,()=> console.log('8080 port is running'))