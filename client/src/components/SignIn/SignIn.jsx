import React from 'react'
import { Link } from 'react-router-dom'
import {Details} from "../index"
import "./SignIn.css"

const SignIn = () => {
  return ( 
  <div className='app-sigin'>
    <div className="app-sigin-section">
      <div className="sigin-left">
        <h2 className="header">laundry <br></br> service</h2>
        <h4>Doorstep Wash & Dryclean Service</h4>
        <p>Don't Have An Account?</p>
        <Link to="/register"><button>Register</button></Link>
      </div>
      <div className='app-userform'>
        <span>SIGN IN</span>
        <label htmlFor="mail">Mobile/Email</label>
        <input type="text" id='mail'/>
        <label htmlFor="password">Password</label>
        
        <input type="text" id='password' />
        <a className="forgot"href="#">Forgot password?</a>
        <Link to="/orders"><button className="signin">Sign in</button></Link>
       
      </div> 
      
    </div>
    <Details/>
    </div>
  )
}

export default SignIn