import React from 'react'

const Summary = () => {
  return (
    <div className='app-checkout'>
      <div className='summary'>
          <h2>Summary</h2>
          <span class="close">&times;</span>
      </div>
      <div className='user-address'>
        <input type="text" placeholder='location' />  
      </div>  
      <p>Shirts = </p>
      <p>pants = </p>
      <p>tshirts = </p>
      <p>total price=</p>
      <div>
        <p>address : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, libero perspiciatis.</p>
      </div>
      <a href="/orders"><button>confirm</button></a>

      
    </div>
  )
}

export default Summary