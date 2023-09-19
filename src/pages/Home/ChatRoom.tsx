import React, {useEffect} from 'react';
import useChatData from '../../hooks/useChatData';
import Header from '../../components/Header/Header';
import InputMessage from '../../components/Input/InputMessage';
import ChatLists from '../../components/Chat/ChatLists';

const ChatRoom = () => {
  const {writerInfo, messagesList, formatTime, formatText} = useChatData();

  return (
    <div id='chat-room'>
      <Header replyInfo={writerInfo} />
      <ChatLists messagesList={messagesList} formatTime={formatTime} formatText={formatText} />
      <InputMessage />
    </div>
  );
};

export default ChatRoom;
