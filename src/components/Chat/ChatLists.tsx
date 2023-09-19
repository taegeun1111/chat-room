import React from 'react';
import {ChatData} from '../../types/chat';

interface Props {
  messagesList: ChatData[];
  formatTime: (timeString: string) => string;
}

const ChatLists = ({messagesList, formatTime}: Props) => {
  return (
    <ul id='chat-lists'>
      {messagesList.map(message => (
        <li key={message.id}>
          {message.user_id === 1 && (
            <>
              <div>{formatTime(message.create_at)}</div>
              <div className='test'>{message.msg}</div>
            </>
          )}
          {message.user_id === 2 && (
            <>
              <section className={'test'}>
                <img src={message.photo_url} alt='photo_url' />
                <div>{message.user_name}</div>
              </section>
              <div>{formatTime(message.create_at)}</div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ChatLists;
