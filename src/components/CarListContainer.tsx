import { useEffect, useState } from 'react';
import { Cars } from '../types/types.ts';
import { getCars } from '../utils/api.ts';
import CarList from './CarList.tsx';
import NewCarButton from './NewCar/NewCarButton.tsx';
import GenerateRandomCars from './GenerateRandomCars.tsx';

export default function CarListContainer() {
  const [cars, setCars] = useState<Cars>();

  const initCars = async () => {
    const { data } = await getCars();
    setCars(data);
  };

  useEffect(() => {
    initCars();
  }, []);

  return (
    <>
      <GenerateRandomCars onNewCars={initCars} />
      <NewCarButton onNewCar={initCars} />
      {cars && cars.length > 0 && <CarList cars={cars} />}
    </>
  );
}
