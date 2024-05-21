import CarForm from './CarForm.tsx';
import useModal from '../../hooks/useModal.tsx';
import TextButton from '../ui/TextButton.tsx';
import { Car } from '../../types/types.ts';
import useCreateCar from '../../hooks/useCreateCar.tsx';

type Props = {
  onCarsUpdate: () => void;
  cars: Car[];
};

export default function NewCar({ cars, onCarsUpdate }: Props) {
  const createCar = useCreateCar();
  const { open, toggleModal } = useModal();

  const handleSubmit = (name: string, color: string) => {
    createCar(name, color, toggleModal, onCarsUpdate);
  };

  return (
    <div className="relative justify-self-start">
      <div className="flex flex-col gap-1 items-center">
        <p className="text-base font-bold">{`${cars.length} cars`}</p>
        <TextButton onClick={toggleModal} className=" text-md px-2 py-[4px]">
          Add car
        </TextButton>
      </div>
      {open && (
        <div className="absolute">
          <CarForm
            initialName=""
            initialColor="#333333"
            onClose={toggleModal}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
