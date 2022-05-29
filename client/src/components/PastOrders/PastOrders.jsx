import React from 'react'

const PastOrders = () => {
  return (
    <div className='app-past-orders'>
      <p>No order available</p>
      <a href="/createorder"><button>Create</button></a>
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
        </tbody>
      </table>
      
    </div>
  )
}

export default PastOrders
