import CarForm from './CarForm.tsx';
import useModal from '../hooks/useModal.tsx';
import TextButton from './ui/TextButton.tsx';
import { Cars } from '../types/types.ts';
import useCarOperations from '../hooks/useCarOperations.tsx';

type Props = {
  onCarsUpdate: () => void;
  cars: Cars;
};

export default function NewCar({ cars, onCarsUpdate }: Props) {
  const { createCar } = useCarOperations(onCarsUpdate);
  const { open, toggleModal } = useModal();

  const handleSubmit = (name: string, color: string) => createCar(name, color, toggleModal);

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
