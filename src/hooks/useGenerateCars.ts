import { toast } from 'react-toastify';
import randomColor from 'randomcolor';
import createCarName from '../utils/createCarName.ts';
import api from '../utils/api.ts';
import toastErrors from '../data/toastErrors.ts';

const RANDOM_CARS_QUANTITY = import.meta.env.VITE_RANDOM_CARS_QUANTITY;

function useGenerateCars() {
  const generateCars = async (onCarUpdate: () => void) => {
    try {
      const promises = [];

      for (let i = 0; i < RANDOM_CARS_QUANTITY; i += 1) {
        const color = randomColor();
        const name = createCarName();

        promises.push(api.createCar(color, name));
      }

      await Promise.all(promises);
      onCarUpdate();
    } catch (err) {
      toast.error(toastErrors.generateCars.text, { toastId: toastErrors.generateCars.id });
    }
  };

  return generateCars;
}

export default useGenerateCars;
