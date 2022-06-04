import React ,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {Details, Sidebar, Navbar, PastOrders, CreateOrder, Summary} from "../index"
import axios from "axios"
import "./SignIn.css"

const SignIn = () => { 
  const pastorders = useNavigate()
  const [mail, setMail]=useState("")
  const [password,setPassword]=useState("")
  const [login, setLogin]=useState(false)
  const [message ,setMessage]=useState("")
  const [token,setToken] = useState("")
  const [name,setName] = useState("")
  const [id,setId] = useState("")

 const loginUser = async (e) =>{
      e.preventDefault();
      axios.post("http://localhost:8080/login",{
        mail:mail,
        password:password
      })
      .then((response)=>{
        let newtoken = response.data.genToken 
        let Username = response.data.userDetails.name 
        let UserId = response.data.userDetails._id      
        localStorage.setItem(Username,newtoken)
        alert("Successfully logged in")
        setMail(mail)
        setName(Username)
        setToken(newtoken)
        setId(UserId)
        setMessage("Login is successful")
        setTimeout(()=>{
          setMessage("")
          pastorders('/orders')
        },2000)
        setLogin(true)
        }).catch((err)=>{
          setMessage("Login not successful")
          setTimeout(()=>{
            setMessage("")
          },2000)
          setLogin(false)
            })
 }
   return (   
  <div className='app-sigin'>  
    <Navbar/>
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
  <div style={{display:"none"}}>
    <Sidebar mail={mail} setMail={setMail} /> 
  </div>  
</div> 
  )
}
export default SignIn










