import React from 'react'
import LeftContent from '../LeftContent'
import RightContent from './RightContent'

// FIXED: accept props and forward users to RightContent
const Page1Content = (props) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '48px',
      padding: '40px 64px',
      minHeight: 'calc(100vh - 90px)',
    }}>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
