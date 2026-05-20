import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = ({ idx, img, tag }) => {
  return (
    <div
      className={`user-card card-animate card-animate-${idx + 1}`}
      style={{
        height: '430px',
        width: '270px',
        flexShrink: 0,
        position: 'relative',
        borderRadius: '28px',
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
        cursor: 'pointer',
      }}
    >
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
        src={img}
        alt={`${tag} client`}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      <RightCardContent idx={idx} tag={tag} />
    </div>
  )
}

export default RightCard
