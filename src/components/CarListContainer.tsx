import { useEffect, useState } from 'react';
import { Cars } from '../types/types.ts';
import { getCars } from '../utils/api.ts';
import CarList from './CarList/CarList.tsx';

export default function CarListContainer() {
  const [cars, setCars] = useState<Cars>();

  const initCarsList = async () => {
    const carsData = await getCars();
    setCars(carsData);
  };

  useEffect(() => {
    initCarsList();
  }, []);

  if (cars && cars.length > 0) {
    return <CarList onUpdate={initCarsList} cars={cars} />;
  }
}
