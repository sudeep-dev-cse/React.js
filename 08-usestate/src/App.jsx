import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increaseNum(){
    setnum(num + 1)
  }

  function decreaseNum(){
    setnum(num - 1)
  }

  return (
    <div className='main'>

      <div className='counter-card'>
        
        <h1>{num}</h1>

        <div className='btns'>
          <button className='inc' onClick={increaseNum}>
            Increase
          </button>

          <button className='dec' onClick={decreaseNum}>
            Decrease
          </button>
        </div>

      </div>

    </div>
  )
}

export default App