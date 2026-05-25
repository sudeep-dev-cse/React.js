import React, { useContext } from 'react'
import { ThemeContext } from '../context/Themecontext'

const Navbar2 = () => {
 
  const { title, setTitle } = useContext(ThemeContext)

  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>Contact</h4>
      <h4>About</h4>
      <h4>Services</h4>
      <h4>{title}</h4>
    </div>
  )
}

export default Navbar2