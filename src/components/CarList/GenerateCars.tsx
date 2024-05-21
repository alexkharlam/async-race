import TextButton from '../ui/TextButton.tsx';
import useGenerateCars from '../../hooks/useGenerateCars.tsx';

type Props = {
  onCarsUpdate: () => void;
};

export default function GenerateCars({ onCarsUpdate }: Props) {
  const generateCars = useGenerateCars();

  return (
    <TextButton
      className="text-sm px-2 py-[3px] bg-pink-600 justify-self-end"
      onClick={() => generateCars(onCarsUpdate)}
    >
      Generate cars
    </TextButton>
  );
}
