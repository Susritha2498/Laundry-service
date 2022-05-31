import React, { useState } from "react";
import {Details} from "../index"
import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  const[user,setUser]=useState({name:"",email:"",phone:"",state:"",District:"",address:"",pincode:"",password:""})

const handleInputs=(e)=>{
  setUser({...user})
}

const postData=(e)=>{
  try{
    e.prevent.default()
    console.log(user)
    const {name,email,phone,state,district,address,pincode,password}=user
    const response= fetch( "http://localhost:8080/register",{
      method:'POST',
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify({
        name,email,phone,state,district,address,pincode,password
      })
    })
    console.log(response.status)
    if(response.status===200){
      alert("u have registered successfully")
      console.log("successfully registered")
    }else if(response.status===405){
      alert("invalid credentials")
    }
  }catch(err){
    console.log(err)
  }

}
  return (
    <>
    <div className='app-register'>
      <div className="register-page-LP">
        <h1>Laundry <br />Service</h1>
        <p>Doorstep Wash & <br /> Dryclean Service</p>
        <h4>Already Have Account</h4>
        <Link to="/"><button className="signin-button">Sign In</button></Link>
      </div>
        <div className='register-page-RP'>
            <p>REGISTER</p> 
            <div className='user-data'>
                <div className='user-data-lf'>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name"/><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email"/><br />
                    <label htmlFor="phone">Phone</label><br />
                    <input type="number" id="phone"/><br />
                    <label htmlFor="state">State</label><br />
                    <input type="text" id="state"/>
                </div><br />

                <div className='user-data-rs'>
                    <label htmlFor="district">District</label><br />
                    <input type="text" id="district"/><br />
                    <label htmlFor="address">Address</label><br />
                    <input type="text" id="address"/><br />
                    <label htmlFor="pincode">Pincode</label><br />
                    <input type="number" id="pincode"/><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="pasword"/>
                </div>
            </div>
                <div className='user-verification'>
                    <input type="checkbox"></input>
                    <label for="vehicle1"> I agree to Terms & Conditions receiving marketing and promotional materials</label><br></br>
                    <a href="/orders"><button>Register</button></a><br />
                </div>
        </div>
    
    </div>
    <Details/></>

  )
}

export default SignUp