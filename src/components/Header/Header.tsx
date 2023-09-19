import React from 'react';
import {WriterData} from '../../types/chat';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface Props {
  writerInfo: WriterData;
}

const Header = ({writerInfo}: Props) => {
  return (
    <div id='header'>
      <ChevronLeftIcon className='back-btn' />

      <section className='header-info-wrapper'>
        <img className='header-img' src={writerInfo.photo_url} alt={'photo_url'} />
        <div className='header-user-name'>{writerInfo.user_name}</div>
      </section>
    </div>
  );
};

export default Header;
