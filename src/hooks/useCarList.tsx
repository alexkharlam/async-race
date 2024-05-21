import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { Car } from '../types/types.ts';
import toastErrors from '../data/toastErrors.ts';
import api from '../utils/api.ts';

function useCarList() {
  const [cars, setCars] = useState<Car[]>();

  const getCars = useCallback(async () => {
    try {
      const carsData = await api.getCars();

      return carsData;
    } catch (err) {
      toast.error(toastErrors.getCars.text, { toastId: toastErrors.getCars.id });
      return [];
    }
  }, []);

  const updateCarList = useCallback(async () => {
    const carsData = await getCars();
    setCars(carsData);
  }, [getCars]);

  return { cars, updateCarList };
}

export default useCarList;
