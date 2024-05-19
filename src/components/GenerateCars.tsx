import { toast } from 'react-toastify';
import randomColor from 'randomcolor';
import { createCar } from '../utils/api.ts';
import config from '../data/config.ts';
import TextButton from './ui/TextButton.tsx';
import createCarName from '../utils/createCarName.ts';

const { RANDOM_CARS_QUANTITY } = config;

type Props = {
  onCarsUpdate: () => void;
};

export default function GenerateCars({ onCarsUpdate }: Props) {
  const requestCreateCar = async (color: string, name: string) => {
    try {
      throw new Error('sdf');
      await createCar(color, name);
    } catch (err) {
      toast.error('Failed to generate cars', { toastId: 'generateError' });
    }
  };

  const generateCars = async () => {
    const promises = [];

    for (let i = 0; i < RANDOM_CARS_QUANTITY; i += 1) {
      const color = randomColor();
      const name = createCarName();

      promises.push(requestCreateCar(color, name));
    }

    await Promise.all(promises);
    onCarsUpdate();
  };

  return (
    <TextButton
      className="text-sm px-2 py-[3px] bg-pink-600 justify-self-end"
      onClick={generateCars}
    >
      Generate cars
    </TextButton>
  );
}
