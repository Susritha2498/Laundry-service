const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require("joi-password-complexity");
const { string } = require('joi');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    district:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    return token
};
const User = mongoose.model("user",userSchema);
const validate=(data)=>{
    const schema=joi.object({
        name:joi.string().required().label("Name"),
        phone:joi.string().required().label("Phone"),
        district:joi.string().required().label("District"),
        pincode:joi.string().required().label("Pincode"),
        email:joi.string().required().label("Email"),
        state:joi.string().required().label("State"),
        address:joi.string().required().label("Address"),
        password:passwordComplexity().required().label('Password')
    });
    return schema.validate(data)
}
module.exports={User, validate};