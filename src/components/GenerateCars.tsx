import TextButton from './ui/TextButton.tsx';
import useCarOperations from '../hooks/useCarOperations.tsx';

type Props = {
  onCarsUpdate: () => void;
};

export default function GenerateCars({ onCarsUpdate }: Props) {
  const { generateCars } = useCarOperations(onCarsUpdate);

  return (
    <TextButton
      className="text-sm px-2 py-[3px] bg-pink-600 justify-self-end"
      onClick={generateCars}
    >
      Generate cars
    </TextButton>
  );
}
