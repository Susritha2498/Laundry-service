import React from 'react'
import "./Details.css"
import {images} from '../../constants/index'

const Details = () => {
  return (
    <div className='app-details'>
      <div className='app-offers'>
        <h2>Now Refer & Earn ₹500 for every referral*</h2>
        <p>* Terms and conditions will be applied</p>
      </div>

      <div className='app-sign-footer'>
        <div id='app-about'>
          <h3>ABOUT US</h3>
          <p>Doorstep Wash & Dry Clean Service</p>
        </div>

        <div id='app-home'>
          <h4>Home</h4>
          <p>Sign In</p>
          <p>Register</p>
        </div>

        <h3>Pricing</h3>

        <div id='app-career'>
          <h4>Career</h4>
          <p>Blogs</p>
          <p>Create</p>
        </div>

        <h3>Contact</h3>

        <div id='app-socialmedia'>
          <h3>SOCIAL MEDIA</h3>
          <div className='app-media-icons'>
            <img src={images.facebook} alt="facebook" />
            <img src={images.instagram} alt="instagram" />
            <img src={images.linkedin} alt="linkedin" />
          </div>
        </div>

        </div>
    </div>
  )
}

export default Details
