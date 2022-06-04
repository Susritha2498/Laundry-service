const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
const Bcrypt = require('bcryptjs');


require('../database');


router.get('/',(req,res)=>{
    res.send('hello world from the server')
});
router.post('/register', async (req,res)=>{
    const {name, phone, district, pincode, state, address, password, email} = req.body;

    if (!name || !phone || !district || !pincode || !state || !address || !password || !email){
        return res.status(422).json({error: "plz fill the field"});
    }

    try{
        const userExist = await User.findOne({email:email});
        const phoneExist = await User.findOne({phone:phone});


        if (userExist){
            return res.status(422).json({error:"email is already exists"})
        };

        if (phoneExist){
            return res.status(422).json({error:"phone num is already exists"})
        }
 
        

        let salt = await Bcrypt.genSalt(10)
        hashedpassword = await Bcrypt.hash(String(req.body.password),salt)
        
        const user = new User({name, phone, district, pincode, state, address, password:hashedpassword, email});

        await user.save();
  
        res.status(201).json({message:"user registered successfully"});
        
        
} catch(err){
        console.log(err);
    }

});

//login route
router.post('/signin', async(req,res)=>{
    try{
        const { email,password } = req.body;
        if(!email || !password){
            return res.status(400).json({error:"plz fill the dields"})
        }
        const userLoginid = await User.findOne({email: email});
        const userLoginpassword = await User.findOne({password:password});
        
        if(!userLoginid || !userLoginpassword){
            res.status(400).json({error:"please enter valid details"});
        }else{
            res.json({message:"user signIn successfully"});
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = router;