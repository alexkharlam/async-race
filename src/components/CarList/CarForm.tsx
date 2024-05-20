import { X } from 'react-feather';
import { ChromePicker, ColorResult } from 'react-color';
import { FormEvent, useState, ChangeEvent } from 'react';

type Props = {
  onClose: () => void;
  onSubmit: (name: string, color: string) => void;
  initialColor: string;
  initialName: string;
};

export default function CarForm({ onClose, onSubmit, initialColor, initialName }: Props) {
  const [name, setName] = useState(initialName);
  const [color, setColor] = useState(initialColor);
  const handleChangeColor = (newColor: ColorResult) => {
    setColor(newColor.hex);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(name, color);
    setName('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-30 border-rose-800 border- shadow-md shadow-slate-500"
    >
      <button
        className="absolute text-1xl -top-1.5 -right-1.5 bg-pink-700 rounded-full text-white"
        type="button"
        onClick={onClose}
      >
        <X />
      </button>
      <input
        required
        value={name}
        onChange={handleChange}
        id="name"
        className="w-full px-1 py-2 text-black"
        placeholder="Car name"
      />
      <ChromePicker color={color} onChange={handleChangeColor} />
      <button
        className="w-full disabled:bg-gray-800 text-center py-2 bg-blue-primary text-gray-100 font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
