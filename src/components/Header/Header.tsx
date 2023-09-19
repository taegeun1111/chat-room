import React from 'react';
import {replyData} from '../../types/chat';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface Props {
  replyInfo: replyData;
}

const Header = ({replyInfo}: Props) => {
  return (
    <div id='header'>
      <ChevronLeftIcon className='back-btn' />

      <section className='header-info-wrapper'>
        <img className='header-img' src={replyInfo.photo_url} alt={'photo_url'} />
        <div className='header-user-name'>{replyInfo.user_name}</div>
      </section>
    </div>
  );
};

export default Header;
