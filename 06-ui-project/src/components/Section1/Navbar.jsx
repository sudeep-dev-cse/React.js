import React, { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const links = ['Home', 'Services', 'About', 'Contact']

  return (
    <nav className='relative z-10 flex items-center justify-between px-18 py-6'>
      {/* Logo */}
      <div className='flex items-center gap-3'>
        <div className='w-9 h-9 rounded-xl flex items-center justify-center'
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" fillOpacity="0.9"/>
            <path d="M9 3L13.5 7.5L9 12L9 3Z" fill="white" fillOpacity="0.5"/>
          </svg>
        </div>
        <span className='font-display font-700 text-white text-lg tracking-tight'>Finova</span>
      </div>

      {/* Links */}
      <div className='nav-glass flex items-center gap-1 rounded-full px-2 py-2'
        style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
        {links.map(link => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              active === link
                ? 'text-white'
                : 'text-white/50 hover:text-white/80'
            }`}
            style={active === link ? {
              background: 'linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.3))',
              border: '1px solid rgba(99,102,241,0.3)'
            } : {}}
          >
            {link}
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className='flex items-center gap-3'>
        <button className='text-white/60 text-sm font-medium hover:text-white transition-colors duration-200'>
          Log in
        </button>
        <button
          className='text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105'
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
        >
          Get started
        </button>
      </div>
    </nav>
  )
}

export default Navbar
