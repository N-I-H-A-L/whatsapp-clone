import React from 'react'
import './Sidebar.css';
import SidebarChat from './SidebarChat';

import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton, Avatar } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='sidebar-div'>
      <div className="sidebar-header">
        <Avatar />
        <div className="sidebar-header-icons">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-inside">
          <SearchOutlined />
          <input type="text" placeholder="Search or create new chat" id="search-chat" name="search-chat"/>
        </div>
      </div>

      <div className="sidebar-chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
