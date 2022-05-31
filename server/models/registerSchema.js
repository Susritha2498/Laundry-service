const Mongoose = require("mongoose")
const Validator = require("validator")

const userSchema = new Mongoose.Schema(
   {
    name:{
        type:String,
        required:true,
    },
    mail:{
        type:String,
        required:true,
        unique:true,
        validate(val) {
            if (!Validator.isEmail(val)) {
              throw new Error("Please enter a valid email");
            }
          },
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    state:{
        type:String,
        required:true,
    },
    district:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    logtoken:{
        type:String,
        default:'sdeddfr.sdfcdef.asdefrgsad'
    }
    }
)

const User = new Mongoose.model('user',userSchema)

module.exports = User
