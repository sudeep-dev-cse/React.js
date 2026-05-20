import React from 'react'

const stats = [
  { value: '98K+',  label: 'Active users',       color: '#a5b4fc' },
  { value: '$2.4B', label: 'Assets managed',      color: '#5eead4' },
  { value: '4.9★',  label: 'App Store rating',    color: '#fcd34d' },
]

const LeftContent = () => {
const LeftContent = () => {
  return (
    <div style={{ flexShrink: 0, width: '320px', display: 'flex', flexDirection: 'column' }}>

      {/* Eyebrow */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '6px 14px', borderRadius: '999px', alignSelf: 'flex-start',
        background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)',
        marginBottom: '22px'
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8', display: 'inline-block' }}></span>
        <span style={{ fontSize: '11px', fontWeight: 500, color: '#a5b4fc' }}>Real client stories</span>
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: "'Syne', sans-serif", fontSize: '44px', fontWeight: 800,
        color: '#fff', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '18px'
      }}>
        Finance that{' '}
        <span style={{ background: 'linear-gradient(135deg,#a5b4fc,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>works</span>
        {' '}for{' '}
        <span style={{ background: 'linear-gradient(135deg,#5eead4,#14b8a6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>everyone</span>
      </h1>

      {/* Body */}
      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.75, marginBottom: '28px', fontWeight: 300 }}>
        We serve the satisfied, the underserved, and the underbanked — because everyone deserves
        a financial partner that truly understands their journey.
      </p>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '28px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px', padding: '12px 14px'
          }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '18px', color: s.color, marginBottom: '3px' }}>{s.value}</div>
            <div style={{ color: 'rgba(255,255,255,0.36)', fontSize: '10.5px', lineHeight: 1.3 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button style={{
          background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', border: 'none',
          color: '#fff', fontSize: '13px', fontWeight: 600, padding: '10px 22px',
          borderRadius: '999px', cursor: 'pointer', fontFamily: 'inherit'
        }}>
          View all stories
        </button>
        <button style={{
          background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)',
          fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '6px'
        }}>
          Learn more →
        </button>
      </div>
    </div>
  )
}
}

export default LeftContent
