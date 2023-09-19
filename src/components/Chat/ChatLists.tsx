import React from 'react';
import {ChatData} from '../../types/chat';

interface Props {
  messagesList: ChatData[];
  formatTime: (timeString: string) => string;
  formatDate: (timeString: string) => string;
  formatText: (msg: string) => string[];
}

const ChatLists = ({messagesList, formatTime, formatText, formatDate}: Props) => {
  return (
    <ul id='chat-lists'>
      {messagesList.map((message, index) => (
        <li key={message.id}>
          {(index === 0 ||
            message.create_at.split(' ')[0] !==
              messagesList[index - 1].create_at.split(' ')[0]) && (
            <div className='date-wrapper'>{formatDate(message.create_at)}</div>
          )}

          {message.user_id === 1 && (
            <div className='sender-wrapper'>
              <div className='sender-time'>{formatTime(message.create_at)}</div>
              <div className='sender-msg'>
                {formatText(message.msg).map((lines, index) => (
                  <React.Fragment key={index}>
                    {lines}
                    {index < lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {message.user_id === 2 && (
            <div className='reply-wrapper'>
              <section className={'reply-info'}>
                <img src={message.photo_url} alt='photo_url' className='reply-img' />
                <div className='reply-user-name'>{message.user_name}</div>
              </section>
              <section className={'reply-text'}>
                <div className='reply-msg'>
                  {formatText(message.msg).map((lines, index) => (
                    <React.Fragment key={index}>
                      {lines}
                      {index < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                <div className='reply-time'>{formatTime(message.create_at)}</div>
              </section>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ChatLists;
