import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MicOutlined, MoreVert, SearchOutlined } from '@mui/icons-material';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';

const Chat = () => {
  return (
    <div className='chat-div'>
      <div className="chat-header">
        <div className="chat-header-left">
          <Avatar />
          <div className="chat-header-info">
            <h3>Room Name</h3>
            <p>Last seen at...</p>
          </div>
        </div>

        <div className="chat-header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat-content">
        <div className="chat-message">
          <p>
            <span className="sender-name">Nihal</span>
            <div className="chat-message-timestamp">
              <span className='message-content'>This is my message</span>
              <div className='sender-timestamp'>{(new Date().toUTCString()).slice(0, 22)}</div>
            </div>
          </p>
        </div>
        

        
        <div className="chat-message">
          <p className='message-sent-para'>
            <span className="sender-name receiver-name">Nihal</span>
            <div className="chat-message-timestamp message-sent">
              <span className='message-content'>This is my message Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque iste distinctio corrupti non ullam error unde earum, enim voluptatum accusantium autem nihil, ex nobis minima soluta perferendis dolorem, assumenda aperiam iure esse obcaecati placeat.</span>
              <div className='receiver-timestamp'>{(new Date().toUTCString()).slice(0, 22)}</div>
            </div>
          </p>
        </div>
      </div>

      

      <div className='chat-send-message'>
        <div className="chat-send-message-inside">
          <IconButton>
            <InsertEmoticonOutlinedIcon />
          </IconButton>
          <form class="send-message-form">
            <input for='text' placeholder='Type a message' size="50" id="chat-message-input"/>
            <button type="submit" id="send-message-btn">Send the message</button>
          </form>
          <IconButton>
            <MicOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Chat
