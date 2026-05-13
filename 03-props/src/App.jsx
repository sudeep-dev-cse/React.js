import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
   <div className ='parent'>
     < Card  user ='gyanu ' age = {24} img = "https://images.unsplash.com/photo-1778409445285-2c63c0c2ecca?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixhttps://plus.unsplash.com/premium_photo-1752453987913-ff1c96b20d6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      < Card  user ='Sudeep' age = {21} img = "https://images.unsplash.com/photo-1770723963970-ace02c7db50e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2N3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" />
   </div>
  )
}

export default App
