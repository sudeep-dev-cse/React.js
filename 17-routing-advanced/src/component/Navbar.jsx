import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex justify-between px-8 py-4 bg-cyan-800 text-white'>
      <h2 className='text-xl font-bold'>Navbar</h2>

      <div className='flex gap-10 mt-4'>
        <Link to='/'  className=' text-lg font-medium '>Home</Link>
        <Link to='/about'  className=' text-lg font-medium '>About</Link>
        <Link to='/product'  className=' text-lg font-medium '>Product</Link>
        <Link to='/courses'  className=' text-lg font-medium '>Courses</Link>
      </div>

    </div>
  )
}

export default Navbar
