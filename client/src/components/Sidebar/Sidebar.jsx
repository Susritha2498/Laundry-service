import { images } from '../../constants'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='app-sidebar'>
      <div className='app-side-icon1'><img src={images.home} alt="Home" id='side1'/></div>
      <div className='app-side-icon1'><img src={images.add} alt="addnew" id='side2'/></div>
      <div className='app-side-icon2'><img src={images.list} alt="orderslist" id='side3'/></div>
    </div>
  )
}

export default Sidebar