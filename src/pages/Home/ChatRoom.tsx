import React, {useEffect} from 'react';
import useChatData from '../../hooks/useChatData';
import Header from '../../components/Header/Header';

const ChatRoom = () => {
  const {writerInfo, messagesList} = useChatData();

  return (
    <div id='chat-room'>
      <Header writerInfo={writerInfo} />
    </div>
  );
};

export default ChatRoom;
