import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material'

const SidebarChat = () => {
  return (
    <div className='sidebarchat-div'>
      <div className="sidebarchat-chat">
        <Avatar />
        <div className="sidebarchat-content">
            <h2 className='sidebarchat-name'>Room 1</h2>
            <p className='sidebarchat-message'>This is the last message.</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarChat
