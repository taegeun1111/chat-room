import React, {useEffect} from 'react';
import useChatData from '../../hooks/useChatData';
import Header from '../../components/Header/Header';
import InputMessage from '../../components/Input/InputMessage';
import ChatLists from '../../components/Chat/ChatLists';

const ChatRoom = () => {
  const {writerInfo, messagesList, formatTime} = useChatData();

  return (
    <div id='chat-room'>
      <Header writerInfo={writerInfo} />
      <ChatLists messagesList={messagesList} formatTime={formatTime} />
      <InputMessage />
    </div>
  );
};

export default ChatRoom;
