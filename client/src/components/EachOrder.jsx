import React,{useState} from 'react'
import { images } from '../constants'
import CancelSummary from './CancelSummary/CancelSummary'

const EachOrder = ({order,id,idx}) => {
    const [cancel,setCancel] = useState(false)
    const [view,setView] = useState(false)
    console.log(order)
    const {orderId,orderTimeDate,storeLocation,city,storePhone,totalItems,price,status} = order
    console.log(order)

  return (
      <>
        <tr className={(idx%2)?"order-odd":"order-even"}>
            <td>{orderId}</td>
            <td>{orderTimeDate}</td>
            <td>{storeLocation}</td>
            <td>{city}</td>
            <td>{storePhone}</td>
            <td>{totalItems}</td>
            <td>{price}</td>
            <td>{status} </td>
            <td style={{color:'red',marginLeft:'20px'}} onClick={(e)=>{setCancel(true)}}>cancel order</td> 
            <td className='order-view-eye' onClick={(e)=>{setView(true)}}><img src={images.eye} alt="view" /></td>
        </tr>
        <div className='order-cancel-summary' style={(cancel||view)?{display:'flex'}:{display:'none'}}>
          <CancelSummary cancel={cancel} view={view} order={order} id={id}/>
        </div>
      </>
  )
}

export default EachOrder
