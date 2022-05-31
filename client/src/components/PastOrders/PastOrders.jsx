import React,{useState,useEffect} from 'react'
import Sidebar from "../Sidebar/Sidebar"
// import {images} from "../../constants/index"
import './PastOrders.css'

const PastOrders = () => {
  const [orders,setorders] = useState([])
  useEffect(() => {
    async function getOrders(){
      const reqdata = await fetch("http://localhost:8080/posts")
      const data = await reqdata.json()
      setorders([...data.orders])
    }
    getOrders()
  }, [])
  
  return (
    <div className='app-past-orders'>
      <Sidebar/>
      <div className='app-orders'>
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
            const {orderid,orderdate,location,city,phone,totalitems,price,status,view} = order
            return(
              <tr key={`order ${idx}`}>
                <td>{orderid}</td>
                <td>{orderdate}</td>
                <td>{location}</td>
                <td>{city}</td>
                <td>{phone}</td>
                <td>{totalitems}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td>{view}</td>
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
