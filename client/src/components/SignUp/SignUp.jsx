import React ,{useState} from "react";
import {Details} from "../index"
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {

  const [message ,setMessage]=useState("")
  const homepage = useNavigate()
 
  const PostData=async(e)=>{
    
      e.preventDefault()

      let name=e.target.elements.name.value
      let mail=e.target.elements.email.value
      let phone=e.target.elements.phone.value
      let state=e.target.elements.state.value
      let district=e.target.elements.district.value
      let address=e.target.elements.address.value
      let pincode=e.target.elements.pincode.value
      let password=e.target.elements.password.value
      const response=await fetch("http://localhost:8080/register",{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify({
          name,mail,phone,state,district,address,pincode,password
        })
      })
      console.log(response.status)
      if(response.status===200){
        setMessage( "Registration successful")

        setTimeout(()=>{
          setMessage("")
          homepage('/')
        },2000)
      }
    
    else{

      setMessage("Registration not successful")
      setTimeout(()=>{
        setMessage("")
      },2000)

    }
  }
  return (
    <>
    <form onSubmit={PostData} className='app-register'>
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
                    <input type="text"  id="address"/><br />
                    <label htmlFor="pincode">Pincode</label><br />
                    <input type="number"  id="pincode"/><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password"/>
                    <p>{message}</p>
                </div>
            </div>
                <div className='user-verification'>
                    <input type="checkbox"></input>
                    <label> I agree to Terms & Conditions receiving marketing and promotional materials</label><br></br>
                    <a href="/orders"><button >Register</button></a><br />
                </div>
        </div>
    
    </form>

    <Details/></>

  )
}

export default SignUp