import { useState } from 'react';
import { ColorResult } from 'react-color';

const useColorPicker = (initialColor: string) => {
  const [color, setColor] = useState(initialColor);

  const handleColor = (newColor: ColorResult) => {
    setColor(newColor.hex);
  };

  return { color, handleColor };
};

export default useColorPicker;
