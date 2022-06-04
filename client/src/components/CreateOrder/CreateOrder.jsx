import React, { useState } from "react";
import {images} from '../../constants/index'
// import {Link} from "react-router-dom"
import {Sidebar, Summary, Product} from "../index"
import './CreateOrder.css'

const CreateOrder = () => {

const types=["shirts","tshirts","trousers","jeans","boxers","joggers","others"]

const [total,setTotal] = useState(0)
const [proceed,setProceed] = useState(false)

const [quantity,setQuantity] = useState([0,0,0,0,0,0,0]) //shirts,tshirts,trousers,jeans,boxers,joggers,others
const [washAmount,setWashAmount] = useState([0,0,0,0,0,0,0]) //shirts,tshirts,trousers,jeans,boxers,joggers,others
const [productcost,setProductCost] = useState([0,0,0,0,0,0,0])
const[washtypes,setWashtypes] = useState([[],[],[],[],[],[],[]])

const handleCancel =(e)=>{
  e.preventDefault()
  setProceed(false)
}

const handleProceed = ()=>{
  let Sum = 0
  // types.map((type,index)=>{
  //   Sum = 0
  //   Sum+=productcost[index]
  //   return
  // })
  setTotal(Sum)
  setProceed(true)
}

return (
  <div className="app-create-order">
    <Sidebar/>
    <div className="create-section">
      <div className="create-heading">
        <h3>Create Order</h3>
        <div>
        <input type="text"/>
        <img src={images.search} alt="searchIcon"/>
        </div>
      </div>

      <div className="create-table-header">
        <h3 className="order-producttype">Product Type</h3>
        <h3 className="order-quantity">Quantity</h3>
        <h3 className="order-washtype">Wash Type</h3>
        <h3 className="order-price">Price</h3>
      </div>

      <div className="table-order-options">
        {types.map((type,index)=>{ 
          return(<Product key={`productType-${index}-${type}`} type={type} index={index}/>)
        })}
        </div>
      
      <div className="create-proceed">
        <button onClick={handleCancel}>cancel</button>
        <button onClick={handleProceed}>proceed</button>
      </div>

    </div>
    <div className="order-summary" style={proceed?{display:"flex"}:{display:"none"}}>
      <Summary quantity={quantity} washAmount={washAmount} washtypes={washtypes} total={total} proceed={proceed} setproceed={setProceed}/>
    </div>
  </div>
 )
}

export default CreateOrder
