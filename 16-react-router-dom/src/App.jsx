
import React from 'react'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Navbar from './component/Navbar'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div >
    <Navbar />

     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Product />} />
     </Routes>

    </div>
  )
}

export default App
