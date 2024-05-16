import { X } from 'react-feather';
import { ChromePicker, ColorResult } from 'react-color';
import { FormEvent, useState, ChangeEvent } from 'react';
import { createCar } from '../../utils/api.ts';

type Props = {
  onClose: () => void;
  onNewCar: () => void;
};

export default function NewCarForm({ onClose, onNewCar }: Props) {
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [color, setColor] = useState('#333333');
  const handleChangeColor = (newColor: ColorResult) => {
    setColor(newColor.hex);
  };

  const handleCreateCar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await createCar(color, name);

      if (res.status === 201) {
        setName('');
        onNewCar();
        onClose();
      }
    } catch (err) {
      setError(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);

    setName(e.target.value);
  };

  return (
    <form
      onSubmit={handleCreateCar}
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
        Create car
      </button>
    </form>
  );
}
