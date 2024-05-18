import { useEffect, useState } from 'react';
import { Cars } from '../types/types.ts';
import { getCars } from '../utils/api.ts';
import CarList from './CarList/CarList.tsx';
import NewCar from './NewCar.tsx';
import GenerateCars from './GenerateCars.tsx';

export default function CarListContainer() {
  const [cars, setCars] = useState<Cars>();

  const initCarsList = async () => {
    const { data } = await getCars();
    setCars(data);
  };

  useEffect(() => {
    initCarsList();
  }, []);

  return (
    <>
      <div className="flex gap-1">
        <NewCar onCarsUpdate={initCarsList} />
        <GenerateCars onCarsUpdate={initCarsList} />
      </div>
      {cars && cars.length > 0 && (
        <CarList onUpdate={initCarsList} cars={cars} />
      )}
    </>
  );
}
