import React, {ChangeEvent, useEffect, useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useInputWithDebounce from '../../hooks/useInputWithDebounce';

const InputMessage = () => {
  const {inputValue, setInputValue, setDebouncedValue, debouncedValue, validCheck} =
    useInputWithDebounce();
  const inputChatHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendChatHandler = () => {
    if (validCheck) {
      console.log('wewr');
    }
  };

  const pressEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && validCheck) {
      console.log('123');
    }
  };

  return (
    <div id='input'>
      <button type='button' className='plus-btn'>
        +
      </button>

      <section className='input-text-wrapper'>
        <input
          type='text'
          placeholder='메세지를 입력해주세요'
          className='input-text'
          autoFocus={true}
          value={inputValue}
          onChange={inputChatHandler}
          onKeyDown={pressEnterHandler}
        />

        <ArrowUpwardIcon
          className={validCheck ? 'active-input-arrow' : 'inactive-input-arrow'}
          onClick={sendChatHandler}
        />
      </section>
    </div>
  );
};

export default InputMessage;
