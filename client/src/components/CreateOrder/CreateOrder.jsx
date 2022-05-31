import React, { useState } from "react";
import {images} from '../../constants/index'
import {Link} from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar";
import './CreateOrder.css'

const CreateOrder = () => {
const types=["trousers","boxers","jeans","others","shirt","tshirt","joggers"]
const imglist=[images.trousers,images.boxers,images.jeans,images.others,images.shirt,images.tshirt,images.joggers]
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
        <h3 className="order-reset">Reset</h3>
      </div>

      <div className="table-order-options">
        {types.map((type,index)=>{ 
          return(
            <div className="create-order-details" key={`order${index}`}>
              <div id="order-photo" className="order-producttype">
                <img src={imglist[index]} alt="productType"/>
                <div className="order-name">
                  <h3>{type}</h3>
                  <p>Lorem Ipsum is the </p>
                </div>
              </div>

              <div className="div-qty"><input type='number' className="order-quantity" value={0}/></div>

              <div className="order-washtype">
                <img src={images.washingmachine} alt="washing" />
                <img src={images.ironing} alt="iron" />
                <img src={images.btowel} alt="folding" />
                <img src={images.bleach} alt = "chemical washing"/>
              </div>

              <div className="div-price"><p className="order-price">______</p></div>
              
              <div className="div-reset">
              <button type="reset" className="order-quantity">reset</button>
              </div>

            </div>
          )
        })}
        </div>
      
      <div className="create-proceed">
        <button>cancel</button>
        <Link to="/checkout"><button>proceed</button></Link> 
      </div>

    </div>
  </div>
 )
}

export default CreateOrder
