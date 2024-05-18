import randomColor from 'randomcolor';
import { createCar } from '../utils/api.ts';
import config from '../data/config.ts';
import TextButton from './ui/TextButton.tsx';

const { RANDOM_CARS_QUANTITY } = config;

type Props = {
  onCarsUpdate: () => void;
};

export default function GenerateCars({ onCarsUpdate }: Props) {
  const requestCreateCar = async (color: string, name: string) => {
    try {
      await createCar(color, name);
    } catch (err) {
      console.log('error happened'); // TODO: error handling
    }
  };

  const generateCars = async () => {
    const promises = [];

    for (let i = 0; i < RANDOM_CARS_QUANTITY; i += 1) {
      const color = randomColor();
      const name = `Car #${i + 1}`;

      promises.push(requestCreateCar(color, name));
    }

    await Promise.all(promises);
    onCarsUpdate();
  };

  return (
    <TextButton
      className="text-sm px-2 py-[3px] bg-pink-600"
      onClick={generateCars}
    >
      Generate cars
    </TextButton>
  );
}
