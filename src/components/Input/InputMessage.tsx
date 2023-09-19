import React, {ChangeEvent, useEffect, useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useInputWithDebounce from '../../hooks/useInputWithDebounce';
import {ChatData} from '../../types/chat';

interface Props {
  addChat: (debouncedValue: string) => void;
}

const InputMessage = ({addChat}: Props) => {
  const {inputValue, setInputValue, debouncedValue, validCheck} = useInputWithDebounce();
  const inputChatHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendChatHandler = () => {
    if (validCheck) {
      addChat(debouncedValue);
      setInputValue('');
    }
  };

  const pressEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && validCheck) {
      addChat(debouncedValue);
      setInputValue('');
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
