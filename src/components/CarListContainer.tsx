import { useCallback, useEffect, useState } from 'react';
import { Car } from '../types/types.ts';
import CarList from './CarList/CarList.tsx';
import useCarOperations from '../hooks/useCarOperations.tsx';

export default function CarListContainer() {
  const { getCars } = useCarOperations();
  const [cars, setCars] = useState<Car[]>();

  const updateCarsList = useCallback(async () => {
    const carsData = await getCars();
    setCars(carsData);
  }, [getCars]);

  useEffect(() => {
    updateCarsList();
  }, [updateCarsList]);

  if (cars && cars.length > 0) {
    return <CarList onUpdate={updateCarsList} cars={cars} />;
  }
}
