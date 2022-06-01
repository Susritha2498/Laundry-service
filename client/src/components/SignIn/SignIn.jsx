import React ,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {Details} from "../index"
import "./SignIn.css"
const SignIn = () => { 
  const pastorders = useNavigate()
  const [mail, setMail]=useState("")
  const [password,setPassword]=useState('')
  const [login, setLogin]=useState(false)
  const [message ,setMessage]=useState("")


 const loginUser = async (e) =>{
      e.preventDefault();
      const res=await fetch("http://localhost:8080/login", {
          method:"POST", 
          headers:{
              "Content-Type":"application/json"
          },body:JSON.stringify({
            mail,password
          })
        })
  if(res.status === 200 ){
    setMail(mail)
    setMessage("Login is successful")
    console.log(message)
    setTimeout(()=>{
      setMessage("")
      pastorders('/orders')
    },2000)
    
    setLogin(true)

  }else{
    
    setMessage("Login not successful")
    console.log(message)
    setTimeout(()=>{
      setMessage("")
    },2000)
    
    setLogin(false)
  }
 }
   return (   
  <div className='app-sigin'>  
    <div className="app-sigin-section">      
        <div className="sigin-left">        
            <h2 className="header">laundry <br></br> service</h2>   
            <h4>Doorstep Wash & Dryclean Service</h4>      
            <p>Don't Have An Account?</p>     
            <Link to="/register"><button>Register</button></Link>  
        </div>    
        <form method='POST' action={login? "/orders":"/"} onSubmit={loginUser} className='app-userform'>     
          <span>SIGN IN</span>  

          <label htmlFor="mail">Mobile/Email</label>      
          <input type="text" id='mail' value={mail}
            onChange={(e)=>setMail(e.target.value)}
          />  

          <label htmlFor="password">Password</label>    
          <input type="password" id='password' value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />  
          <p>{message}</p>
          <a className="forgot"href="#">Forgot password?</a> 
          <button type="submit" className="signin" onClick={loginUser}>Sign in</button>       
        </form>           
      </div>    
  <Details/>    
</div> 
  )
}
export default SignIn










