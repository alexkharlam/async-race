import { useState } from 'react';
import { Car } from '../../types/types.ts';
import { deleteCar, updateCar } from '../../utils/api.ts';
import TrackButton from './TrackButton.tsx';
import useModal from '../../hooks/useModal.tsx';
import CarForm from '../CarForm.tsx';

type Props = {
  car: Car;
  onUpdate: () => void;
};

export default function ManageCarButtons({ car, onUpdate }: Props) {
  const { open, toggleModal } = useModal();
  const [error, setError] = useState(false);

  const handleUpdate = async (name: string, color: string) => {
    setError(false);

    try {
      await updateCar(car.id, color, name);
      toggleModal();
      onUpdate();
    } catch (err) {
      setError(true);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCar(car.id);
      onUpdate();
    } catch (err) {
      console.log('error deleting car');
    }
  };

  return (
    <div className="flex gap-0.5 flex-col">
      <TrackButton
        classname="bg-amber-600"
        onClick={toggleModal}
        disabled={false}
      >
        EDIT
      </TrackButton>
      {open && (
        <div className="absolute">
          <CarForm
            initialColor={car.color}
            error={error}
            onClose={toggleModal}
            onSubmit={handleUpdate}
          />
        </div>
      )}
      <TrackButton
        classname="bg-rose-800"
        onClick={handleDelete}
        disabled={false}
      >
        DELETE
      </TrackButton>
    </div>
  );
}
