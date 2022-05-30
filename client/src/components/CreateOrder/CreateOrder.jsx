import React, { useState } from "react";
import {images} from '../../constants/index'
import './CreateOrder.css'
import Navbar from "../Navbar/Navbar";



const CreateOrder = () => {
const types=["trousers","boxers","jeans","others","shirt","tshirt","joggers"]
const imz=[images.trousers,images.boxers,images.jeans,images.others,images.shirt,images.tshirt,images.joggers]
 return (
  <div className="app-create-order">
  <div className="header">
    <div className="store-table-header-heading">
      <h1>Create Order</h1>
    </div>
    <div className="store-table-header-search-bar">
      <input type="text" placeholder="Search"></input>
    </div>
    </div>
    <div className="header-Store">
                <div className="h-details"><h3>Product Type</h3></div>
                <div className="q-details"><h3>Quantity</h3></div>
                <div className="w-details"><h3>Wash Type</h3></div>
                <div className="p-details"><h3>Price</h3></div>
                <div className="r-details"><h3>Reset</h3></div>
    </div>
     <div>
     {types.map((type,index)=>{
       
     return(
       <div>
       <div className="item-1">

    <div className="details">
      <div className="img1"><img src={imz[index]}/></div>
        <div className="data">
          <h3>{type}</h3>
          <p>Lorem Ipsum is the </p>
        </div>
      </div>
      <div className="quantity"><input type='number' id="Trousers"></input></div>
        <div className="wash-type">
        <div className="img2"><img src={images.washingmachine} /></div>
        <div className="img2"><img src={images.ironing}  /></div>
        <div className="img2"><img src={images.btowel}  /></div>
        <div className="img2"><img src={images.bleach}  /></div>
    </div>
<div className="price"><button type="submit" class="btn btn-default" id="2" ></button></div>
<div className="reset"> <button type="submit" class="btn btn-default" id="2">reset</button></div>

</div>

      </div>  
    )})}
     
    </div>
    <div className="lastone">
      <button >cancel</button>
        <a href="/checkout">
          <button>proceed</button>
        </a> 
    </div>
  </div>
 )
     }
export default CreateOrder;
