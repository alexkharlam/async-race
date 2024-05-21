import { ChangeEvent, useState } from 'react';

const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const resetInput = () => {
    setInputValue('');
  };

  return { inputValue, handleInput, resetInput };
};

export default useInput;
