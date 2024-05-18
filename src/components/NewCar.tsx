import { useState } from 'react';
import CarForm from './CarForm.tsx';
import { createCar } from '../utils/api.ts';
import useModal from '../hooks/useModal.tsx';
import TextButton from './ui/TextButton.tsx';
import { Cars } from '../types/types.ts';

type Props = {
  onCarsUpdate: () => void;
  cars: Cars;
};

export default function NewCar({ cars, onCarsUpdate }: Props) {
  const { open, toggleModal } = useModal();
  const [error, setError] = useState(false);

  const handleCreateCar = async (name: string, color: string) => {
    setError(false);

    try {
      const res = await createCar(color, name);

      if (res.status === 201) {
        onCarsUpdate();
        toggleModal();
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-1 items-center">
        <p className="text-base font-bold">{`${cars.length} cars`}</p>
        <TextButton onClick={toggleModal} className=" text-md px-2 py-[4px]">
          Add car
        </TextButton>
      </div>
      {open && (
        <div className="absolute">
          <CarForm
            initialColor="#333333"
            onClose={toggleModal}
            error={error}
            onSubmit={handleCreateCar}
          />
        </div>
      )}
    </div>
  );
}
