import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import { Routes, Route } from 'react-router-dom'
import Pagenotfound from './Pages/Pagenotfound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Courses from './Pages/Courses'
import CoursesDetail from './Pages/CoursesDetail'
import Navbar2 from './component/Navbar2'


const App = () => {
  return (
    <div className=' h-screen bg-black text-white'>
        <Navbar />
        <Navbar2 />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          
       <Route path='/courses' element={<Courses />} />
       <Route path='/courses/:id' element={<CoursesDetail />} />
          <Route path='/product' element={<Product />} >
          
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          </ Route>
          <Route path='*' element={<Pagenotfound />} />
          

        </Routes>

        <Footer />

    </div>
  )
}

export default App
