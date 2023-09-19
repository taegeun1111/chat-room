import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const InputMessage = () => {
  return (
    <div id='input'>
      <button type='button' className='plus-btn'>
        +
      </button>

      <section className='input-text-wrapper'>
        <input type='text' placeholder='메세지를 입력해주세요' className='input-text' />
        <ArrowUpwardIcon className='input-arrow' />
      </section>
    </div>
  );
};

export default InputMessage;
