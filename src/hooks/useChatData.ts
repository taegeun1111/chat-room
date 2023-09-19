import {useEffect, useState} from 'react';
import {fetchData} from '../apis';
import {ResponseData, ChatData, replyData} from '../types/chat';
import {set} from 'husky';

const useChatData = () => {
  const [messagesList, setMessagesList] = useState<ChatData[]>([]);
  const [replyInfo, setReplyInfo] = useState<replyData>({
    user_name: '',
    photo_url: '',
  });

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

        if (result.user_id === 2) {
          if (result.user_name !== currentWriterInfo.user_name) {
            currentWriterInfo = {
              user_name: result.user_name,
              photo_url: result.photo_url,
            };
          }
        }
      });

    setMessagesList(sortData(messages));
    setReplyInfo(currentWriterInfo);
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

  useEffect(() => {
    getChat();
  }, []);

  return {messagesList, writerInfo: replyInfo, formatTime};
};

export default useChatData;
