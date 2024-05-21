import { ChromePicker } from 'react-color';
import { FormEvent } from 'react';
import useInput from '../../hooks/useInput.ts';
import useColorPicker from '../../hooks/useColorPicker.ts';
import CloseIconButton from '../ui/CloseIconButton.tsx';

type Props = {
  onClose: () => void;
  onSubmit: (name: string, color: string) => void;
  initialColor: string;
  initialName: string;
};

export default function CarForm({ onClose, onSubmit, initialColor, initialName }: Props) {
  const { inputValue, handleInput, resetInput } = useInput(initialName);
  const { handleColor, color } = useColorPicker(initialColor);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(inputValue, color);
    resetInput();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-30 border-rose-800 border- shadow-md shadow-slate-500"
    >
      <CloseIconButton onClick={onClose} />
      <input
        required
        value={inputValue}
        onChange={handleInput}
        id="name"
        className="w-full px-1 py-2 text-black"
        placeholder="Car name"
      />
      <ChromePicker color={color} onChange={handleColor} />
      <button
        className="w-full disabled:bg-gray-800 text-center py-2 bg-blue-primary text-gray-100 font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
