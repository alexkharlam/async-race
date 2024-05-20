import { toast } from 'react-toastify';
import { Edit2, Trash } from 'react-feather';
import { useState } from 'react';
import { Car } from '../../types/types.ts';
import { deleteCar, updateCar } from '../../utils/api.ts';
import useModal from '../../hooks/useModal.tsx';
import CarForm from '../CarForm.tsx';
import IconButton from '../ui/IconButton.tsx';

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
      toast.error('Failed to update a car', { toastId: 'updateCarError' });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCar(car.id);
      onUpdate();
    } catch (err) {
      toast.error('Failed to delete a car', { toastId: 'deleteCarError' });
    }
  };

  return (
    <div className="flex relative items-center gap-0.5 flex-col">
      <IconButton
        ButtonIcon={Edit2}
        onClick={toggleModal}
        disabled={false}
        classname="bg-amber-600"
      />

      {open && (
        <div className="absolute left-1">
          <CarForm
            initialName={car.name}
            initialColor={car.color}
            error={error}
            onClose={toggleModal}
            onSubmit={handleUpdate}
          />
        </div>
      )}
      <IconButton
        ButtonIcon={Trash}
        onClick={handleDelete}
        disabled={false}
        classname="bg-pink-600"
      />
    </div>
  );
}
