import React,{useState, useEffect} from 'react'
import { images } from '../constants/index'

const imglist=[images.shirts,images.tshirts,images.trousers,images.jeans,images.boxers,images.joggers,images.others]

const Product = ({type,index}) => {
    const [qty,setQty] = useState(0)
    const [wash,setWash] = useState(false)
    const [bleach,setBleach] = useState(false)
    const [iron,setIron] = useState(false)
    const [fold,setFold] = useState(false)  
    const [price,setPrice] = useState(0)
    const [washcost,setWashcost] = useState(0)

    useEffect(() => {
        function handleConfirm(){
            let washprice = 0
            if(wash) washprice+=10
            if(fold) washprice+=5
            if(iron) washprice+=10
            if(bleach) washprice+=20
            setWashcost(washprice)
            setPrice(qty*washprice)
        }
        handleConfirm()
    
    }, [qty,setQty,wash,setWash,bleach,setBleach,iron,setIron,fold,setFold,price,setPrice,washcost,setWashcost,index,type])
    
    const handleWash = (e)=>{
        e.preventDefault()
        let washtype = e.target.id.split('-')[0]
        if(washtype==='wash') setWash(!wash)
        else if (washtype==='iron') setIron(!iron)
        else if (washtype==='fold') setFold(!fold)
        else if (washtype==='bleach') setBleach(!bleach)
    }

    const handleQuantity = (e)=>{
        e.preventDefault()
        let num = e.target.value
        setQty(num)
    }

    const handleReset = (e)=>{
        e.preventDefault()
        setWash(false)
        setIron(false)
        setFold(false)
        setBleach(false)
        setQty(0)
    }

    return (
    <div className="create-order-details" key={`order${index}`}>
        <div id="order-photo" className="order-producttype">
            <img src={imglist[index]} alt="productType"/>
            <div className="order-name">
                <h3>{type}</h3>
                <p>Lorem Ipsum is the </p>
            </div>
        </div>
        <div className="order-quantity">
            <input type='number' id={type} min={0} value={qty} onChange={handleQuantity}/>
        </div>

        <div className="order-washtype" id={`washtype-${type}`}>
            <img src={wash?images.washBlue:images.wash} alt="washing" id={`wash-${type}`} onClick={handleWash}/>
            <img src={iron?images.ironBlue:images.iron} alt="iron" id={`iron-${type}`} onClick={handleWash}/>
            <img src={fold? images.foldBlue: images.fold} alt="folding" id={`fold-${type}`} onClick={handleWash}/>
            <img src={bleach?images.bleachBlue: images.bleach} alt ="bleach" id={`bleach-${type}`} onClick={handleWash}/>            
        </div>

        <div className="order-price">
            {price? <p>{`${qty} X ${washcost}`} = { `${price}`}</p>:
            <p>___</p>
            }
        </div>
        
        <div className="order-reset">
            <button type="reset" className="order-reset-button" id={`reset-${type}`} onClick={handleReset}>Reset</button>
        </div>
    </div>
    )
}

export default Product