import React,{useState} from 'react';
import {images} from '../../constants/index'
import {Successful} from "../index"

import './CancelSummary.css'
const CancelSummary = ({quantity,washAmount, washtypes, total, proceed,setProceed}) => {
  const [ordersuccess,setorderSuccess] = useState(false)
  const [ordercancel,setorderCancel] = useState(false)

  const handleOrderSuccess = ()=>{
    setorderSuccess(true)
    setProceed(false)
  }
  const handleClose = ()=>{
    setProceed(!proceed)
  }

  const handleOrderCancel = ()=>{
    setorderCancel(true)
    cancel = true
  }

  return (
    <>
    <div className='app-checkout' style={(proceed||cancel)?{display:"flex"}:{display:"none"}}>
        <div className='app-checkout-heading'>
            <h2>Summary</h2>
            <span className="close" onClick={handleClose}>&times;</span>
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
          <tr style={true?{color:'black'}:{display:'none'}}>
            <td>Shirts</td>
            <td></td>
            {/* <td>{quantity[0]}</td> */}
          </tr>
          <tr style={true?{color:'black'}:{display:'none'}}>
            <td>Tshirts</td>
            <td></td>
            {/* <td>{quantity[1]}</td> */}
          </tr>
          <tr style={true?{color:'black'}:{display:'none'}}>
            <td>Trousers</td>
            <td></td>
            {/* <td>{quantity[2]}</td> */}
          </tr>
          <tr>
            <td style={true?{color:'black'}:{display:'none'}}>Jeans</td>
            <td></td>
            {/* <td>{quantity[3]}</td> */}
          </tr>
          <tr style={true?{color:'black'}:{display:'none'}}>
            <td>Boxers</td>
            <td></td>
            {/* <td>{quantity[4]} </td> */}
          </tr>
          <tr style={true?{color:'black'}:{display:'none'}}>
            <td>Joggers</td>
            <td></td>
            {/* <td>{quantity[5]}</td> */}
          </tr>
          <tr style={true?{color:'black'}:{display:'none'}}>
            <td>Others</td>
            <td></td>
            {/* <td>{quantity[6]}</td> */}
          </tr>

        </table>
        <div className='checkout-costs'><p> SubTotal : {total}</p></div>
        <div className='checkout-costs'><p>Pickup Charges : {parseInt(total/5)}</p></div>
        <div className='checkout-costs' style={{backgroundColor:'#5861AE',color:'white'}}><p>Total Charges : {total+ parseInt(total/5)}</p></div>
        
      <div className='checkout-address'>
        <h3>address</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, libero perspiciatis</p>
      </div>
      <button onClick={handleOrderSuccess}>confirm</button>
      <button onClick={handleOrderCancel}>cancel</button>
    </div>
    {/* <div className='order-success' style={(ordersuccess && !ordercancel)?{display:"none"}:{display:"flex"}}>
        <Successful/>
    </div> */}
  </>
  )
}
export default CancelSummary
