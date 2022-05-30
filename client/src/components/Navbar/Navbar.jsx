import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='app-navbar'>
      <h1>Laundry</h1>
      <div className='app-navlinks'>
        <a href="#">Home</a>
        <a href="#">Pricing</a>
        <a href="#">Career</a>
        <a href="/" className='nav-sign'>Signin</a>
      </div>    
    </div>
  )
}

export default Navbar