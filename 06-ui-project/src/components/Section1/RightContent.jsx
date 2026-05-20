import React from 'react'
import RightCard from './RightCard'

const RightContent = ({ users = [] }) => {
  return (
    <div
      id='right'
      style={{
        flex: 1,
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '20px',
        overflowX: 'auto',
        padding: '8px',
        scrollbarWidth: 'none',
        alignItems: 'center',
        minHeight: '480px',
      }}
    >
      {users.map((elem, idx) => (
        <RightCard
          key={idx}
          idx={idx}
          img={elem.img.trim()}
          tag={elem.tag}
        />
      ))}
    </div>
  )
}

export default RightContent
