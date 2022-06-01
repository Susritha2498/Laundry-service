import { images } from '../../constants'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
const [home,setHome] = useState(false)
const [add,setAdd] = useState(false)
const [list,setList] = useState(false)
const handleHome = ()=>{
  setHome(!home)
  if(home){
    setAdd(false)
    setList(false)
  }
}
const handleAdd = ()=>{
  setAdd(!add)
  if(add){
    setHome(false)
    setList(false)
  }
}
const handleList = ()=>{
  setList(!list)
  if(list){
    setHome(false)
    setAdd(false)
  }
}
  return (
    <div className='app-sidebar'>
      <Link to='/'>
        <div className='app-side-icon'>
        <img src={home?images.homeBlue:images.home} alt="Home" className={home?'icon-active':'icon-inactive'} onClick={()=>handleHome}/>
        </div>
      </Link>

      <Link to='/createorder'>
        <div className='app-side-icon'>
          <img src={add?images.addBlue:images.add} alt="addnew" className={add?'icon-active':'icon-inctive'} onClick={()=>handleAdd}/>
        </div>
      </Link>

      <Link to='/orders'>
      <div className='app-side-icon'>
        <img src={list?images.listBlue:images.list} alt="orderslist" className={list?'icon-active':'icon-inactive'} onClick={()=>handleList}/>
      </div>
      </Link>

    </div>
  )
}

export default Sidebar