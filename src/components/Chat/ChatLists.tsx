import React, {useEffect, useRef, useState} from 'react';
import {ChatData} from '../../types/chat';
import Modal from './Modal';
import {REPLY, SEND} from '../../constants/constants';

interface Props {
  messagesList: ChatData[];
  formatTime: (timeString: string) => string;
  formatDate: (timeString: string) => string;
  formatText: (msg: string) => string[];
  copyText: (copyText: string) => void;
}

const ChatLists = ({messagesList, formatTime, formatText, formatDate, copyText}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const messagesRef = useRef<HTMLUListElement>(null); // 메시지 엘리먼트를 저장

  const modalHandler = (url: string) => {
    setImgUrl(url);
    setShowModal(true);
  };

  const closeHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    messagesRef.current!.scrollTop = messagesRef.current!.scrollHeight;
  }, [messagesList]);

  return (
    <>
      {showModal && <Modal imgUrl={imgUrl} closeHandler={closeHandler} />}
      <ul id='chat-lists' ref={messagesRef}>
        {messagesList.map((message, index) => (
          <li key={message.id}>
            {(index === 0 ||
              message.create_at.split(' ')[0] !==
                messagesList[index - 1].create_at.split(' ')[0]) && (
              <div className='date-wrapper'>{formatDate(message.create_at)}</div>
            )}

            {message.user_id === SEND && (
              <div className='sender-wrapper'>
                <div className='sender-time'>{formatTime(message.create_at)}</div>
                <div className='sender-msg' onClick={() => copyText(message.msg)}>
                  {formatText(message.msg).map((lines, index) => (
                    <React.Fragment key={index}>
                      {lines}
                      {index < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {message.user_id === REPLY && (
              <div className='reply-wrapper'>
                <section className={'reply-info'}>
                  <img
                    src={message.photo_url}
                    alt='photo_url'
                    className='reply-img'
                    onClick={() => message.photo_url && modalHandler(message.photo_url)}
                  />
                  <div className='reply-user-name'>{message.user_name}</div>
                </section>
                <section className={'reply-text'}>
                  <div className='reply-msg' onClick={() => copyText(message.msg)}>
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
    </>
  );
};

export default ChatLists;
