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
        <>
          {message.user_id === 1 && (
            <li key={message.id} className='sender-wrapper'>
              <div className='sender-time'>{formatTime(message.create_at)}</div>
              <div className='sender-msg'>{message.msg}</div>
            </li>
          )}

          {message.user_id === 2 && (
            <li key={message.id} className='reply-wrapper'>
              <section className={'reply-info'}>
                <img src={message.photo_url} alt='photo_url' className='reply-img' />
                <div className='reply-user-name'>{message.user_name}</div>
              </section>
              <section className={'reply-text'}>
                <div className='reply-msg'>{message.msg}</div>
                <div className='reply-time'>{formatTime(message.create_at)}</div>
              </section>
            </li>
          )}
        </>
      ))}
    </ul>
  );
};

export default ChatLists;
