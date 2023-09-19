import React, {useEffect} from 'react';
import useChatData from '../../hooks/useChatData';

const ChatRoom = () => {
  useChatData();
  return <div id='chat-room'>mainpage</div>;
};

export default ChatRoom;
