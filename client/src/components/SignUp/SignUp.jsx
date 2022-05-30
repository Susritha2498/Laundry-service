import React from 'react'
import {Details} from "../index"
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='app-register'>
        <div class=''>
            <p>REGISTER</p> 
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email"/><br />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone"/>
            <label htmlFor="state">State</label>
            <input type="text" id="state"/><br />
            <label htmlFor="district">District</label>
            <input type="text" id="district"/>
            <label htmlFor="address">Address</label>
            <input type="text" id="address"/><br />
            <label htmlFor="pincode">Pincode</label>
            <input type="text" id="pincode"/>
            <label htmlFor="password">Password</label>
            <input type="text" id="password"/><br />
            <a href="/orders"><button>Register</button></a>
        </div>
    <Details/>
    </div>

  )
}

export default SignUp