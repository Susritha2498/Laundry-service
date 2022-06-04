const express = require("express");
const Bcrypt = require("bcrypt")
const jtoken= require("jsonwebtoken");
const router = new express.Router();

const Order  = require("../models/createOrderSchema");

async function authenticate(req,res,next){
    try{
        let token = req.headers.authorization
        if(!token){
            return res.status(401).json({Status:"Error",
            Error:"Please login to post"})
        }
        jtoken.verify(token,process.env.SECRET_TOKEN, async function(err,user){
            if(err){
                return res.status(403).json({Status:"Error",
                Error:"Invalid user"})
            }
            req.user = user._id
            next()
        })
    }catch(e){
        return res.status(500).json({Status:"Error",
        Error:e.message,})
    }
}


router.post("/add/order",authenticate,async(req,res)=>{
    try {
        const ordervar = new Order({
          ...req.body,
          user: req.user,
        });
    
        const saveOrder = await ordervar.save();
        res.status(200).json({Status: "Successfully created the post",
        newOrder: saveOrder,});
      } catch (e) {
        res.status(500).json({Status: "Error",
        Error: e.message});
      }
    
})

router.get('/allorders',async (req,res)=>{
    try{
        const orders = await Order.find()
        res.status(200).json({data:orders,Status:"Orders successfully fetched"})

    }catch(e){
        res.status(500).json({Error:e.message})
    }
})

router.get('/orders',authenticate ,async (req,res)=>{
    try{
        const orders = await Order.find({user:req.user})
        res.status(200).json({data:orders,Status:"Orders successfully fetched"})

    }catch(e){
        res.status(500).json({Error:e.message})
    }
})


router.delete("/delete/:id",authenticate,async(req,res)=>{
try {
    const _id = req.params.id;
    // const _id = new mongoose.Types.ObjectId(req.params.id)
    const ordervar = await Order.findById(_id);
    if (!ordervar) {
    return res.status(404).json({Status: "Error",
    message: "There is no post available with the given id",});
    }
    if (req.user!== ordervar.user) {
    return res.status(403).json({Status: "Error",
    body: "Do not have permission"});
    }
    await Order.findByIdAndDelete(_id);
    res.status(200).json({status: "Successfully deleted",});
} catch (e) {
    res.status(404).json({status: "Error",
    Error: e.message,});
}
})

module.exports = router