const express = require("express");
const app = express();
require('dotenv').config()
const cors = require('cors');
const connection = require('./database');
const authRoutes=require("./router/userRoutes.js");
const orderRoutes = require("./router/orderRoutes.js")
//database
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/",authRoutes);
app.use("/",orderRoutes)

const port = process.env.PORT || 8080;

app.listen(port,()=> console.log('8080 port is running'))