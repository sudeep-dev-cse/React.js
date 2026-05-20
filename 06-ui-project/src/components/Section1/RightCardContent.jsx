import React from 'react'

const tagColors = {
  Satisfied:   { bg: 'rgba(20,184,166,0.2)',  border: 'rgba(20,184,166,0.4)',  text: '#5eead4' },
  Underserved: { bg: 'rgba(99,102,241,0.2)',  border: 'rgba(99,102,241,0.4)',  text: '#a5b4fc' },
  Underbanked: { bg: 'rgba(245,158,11,0.2)',  border: 'rgba(245,158,11,0.4)',  text: '#fcd34d' },
}

const quotes = {
  Satisfied:   '"Finova gave me the financial confidence I never had. Seamless, fast, and truly personal."',
  Underserved: '"For the first time, I feel like a bank is actually on my side — not against me."',
  Underbanked: '"Access to credit felt impossible. Finova changed everything for my family."',
}

const RightCardContent = ({ idx, tag }) => {
  const color  = tagColors[tag]  || tagColors.Satisfied
  const quote  = quotes[tag]     || quotes.Satisfied
  const num    = String(idx + 1).padStart(2, '0')

  return (
    <div className='absolute inset-0 flex flex-col justify-between p-7 rounded-4xl'
      style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.92) 100%)' }}>

      {/* Top — number badge */}
      <div className='flex items-center justify-between'>
        <div className='number-badge w-11 h-11 rounded-2xl flex items-center justify-center text-white text-base'
          style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
          {num}
        </div>

        {/* Small status dot */}
        <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full'
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <span className='w-1.5 h-1.5 rounded-full' style={{ background: color.text }}></span>
          <span className='text-white/60 text-xs font-medium'>Client</span>
        </div>
      </div>

      {/* Bottom — quote + tag + arrow */}
      <div>
        {/* Quote */}
        <p className='text-white/85 text-sm leading-relaxed mb-5 font-light italic'>
          {quote}
        </p>

        {/* Divider */}
        <div className='mb-5' style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>

        {/* Footer row */}
        <div className='flex items-center justify-between'>
          {/* Tag */}
          <span className='tag-pill text-xs font-semibold px-4 py-1.5 rounded-full'
            style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.text }}>
            {tag}
          </span>

          {/* Arrow button */}
          <button
            className='arrow-btn w-9 h-9 rounded-full flex items-center justify-center text-white transition-all'
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}
            aria-label={`View ${tag} story`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
