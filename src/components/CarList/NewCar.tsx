import CarForm from './CarForm.tsx';
import useModal from '../../hooks/useModal.ts';
import TextButton from '../ui/TextButton.tsx';
import useCreateCar from '../../hooks/useCreateCar.ts';

type Props = {
  onCarsUpdate: () => void;
  carsLength: number;
};

export default function NewCar({ carsLength, onCarsUpdate }: Props) {
  const createCar = useCreateCar();
  const { open, toggleModal } = useModal();

  const handleSubmit = (name: string, color: string) => {
    createCar(name, color, toggleModal, onCarsUpdate);
  };

  return (
    <div className="relative justify-self-start">
      <div className="flex flex-col gap-1 items-center">
        <p className="text-base font-bold">{`${carsLength} cars`}</p>
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
