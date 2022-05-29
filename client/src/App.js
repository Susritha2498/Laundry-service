import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Navbar,Footer,SignIn,SignUp,PastOrders,CreateOrder,Summary} from "./components/index"

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/orders" element={<PastOrders/>}/>
        <Route path ="/createorder" element={<CreateOrder/>}/>
        <Route path ="/checkout" element={<Summary/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
