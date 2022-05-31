const mongoose = require("mongoose")

const OrdersSchema = new mongoose.Schema(
  {
    orderId: {type:String,required:true },
    orderTimeDate :{type:String,required:true},
    storeLocation :{type:String,required:true},
    city:{type:String,required:true},
    storePhone:{type:String,required:true},
    totalItems: {type:Number,required:true},
    price: {type:Number,required:true},
    status: {type:String,default: "In Washing",},
    address: {type:String,required:true },
    user:{type: String,ref:'users'},
})

const Order = mongoose.model("orders",OrdersSchema)

module.exports = Order