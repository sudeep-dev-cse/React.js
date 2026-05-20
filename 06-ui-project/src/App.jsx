import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1604914509312-540348e66c81?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1684262855346-cc759471e3ea?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/photo-1692459411784-98fe200a437a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underbanked',
    },
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
