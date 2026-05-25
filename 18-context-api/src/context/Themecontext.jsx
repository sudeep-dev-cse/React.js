import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

const Themecontext = (props) => {

  const [title, setTitle] = useState('Light')

  return (
    <div>
     <ThemeContext.Provider value={{ title, setTitle }}>
        {props.children}
     </ThemeContext.Provider>
    </div>
  )
}

export default Themecontext

