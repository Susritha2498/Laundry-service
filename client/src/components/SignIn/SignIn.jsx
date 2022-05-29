import React from 'react'
import { Link } from 'react-router-dom'
import {Details} from "../index"

const SignIn = () => {
  return (
    <div className='app-signin'>
        <label htmlFor="mail">Mobile/Email</label>
        <input type="email" id='mail'/>
        <label htmlFor="password">Password</label>
        <a href="#">Forgot password?</a>
        <input type="text" id='password' />
        <Link to="/orders"><button>Sign in</button></Link>
        <Details/>
    </div>
  )
}

export default SignIn