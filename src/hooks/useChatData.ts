import {useEffect, useState} from 'react';
import {fetchData} from '../apis';
import {ResponseData, ChatData, replyData} from '../types/chat';
import {REPLY, SEND} from '../constants/constants';

const useChatData = () => {
  const [messagesList, setMessagesList] = useState<ChatData[]>([]);
  const [replyInfo, setReplyInfo] = useState<replyData>({
    user_name: '',
    photo_url: '',
  });
  const [writerName, setWriterName] = useState('');

  const getChat = async () => {
    const data: ResponseData[] = await fetchData();

    const messages: ChatData[] = [];
    let currentWriterInfo: replyData = {
      user_name: '',
      photo_url: '',
    };

    data
      .filter(result => result.msg.mtype === 'text')
      .map(result => {
        messages.push({
          user_id: result.user_id,
          user_name: result.user_name,
          create_at: result.created_at,
          id: result.id,
          msg: result.msg.content,
          photo_url: result.photo_url,
        });

        if (result.user_id === REPLY) {
          if (result.user_name !== currentWriterInfo.user_name) {
            currentWriterInfo = {
              user_name: result.user_name,
              photo_url: result.photo_url,
            };
          }
        } else if (result.user_id === SEND) {
          if (result.user_name !== currentWriterInfo.user_name) {
            setWriterName(result.user_name);
          }
        } else {
          alert('작성자 이름 또는 수신 에러가 발생했습니다.');
        }
      });
    setMessagesList(sortData(messages));
    setReplyInfo(currentWriterInfo);
  };

  const addChat = (debouncedValue: string) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const lastId = messagesList.reduce((maxId, message) => Math.max(maxId, message.id), 0);

    const newChat = {
      user_id: SEND,
      user_name: writerName,
      create_at: formattedDate,
      id: lastId + 1,
      msg: debouncedValue,
    };
    setMessagesList([...messagesList, newChat]);
  };

  const sortData = (messages: ChatData[]) => {
    return messages.sort((a, b) => {
      if (a.create_at === b.create_at) {
        return b.id - a.id;
      }
      return new Date(a.create_at).getTime() - new Date(b.create_at).getTime();
    });
  };

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const distinguishHour = hours < 12 ? '오전' : '오후';

    if (hours > 12) hours -= 12;

    return `${distinguishHour} ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  const formatDate = (timeString: string) => {
    const date = new Date(timeString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };

  const formatText = (msg: string) => {
    const text = msg.split('\\n');
    return text;
  };

  useEffect(() => {
    getChat();
  }, []);

  return {
    messagesList,
    writerInfo: replyInfo,
    formatTime,
    formatText,
    formatDate,
    setMessagesList,
    addChat,
  };
};

export default useChatData;
