import React,{useState} from 'react'
import './Navbar.css'
import { images } from '../../constants'
const Navbar = () => {
  const [success,setSuccess] = useState(false)
  const userName = "Susritha Balusu"
  const mail = "susritha.balusu@gmail.com"
  return (
    <div className='app-navbar'>
      <h1>Laundry</h1>
      <div className='app-navlinks'>
        <a href="#" className='nav-static-links' style={success?{display:"none"}:{backgroundColor:"white"}}>Home</a>
        <a href="#" className='nav-static-links'>Pricing</a>
        <a href="#" className='nav-static-links'>Career</a>
        {success?
        <div className='nav-user'>
          <img src={images.avatar} alt="avatar"/>
          {/* <span> */}
          <h4>{userName}</h4>
          <p style={{display:'none'}}>{mail}</p>
          {/* </span> */}
        </div>
          :
        <a href="/" className='nav-links' id='nav-sign'>Signin</a>
        }
      </div>    
    </div>
  )
}

export default Navbar