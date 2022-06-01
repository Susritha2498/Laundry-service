import React,{useState,useEffect} from 'react'
import { images } from '../../constants'
import Sidebar from "../Sidebar/Sidebar"
// import {images} from "../../constants/index"
import './PastOrders.css'

const PastOrders = () => {
  const [orders,setorders] = useState([])
  useEffect(() => {
    async function getOrders(){
      const reqdata = await fetch("http://localhost:8080/allorders")
      const gotdata = await reqdata.json()
      setorders([...gotdata.data])
    }
    getOrders()
  }, [])
  
  return (
    <div className='app-past-orders'>
      <Sidebar/>
      <div className='app-orders'>
        <div className="past-heading">
          <h3>Orders | {orders.length}</h3>
          <div>
          <input type="text"/>
          <img src={images.search} alt="searchIcon"/>
          </div>
        </div>

      {orders.length? 
       <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Order Date & Time</th>
            <th>Store Location</th>
            <th>City</th>
            <th>Store Phone</th>
            <th>Total Items</th>
            <th>Price</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order,idx)=>{
            const {orderId,orderTimeDate,storeLocation,city,storePhone,totalItems,price,status} = order
            return(
              <tr key={`order ${idx}`} className={(idx%2)?"order-odd":"order-even"}>
                <td>{orderId}</td>
                <td>{orderTimeDate}</td>
                <td>{storeLocation}</td>
                <td>{city}</td>
                <td>{storePhone}</td>
                <td>{totalItems}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td className='order-view-eye'><img src={images.eye} alt="view" /></td>
              </tr>
            )
          }
          )
          }
        </tbody>
      </table>
      :
      <div className='app-blank-order'>
        <p>No order available</p>
        <a href="/createorder"><button>Create</button></a>
      </div>
      }
    </div>
  </div>
  )
}

export default PastOrders

/*
Order Id
Order Date & Time
Store Location
City
Store Phone
Total Items
Price
Status
View

orderid,orderdate,city,phone,totalitems,price,status,view
*/
