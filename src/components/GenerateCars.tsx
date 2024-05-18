import randomColor from 'randomcolor';
import { createCar } from '../utils/api.ts';
import config from '../data/config.ts';

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
    <button
      className="flex gap-1 relative px-3 py-2 rounded-sm hover:bg-rose-900 bg-rose-800 text-white mb-3 mt-2 mx-2"
      onClick={generateCars}
      type="button"
    >
      {`Create ${RANDOM_CARS_QUANTITY} random cars`}
    </button>
  );
}
