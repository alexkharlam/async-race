import { X } from 'react-feather';
import { ChromePicker, ColorResult } from 'react-color';
import { FormEvent, useState, ChangeEvent } from 'react';

type Props = {
  onClose: () => void;
  onSubmit: (name: string, color: string) => void;
  error: boolean;
  initialColor: string;
};

export default function CarForm({
  onClose,
  onSubmit,
  error,
  initialColor,
}: Props) {
  const [name, setName] = useState('');
  const [color, setColor] = useState(initialColor);
  const handleChangeColor = (newColor: ColorResult) => {
    setColor(newColor.hex);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName('');
    onSubmit(name, color);
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
        className="absolute text-1xl -top-1.5 -right-1.5 bg-red-800 rounded-full text-white"
        type="button"
        onClick={onClose}
      >
        <X />
      </button>
      {error && (
        <p className="bg-white p-1 text-red-500">
          Error creating car. Try again!
        </p>
      )}
      <input
        onChange={handleChange}
        id="name"
        className="w-full px-1 py-2"
        placeholder="Car name"
      />
      <ChromePicker color={color} onChange={handleChangeColor} />
      <button
        disabled={name.length === 0}
        className="w-full disabled:bg-gray-800 text-center py-2 bg-rose-800 text-gray-100 font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}