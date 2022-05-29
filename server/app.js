const express = require("express");
const app = express();
// const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const connection = require('./database');
const userRoutes=require("./router/user");
const authRoutes=require("./router/author");
//database
connection();



//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",userRoutes);
app.use("/api/author",authRoutes)

const port = process.env.PORT || 8080;

app.listen(port,()=> console.log('8080 port is running'))