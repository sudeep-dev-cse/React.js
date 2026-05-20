import React from 'react'
import Navbar from './Navbar'
import Page1Content from './page1Content'

const Section1 = (props) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#0a0a0f' }}>
      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        top: '-150px', right: '-100px', filter: 'blur(80px)', pointerEvents: 'none'
      }}/>
      <div style={{
        position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(20,184,166,0.10) 0%, transparent 70%)',
        bottom: '-100px', left: '100px', filter: 'blur(80px)', pointerEvents: 'none'
      }}/>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Page1Content users={props.users} />
      </div>
    </div>
  )
}

export default Section1
