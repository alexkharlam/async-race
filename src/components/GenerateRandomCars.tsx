import randomColor from 'randomcolor';
import { createCar } from '../utils/api.ts';

type Props = {
  onNewCars: () => void;
};

export default function GenerateRandomCars({ onNewCars }: Props) {
  const carsToCreate = 100;

  const requestCreateCar = async (color: string, name: string) => {
    try {
      await createCar(color, name);
    } catch (err) {
      console.log('error happened');
    }
  };

  const generateCars = async () => {
    const promises = [];

    for (let i = 0; i < carsToCreate; i += 1) {
      const color = randomColor();
      const name = `Car #${i + 1}`;

      promises.push(requestCreateCar(color, name));
    }

    await Promise.all(promises);
    console.log('All cars created');
    onNewCars();

    // Here I want to do something after all 100 requests done
  };

  return (
    <button onClick={generateCars} type="button">
      GenerateRandomCars
    </button>
  );
}
