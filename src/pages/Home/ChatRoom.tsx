import React, {useEffect} from 'react';
import useChatData from '../../hooks/useChatData';
import Header from '../../components/Header/Header';
import InputMessage from '../../components/Input/InputMessage';

const ChatRoom = () => {
  const {writerInfo, messagesList} = useChatData();

  return (
    <div id='chat-room'>
      <Header writerInfo={writerInfo} />
      <InputMessage />
    </div>
  );
};

export default ChatRoom;
