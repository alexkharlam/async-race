import { useCallback } from 'react';
import { toast } from 'react-toastify';
import randomColor from 'randomcolor';
import config from '../data/config.ts';
import createCarName from '../utils/createCarName.ts';
import api from '../utils/api.ts';
import toastErrors from '../data/toastErrors.ts';

const { RANDOM_CARS_QUANTITY } = config;

function useCarOperations() {
  const getCars = useCallback(async () => {
    try {
      const cars = await api.getCars();

      return cars;
    } catch (err) {
      toast.error(toastErrors.getCars.text, { toastId: toastErrors.getCars.id });
      return [];
    }
  }, []);

  const createCar = async (
    name: string,
    color: string,
    toggleModal: () => void,
    onCarUpdate: () => void,
  ) => {
    try {
      await api.createCar(color, name);

      onCarUpdate();
      toggleModal();
    } catch (err) {
      toast.error(toastErrors.createCar.text, { toastId: toastErrors.createCar.id });
    }
  };

  const updateCar = async (
    carId: number,
    name: string,
    color: string,
    toggleModal: () => void,
    onCarUpdate: () => void,
  ) => {
    try {
      await api.updateCar(carId, color, name);
      toggleModal();
      onCarUpdate();
    } catch (err) {
      toast.error(toastErrors.updateCar.text, { toastId: toastErrors.deleteCar.id });
    }
  };

  const deleteCar = async (carId: number, onCarUpdate: () => void) => {
    try {
      await api.deleteCar(carId);
      onCarUpdate();
    } catch (err) {
      toast.error(toastErrors.deleteCar.text, { toastId: toastErrors.deleteCar.id });
    }
  };

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

  return { updateCar, deleteCar, createCar, generateCars, getCars };
}

export default useCarOperations;
