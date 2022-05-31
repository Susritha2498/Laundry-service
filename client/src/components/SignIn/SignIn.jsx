import React from 'react'
import { Link } from 'react-router-dom'
import {Details} from "../index"
import "./SignIn.css"

const SignIn = () => {
  return ( 
    <div className='app-sigin'>
      <div className="app-sigin-forms">
        <div className="sigin-left">
          <h2>Laundry <br/> Service</h2>
          <p id='sigin-p1' >Doorstep Wash & Dryclean Service</p>
          <p id='sigin-p2'>Don't Have An Account?</p>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className='app-userform'>
          <p>SIGN IN</p>
          <label htmlFor="mail">Mobile / Email</label>
          <input type="email" id='signin-input1'/>
          <label htmlFor="password">Password</label>
          <input type="password" id='signin-input2' minLength={8} required/>
          <a href="#" className='user-forgot'>Forgot password?</a>
          <Link to="/orders">
            <button type="submit">Sign in</button>
          </Link>
        </div> 
      </div>
      <Details/>
    </div>
  )
}

export default SignIn