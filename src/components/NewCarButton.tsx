import { useState } from 'react';
import { Plus } from 'react-feather';
import CarForm from './CarForm.tsx';
import { createCar } from '../utils/api.ts';
import useModal from '../hooks/useModal.tsx';

type Props = {
  onNewCar: () => void;
};

export default function NewCarButton({ onNewCar }: Props) {
  const { open, toggleModal } = useModal();
  const [error, setError] = useState(false);

  const handleCreateCar = async (name: string, color: string) => {
    setError(false);

    try {
      const res = await createCar(color, name);

      if (res.status === 201) {
        onNewCar();
        toggleModal();
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="flex gap-1 relative px-3 py-2 rounded-sm hover:bg-rose-900 bg-rose-800 text-white mb-3 mt-2 mx-2 "
        type="button"
      >
        <Plus />
        <span>Add car</span>
      </button>
      {open && (
        <div className="absolute">
          <CarForm
            onClose={toggleModal}
            error={error}
            onSubmit={handleCreateCar}
          />
        </div>
      )}
    </>
  );
}
