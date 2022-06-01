import React, { useState } from "react";
import {images} from '../../constants/index'
import {Link} from "react-router-dom"
import {Sidebar, Summary} from "../index"
import './CreateOrder.css'

const CreateOrder = () => {
const types=["shirts","tshirts","trousers","jeans","boxers","joggers","others"]
const imglist=[images.shirts,images.tshirts,images.trousers,images.jeans,images.boxers,images.joggers,images.others]

const varPrice = [10,5,5,10] //wash,iron,fold,bleach

const [wash,setWash] = useState(false)
const [bleach,setBleach] = useState(false)
const [iron,setIron] = useState(false)
const [fold,setFold] = useState(false)


const [shirts,setShirts] = useState({qty:0,wash:false,iron:false,fold:false,bleach:false})
const [tshirts,setTshirts] = useState({qty:0,wash:false,iron:false,fold:false,bleach:false})
const [trousers,setTrousers] = useState({qty:0,wash:false,iron:false,fold:false,bleach:false})
const [jeans,setJeans] = useState({qty:0,wash:false,iron:false,fold:false,bleach:false})
const [boxers,setBoxers] = useState({qty:0,wash:false,iron:false,fold:false,bleach:false})
const [joggers,setJoggers] = useState({qty:0,wash:false,iron:false,fold:false,bleach:false})
const [others,setOthers] = useState({qty:0,wash:false,iron:false,fold:false,bleach:false})

const [total,setTotal] = useState(0)
const [proceed,setProceed] = useState(false)

function calcCost(){
  let Sum = 0
  let qty1=shirts.qty
  let p1 = 0
  if(shirts.wash) p1+=10
  else if(shirts.iron) p1+=10
  else if(shirts.fold) p1+=10
  else if(shirts.bleach) p1+=10

  let qty2 = tshirts.qty
  let p2 = 0
  if(tshirts.wash) p2+=10
  else if(tshirts.iron) p2+=10
  else if(tshirts.fold) p2+=10
  else if(tshirts.bleach) p2+=10

  let qty3=trousers.qty
  let p3 = 0
  if(trousers.wash) p3+=10
  else if(trousers.iron) p3+=10
  else if(trousers.fold) p3+=10
  else if(trousers.bleach) p3+=10

  let qty4=jeans.qty
  let p4 = 0
  if(jeans.wash) p4+=10
  else if(jeans.iron) p4+=10
  else if(jeans.fold) p4+=10
  else if(jeans.bleach) p4+=10

  let qty5=boxers.qty
  let p5 = 0
  if(boxers.wash) p5+=10
  else if(boxers.iron) p5+=10
  else if(boxers.fold) p5+=10
  else if(boxers.bleach) p5+=10

  let qty6=joggers.qty
  let p6 = 0
  if(joggers.wash) p6+=10
  else if(joggers.iron) p6+=10
  else if(joggers.fold) p6+=10
  else if(joggers.bleach) p6+=10


  let qty7=others.qty
  let p7 = 0
  if(others.wash) p7+=10
  else if(others.iron) p7+=10
  else if(others.fold) p7+=10
  else if(others.bleach) p7+=10

  Sum = p1*qty1+p2*qty2+p3*qty3+p4*qty4+p5*qty5+p6*qty6+p7*qty7

  return Sum

}

const handleProceed =(e)=>{
  let price = calcCost()
  console.log(price)
  setTotal(price)
  setProceed(!proceed)
}

const handleQuantity = (e)=>{
  e.preventDefault()
  let product = e.target.id
  if(product === 'shirts') setShirts({...shirts,qty:e.target.value})
  else if(product === 'tshirts') setTshirts({...tshirts,qty:e.target.value})
  else if(product === 'trousers') setTrousers({...trousers,qty:e.target.value})
  else if(product === 'jeans') setJeans({...jeans,qty:e.target.value})
  else if(product === 'boxers') setBoxers({...boxers,qty:e.target.value})
  else if(product === 'joggers') setJoggers({...joggers,qty:e.target.value})
  else if(product === 'others') setOthers({...others,qty:e.target.value})
}
const handleReset = (e)=>{
  let product = e.target.id.split("-")[1]
  if(product === 'shirts') {
    setShirts({qty:0,wash:false,iron:false,fold:false,bleach:false})
    console.log(e.target)
    e.target.element.shirts.value = 0
    }
  else if(product === 'tshirts'){
    setTshirts({qty:0,wash:false,iron:false,fold:false,bleach:false})
  }
  else if(product === 'trousers'){
    setTrousers({qty:0,wash:false,iron:false,fold:false,bleach:false})
  }
  else if(product === 'jeans'){
    setJeans({qty:0,wash:false,iron:false,fold:false,bleach:false})
  }
  else if(product === 'boxers'){
    setBoxers({qty:0,wash:false,iron:false,fold:false,bleach:false})
  }
  else if(product === 'joggers'){
    setJoggers({qty:0,wash:false,iron:false,fold:false,bleach:false})
  }
  else if(product === 'others'){ 
    setOthers({qty:0,wash:false,iron:false,fold:false,bleach:false})
  }
}

const handleWash = (e)=>{
  let id = e.target.id
  let arr = id.split("-")
  //shirts
  if(arr[1]==='shirts'){
    if(arr[0]==='wash') {
      if(shirts.wash) setShirts({...shirts,wash:false})
      else setShirts({...shirts,wash:true})
    }
    else if (arr[0]==='iron') {
      if(shirts.iron) setShirts({...shirts,iron:false})
      else setShirts({...shirts,iron:true})    
    }
    else if (arr[0]==='fold'){
      if(shirts.fold) setShirts({...shirts,fold:false})
      else setShirts({...shirts,fold:true})    
    }
    else if (arr[0]==='bleach'){
      if(shirts.bleach) setShirts({...shirts,bleach:false})
      else setShirts({...shirts,bleach:true})    
    }
  } // tshirts
  else if(arr[1]==='tshirts'){
    if(arr[0]==='wash') {
      if(tshirts.wash) setTshirts({...tshirts,wash:false})
      else setTshirts({...tshirts,wash:true})
    }
    else if (arr[0]==='iron') {
      if(tshirts.iron) setTshirts({...tshirts,iron:false})
      else setTshirts({...tshirts,iron:true})    
    }
    else if (arr[0]==='fold'){
      if(tshirts.fold) setTshirts({...tshirts,fold:false})
      else setTshirts({...tshirts,fold:true})    
    }
    else if (arr[0]==='bleach'){
      if(tshirts.bleach) setTshirts({...tshirts,bleach:false})
      else setTshirts({...tshirts,bleach:true})    
    }
  } //trousers
  else if(arr[1]==='trousers'){
    if(arr[0]==='wash') {
      if(trousers.wash) setTrousers({...trousers,wash:false})
      else setTrousers({...trousers,wash:true})
    }
    else if (arr[0]==='iron') {
      if(trousers.iron) setTrousers({...trousers,iron:false})
      else setTrousers({...trousers,iron:true})    
    }
    else if (arr[0]==='fold'){
      if(trousers.fold) setTrousers({...trousers,fold:false})
      else setTrousers({...trousers,fold:true})    
    }
    else if (arr[0]==='bleach'){
      if(trousers.bleach) setTrousers({...trousers,bleach:false})
      else setTrousers({...trousers,bleach:true})    
    }
  } //jeans
  else if(arr[1]==='jeans'){
    if(arr[0]==='wash') {
      if(shirts.wash) setJeans({...jeans,wash:false})
      else setJeans({...jeans,wash:true})
    }
    else if (arr[0]==='iron') {
      if(jeans.iron) setJeans({...jeans,iron:false})
      else setJeans({...jeans,iron:true})    
    }
    else if (arr[0]==='fold'){
      if(jeans.fold) setJeans({...jeans,fold:false})
      else setJeans({...jeans,fold:true})    
    }
    else if (arr[0]==='bleach'){
      if(jeans.bleach) setJeans({...jeans,bleach:false})
      else setJeans({...jeans,bleach:true})    
    }
  }//boxers
  if(arr[1]==='boxers'){
    if(arr[0]==='wash') {
      if(boxers.wash) setBoxers({...boxers,wash:false})
      else setBoxers({...boxers,wash:true})
    }
    else if (arr[0]==='iron') {
      if(boxers.iron) setBoxers({...boxers,iron:false})
      else setBoxers({...boxers,iron:true})    
    }
    else if (arr[0]==='fold'){
      if(boxers.fold) setBoxers({...boxers,fold:false})
      else setBoxers({...boxers,fold:true})    
    }
    else if (arr[0]==='bleach'){
      if(boxers.bleach) setBoxers({...boxers,bleach:false})
      else setBoxers({...boxers,bleach:true})    
    }
  }//joggers
  if(arr[1]==='joggers'){
    if(arr[0]==='wash') {
      if(joggers.wash) setJoggers({...joggers,wash:false})
      else setJoggers({...joggers,wash:true})
    }
    else if (arr[0]==='iron') {
      if(joggers.iron) setJoggers({...joggers,iron:false})
      else setJoggers({...joggers,iron:true})    
    }
    else if (arr[0]==='fold'){
      if(joggers.fold) setJoggers({...joggers,fold:false})
      else setJoggers({...joggers,fold:true})    
    }
    else if (arr[0]==='bleach'){
      if(joggers.bleach) setJoggers({...joggers,bleach:false})
      else setJoggers({...joggers,bleach:true})    
    }
  }//others
  if(arr[1]==='others'){
    if(arr[0]==='wash') {
      if(others.wash) setOthers({...others,wash:false})
      else setOthers({...others,wash:true})
    }
    else if (arr[0]==='iron') {
      if(others.iron) setOthers({...others,iron:false})
      else setOthers({...others,iron:true})    
    }
    else if (arr[0]==='fold'){
      if(others.fold) setOthers({...others,fold:false})
      else setOthers({...others,fold:true})    
    }
    else if (arr[0]==='bleach'){
      if(others.bleach) setOthers({...others,bleach:false})
      else setOthers({...others,bleach:true})    
    }
  }
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
          const product = type
          return(
            <div className="create-order-details" key={`order${index}`}>
              <div id="order-photo" className="order-producttype">
                <img src={imglist[index]} alt="productType"/>
                <div className="order-name">
                  <h3>{type}</h3>
                  <p>Lorem Ipsum is the </p>
                </div>
              </div>

              <div className="div-qty"><input type='number' className="order-quantity" id={type} min={0} defaultValue={0} onChange={handleQuantity}/></div>

              <div className="order-washtype" id={`washtype-${type}`}>
                {(()=>{if(type==="shirts")
                {
                  return(<>
                  <img src={shirts.wash?images.washBlue:images.wash} alt="washing" id={`wash-${type}`} onClick={handleWash}/>
                  <img src={shirts.iron?images.ironBlue:images.iron} alt="iron" id={`iron-${type}`} onClick={handleWash}/>
                  <img src={shirts.fold? images.foldBlue: images.fold} alt="folding" id={`fold-${type}`} onClick={handleWash}/>
                  <img src={shirts.bleach?images.bleachBlue: images.bleach} alt ="bleach" id={`bleach-${type}`} onClick={handleWash}/>
                  </>)
                }
                else if(type==='tshirts'){
                  return(<>
                  <img src={tshirts.wash?images.washBlue:images.wash} alt="washing" id={`wash-${type}`} onClick={handleWash}/>
                  <img src={tshirts.iron?images.ironBlue:images.iron} alt="iron" id={`iron-${type}`} onClick={handleWash}/>
                  <img src={tshirts.fold? images.foldBlue: images.fold} alt="folding" id={`fold-${type}`} onClick={handleWash}/>
                  <img src={tshirts.bleach?images.bleachBlue: images.bleach} alt ="bleach" id={`bleach-${type}`} onClick={handleWash}/>
                  </>)
                }
                else if(type==='trousers'){
                  return(<>
                  <img src={trousers.wash?images.washBlue:images.wash} alt="washing" id={`wash-${type}`} onClick={handleWash}/>
                  <img src={trousers.iron?images.ironBlue:images.iron} alt="iron" id={`iron-${type}`} onClick={handleWash}/>
                  <img src={trousers.fold? images.foldBlue: images.fold} alt="folding" id={`fold-${type}`} onClick={handleWash}/>
                  <img src={trousers.bleach?images.bleachBlue: images.bleach} alt ="bleach" id={`bleach-${type}`} onClick={handleWash}/>
                  </>)
                }
                else if(type==='jeans'){
                  return(<>
                  <img src={jeans.wash?images.washBlue:images.wash} alt="washing" id={`wash-${type}`} onClick={handleWash}/>
                  <img src={jeans.iron?images.ironBlue:images.iron} alt="iron" id={`iron-${type}`} onClick={handleWash}/>
                  <img src={jeans.fold? images.foldBlue: images.fold} alt="folding" id={`fold-${type}`} onClick={handleWash}/>
                  <img src={jeans.bleach?images.bleachBlue: images.bleach} alt ="bleach" id={`bleach-${type}`} onClick={handleWash}/>
                  </>)
                }
                else if(type==='boxers'){
                  return(<>
                  <img src={boxers.wash?images.washBlue:images.wash} alt="washing" id={`wash-${type}`} onClick={handleWash}/>
                  <img src={boxers.iron?images.ironBlue:images.iron} alt="iron" id={`iron-${type}`} onClick={handleWash}/>
                  <img src={boxers.fold? images.foldBlue: images.fold} alt="folding" id={`fold-${type}`} onClick={handleWash}/>
                  <img src={boxers.bleach?images.bleachBlue: images.bleach} alt ="bleach" id={`bleach-${type}`} onClick={handleWash}/>
                  </>)
                }
                else if(type==='joggers'){
                  return(<>
                  <img src={joggers.wash?images.washBlue:images.wash} alt="washing" id={`wash-${type}`} onClick={handleWash}/>
                  <img src={joggers.iron?images.ironBlue:images.iron} alt="iron" id={`iron-${type}`} onClick={handleWash}/>
                  <img src={joggers.fold? images.foldBlue: images.fold} alt="folding" id={`fold-${type}`} onClick={handleWash}/>
                  <img src={joggers.bleach?images.bleachBlue: images.bleach} alt ="bleach" id={`bleach-${type}`} onClick={handleWash}/>
                  </>)
                }
                else if(type==='others'){
                  return(<>
                  <img src={others.wash?images.washBlue:images.wash} alt="washing" id={`wash-${type}`} onClick={handleWash}/>
                  <img src={others.iron?images.ironBlue:images.iron} alt="iron" id={`iron-${type}`} onClick={handleWash}/>
                  <img src={others.fold? images.foldBlue: images.fold} alt="folding" id={`fold-${type}`} onClick={handleWash}/>
                  <img src={others.bleach?images.bleachBlue: images.bleach} alt ="bleach" id={`bleach-${type}`} onClick={handleWash}/>
                  </>)
                }
                })()
              }
                
              </div>

              <div className="div-price"><p className="order-price">___</p></div>
              
              <div className="div-reset">
                <button type="reset" className="order-quantity" id={`reset-${type}`} onClick={handleReset}>Reset</button>
              </div>

            </div>
          )
        })}
        </div>
      
      <div className="create-proceed">
        <button>cancel</button>
        <button onClick={handleProceed}>proceed</button>
      </div>

    </div>
    <div className="order-summary" style={proceed?{display:"flex"}:{display:"none"}}>
      <Summary shirts={shirts} tshirts={tshirts} trousers={trousers} boxers={boxers} jeans={jeans} joggers={joggers} others={others} total={total}/>
    </div>
  </div>
 )
}

export default CreateOrder
