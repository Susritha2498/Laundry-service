import React,{useState} from 'react'
import './CancelOrder.css'
import { Link, useNavigate } from 'react-router-dom'
import { images } from '../../constants/index'

const CancelOrder = ({id}) => {
    const gobacktoOrders = useNavigate()

    const handleCancelOrder = async(e)=>{
        e.preventDefault()
        let username = localStorage.key(0)
        let token = localStorage.getItem(username)
        const resp = await fetch("http://localhost:8080/delete/"+id,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
                Authorisation: token,
            },
        })

        if(resp.status===200){
            alert("Post is successfully deleted")
            gobacktoOrders('/orders')
        }
        else{
            alert("Failed to delete the post")
        }

    }
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
    
    <button onClick={handleCancelOrder}>proceed</button>

    </div>
  )
}


export default CancelOrder
