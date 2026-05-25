import React, { useContext } from 'react'
import { ThemeContext } from '../context/Themecontext'

const Button = () => {

  const { title, setTitle } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTitle(title === 'light' ? 'dark' : 'light')
  }

  return (
    <button onClick={toggleTheme}>
      Change Theme
    </button>
  )
}

export default Button