import { useCallback, useState } from 'react';
import { Car } from '../types/types.ts';
import useCarOperations from './useCarOperations.tsx';

function useCarList() {
  const [cars, setCars] = useState<Car[]>();
  const { getCars } = useCarOperations();

  const updateCarList = useCallback(async () => {
    const carsData = await getCars();
    setCars(carsData);
  }, [getCars]);

  return { cars, updateCarList };
}

export default useCarList;
