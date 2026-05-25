import React, { useContext } from 'react'
import Naavbar2 from './Navbar2'
import { ThemeContext } from '../context/Themecontext'

const Navbar = () => {

  const {title} = useContext(ThemeContext)

  return (
    <div className={title}>
      <h2>{title}</h2>
      <Naavbar2 />
    </div>
  )
}

export default Navbar