import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-5'>
        <Link to='/product/men' className='text-xl font-semibold'>Men </Link>
        <Link to='/product/women' className='text-xl font-semibold'>Women </Link>
      </div>

    

      <Outlet />
    </div>
  )
}

export default Product
