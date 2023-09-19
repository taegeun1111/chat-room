import {useEffect, useState} from 'react';
import {fetchData} from '../apis';
import {ResponseData, ChatData, WriterData} from '../types/chat';
import {set} from 'husky';

const useChatData = () => {
  const [messagesList, setMessagesList] = useState<ChatData[]>([]);
  const [writerInfo, setWriterInfo] = useState<WriterData>({
    user_name: '',
    photo_url: '',
  });

  const getChat = async () => {
    const data: ResponseData[] = await fetchData();

    const messages: ChatData[] = [];
    let currentWriterInfo: WriterData = {
      user_name: '',
      photo_url: '',
    };

    data
      .filter(result => result.msg.mtype === 'text')
      .map(result => {
        messages.push({
          user_id: result.user_id,
          user_name: result.user_name,
          create_at: new Date(result.created_at),
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
    setWriterInfo(currentWriterInfo);
  };

  const sortData = (messages: ChatData[]) => {
    return messages.sort((a, b) => {
      if (a.create_at === b.create_at) {
        return a.id - b.id;
      }
      return a.create_at.getTime() - b.create_at.getTime();
    });
  };

  useEffect(() => {
    getChat();
  }, []);

  return {messagesList, writerInfo};
};

export default useChatData;
