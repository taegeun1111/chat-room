import React, {useEffect} from 'react';
import {fetchData} from '../../apis';

const ChatRoom = () => {
  useEffect(() => {
    fetchData();
  });

  return <div id='chat-room'>mainpage</div>;
};

export default ChatRoom;
