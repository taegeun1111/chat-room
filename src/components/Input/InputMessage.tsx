import React, {ChangeEvent, useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useInputWithDebounce from '../../hooks/useInputWithDebounce';

interface Props {
  addChat: (debouncedValue: string) => void;
}

const InputMessage = ({addChat}: Props) => {
  const {inputValue, setInputValue, debouncedValue, validCheck} = useInputWithDebounce();
  const [clickFlag, setClickFlag] = useState(true);

  const inputChatHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendChatHandler = () => {
    if (validCheck && clickFlag) {
      setClickFlag(false);
      addChat(debouncedValue);
      setInputValue('');
      setTimeout(() => {
        setClickFlag(true);
      }, 1000);
    }
  };

  const pressEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && validCheck && clickFlag) {
      setClickFlag(false);
      addChat(debouncedValue);
      setInputValue('');
      setTimeout(() => {
        setClickFlag(true);
      }, 1000);
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
          className={validCheck && clickFlag ? 'active-input-arrow' : 'inactive-input-arrow'}
          onClick={sendChatHandler}
        />
      </section>
    </div>
  );
};

export default InputMessage;
