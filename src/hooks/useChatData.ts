import {useEffect, useState} from 'react';
import {fetchData} from '../apis';
import {ResponseData, ChatData} from '../types/chat';

const useChatData = () => {
  const [sendList, setSendList] = useState<ChatData[]>([]);
  const [replyList, setReplyList] = useState<ChatData[]>([]);

  const getChat = async () => {
    const data: ResponseData[] = await fetchData();

    const sendMessages: ChatData[] = [];
    const replyMessages: ChatData[] = [];

    data
      .filter(result => result.msg.mtype === 'text')
      .map(result => {
        if (result.user_id === 1) {
          sendMessages.push({
            user_id: result.user_id,
            create_at: new Date(result.created_at),
            id: result.id,
            msg: result.msg.content,
          });
        } else if (result.user_id === 2) {
          replyMessages.push({
            user_id: result.user_id,
            create_at: new Date(result.created_at),
            id: result.id,
            msg: result.msg.content,
            photo_url: result.photo_url,
          });
        }
      });
    const sortedSendMessages = sortData(sendMessages);
    const sortedReplyMessages = sortData(replyMessages);

    setSendList(sortedSendMessages);
    setReplyList(sortedReplyMessages);
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
};

export default useChatData;
