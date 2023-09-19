import {useEffect, useState} from 'react';

const useInputWithDebounce = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [validCheck, setValidCheck] = useState(false);

  useEffect(() => {
    const inputSearch = setTimeout(() => {
      setDebouncedValue(inputValue);

      if (inputValue.trim().length > 0) {
        setValidCheck(true);
      } else {
        setValidCheck(false);
      }
    }, 400);
    console.log(inputValue);
    return () => {
      clearTimeout(inputSearch);
    };
  }, [inputValue]);

  return {inputValue, debouncedValue, setInputValue, setDebouncedValue, validCheck};
};

export default useInputWithDebounce;
