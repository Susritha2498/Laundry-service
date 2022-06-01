import React,{useState} from 'react';
import {images} from '../../constants/index'
import Successful from '../Popups/Successful';

import './Summary.css'
const Summary = ({shirts,tshirts,trousers,jeans,boxers,joggers,others,total}) => {
  const [ordersuccess,setorderSuccess] = useState(true)

  const handleOrderSuccess = ()=>{
    setorderSuccess(!ordersuccess)
  }
  return (
    <div className='app-checkout'>
        <div className='summary' style={ordersuccess?{display:"none"}:{display:"flex"}}>
            <h2>Summary</h2>
            <span className="close">&times;</span>
        </div>

        <div className='user-address'>

          <input type="text" placeholder='Store location' />
          <img src={images.Summary} alt="" />

          <div className='store-address'>
              <label htmlFor="text">Store Address:</label>
              <input type="text" />
          </div>

          <div className='user-phone'>
              <label htmlFor="phone">Phone</label>
              <input type="number" />
          </div>
        </div>

        <h4>Order Details</h4>

        <table className='checkout-items'>
          <thead></thead>
          <tbody></tbody>
          <tr style={shirts.qty?{color:'black'}:{display:'none'}}>
            <td>Shirts</td>
            <td></td>
            <td>{shirts.qty}</td>
          </tr>
          <tr style={tshirts.qty?{color:'black'}:{display:'none'}}>
            <td>Tshirts</td>
            <td></td>
            <td>{tshirts.qty}</td>
          </tr>
          <tr style={trousers.qty?{color:'black'}:{display:'none'}}>
            <td>Trousers</td>
            <td></td>
            <td>{trousers.qty}</td>
          </tr>
          <tr>
            <td style={jeans.qty?{color:'black'}:{display:'none'}}>Jeans</td>
            <td></td>
            <td>{jeans.qty}</td>
          </tr>
          <tr style={boxers.qty?{color:'black'}:{display:'none'}}>
            <td>Boxers</td>
            <td></td>
            <td>{boxers.qty} </td>
          </tr>
          <tr style={joggers.qty?{color:'black'}:{display:'none'}}>
            <td>Joggers</td>
            <td></td>
            <td>{joggers.qty}</td>
          </tr>
          <tr style={others.qty?{color:'black'}:{display:'none'}}>
            <td>Others</td>
            <td></td>
            <td>{others.qty}</td>
          </tr>

        </table>
        <div className='checkout-costs'><p> SubTotal : {total}</p></div>
        <div className='checkout-costs'><p>Pickup Charges : {parseInt(total/5)}</p></div>
        <div className='checkout-costs' style={{backgroundColor:'#5861AE',color:'white'}}><p>Total Charges : {total+ parseInt(total/5)}</p></div>
        
      {/* <p style={tshirts.qty?{color:'black'}:{display:'none'}}>tshirts = {tshirts.qty}</p>
      <p style={trousers.qty?{color:'black'}:{display:'none'}}>trousers = {trousers.qty}</p>
      <p style={jeans.qty?{color:'black'}:{display:'none'}}>jeans = {jeans.qty}</p>
      <p style={boxers.qty?{color:'black'}:{display:'none'}}>boxers ={boxers.qty} </p>
      <p style={joggers.qty?{color:'black'}:{display:'none'}}>joggers ={joggers.qty} </p>
      <p style={others.qty?{color:'black'}:{display:'none'}}>others ={others.qty} </p> 
      <p>total price= {total}</p>*/}

      <div className='checkout-address'>
        <h3>address</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, libero perspiciatis</p>
      </div>
      <button onClick={handleOrderSuccess}>confirm</button>
      <div className='order-success' style={ordersuccess?{display:"none"}:{display:"flex"}}>
        <Successful/>
      </div>
    </div>
  )
}
export default Summary
