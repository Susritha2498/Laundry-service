import React,{useState} from 'react'
import './CancelOrder.css'
import { Link } from 'react-router-dom'
import { images } from '../../constants/index'
import {Successful} from '../index'

const CancelOrder = ({cancel,setCancel}) => {
  const [cproceed,setCProceed] = useState(false)
  return (
    <div className='app-cancelorder'>
      <div className='Cancelled'> 
        <div className='cancel-heading'>
          <p>Alert</p>
          <p className='cancel-close' onClick={()=>{setCProceed(!cproceed)}}>X</p>
        </div>
        <div className="cancel-alert">
            <div className='div-cancel-img'>
              <img src={images.cancel} alt="cancelAlert"/>
            </div>
            <div className='cancel-text'>
              <h2>Are you sure you want to cancel</h2> 
              <h2>the Order <span>No. ORD0002</span></h2>
            </div>
        </div>
      </div>

      <Link to="/orders">
        <button onClick={(e)=>{ setCProceed(true) }}>proceed</button>
      </Link>

      <div className='summary-cancel' style={cproceed?{display:'flex'}:{display:"none"}}>
        <Successful/>
      </div>
    </div>
  )
}


export default CancelOrder
