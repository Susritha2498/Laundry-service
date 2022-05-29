import React from 'react'

const CreateOrder = () => {
  return (
    <div className='app-create-order'>
      <p>Create Orders</p>
      {/* fetch property from backend to display product types, wash types, price */}
      <table>
        <thead>
          <tr>
            <th>Product Types</th>
            <th>Quantity</th>
            <th>Washtype</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <button>cancel</button>
      <a href="/checkout"><button>proceed</button></a>
    </div>
  )
}

export default CreateOrder