import { Edit2, Trash } from 'react-feather';
import { Car } from '../../types/types.ts';
import useModal from '../../hooks/useModal.tsx';
import CarForm from '../CarList/CarForm.tsx';
import IconButton from '../ui/IconButton.tsx';
import useCarOperations from '../../hooks/useCarOperations.tsx';

type Props = {
  car: Car;
  onUpdate: () => void;
};

export default function ManageCarButtons({ car, onUpdate }: Props) {
  const { updateCar, deleteCar } = useCarOperations();
  const { open, toggleModal } = useModal();

  const handleSubmit = (name: string, color: string) => {
    updateCar(car.id, name, color, toggleModal, onUpdate);
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
            onClose={toggleModal}
            onSubmit={handleSubmit}
          />
        </div>
      )}
      <IconButton
        ButtonIcon={Trash}
        onClick={() => deleteCar(car.id, onUpdate)}
        disabled={false}
        classname="bg-pink-600"
      />
    </div>
  );
}
