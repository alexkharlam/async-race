import { useState } from 'react';
import { Plus } from 'react-feather';
import NewCarForm from './NewCarForm.tsx';

type Props = {
  onNewCar: () => void;
};

export default function NewCarButton({ onNewCar }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((state) => !state);
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
      {isOpen && (
        <div className="absolute">
          <NewCarForm onClose={toggleModal} onNewCar={onNewCar} />
        </div>
      )}
    </>
  );
}
