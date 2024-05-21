import { useEffect } from 'react';
import CarList from './CarList.tsx';
import useCarList from '../../hooks/useCarList.ts';

export default function CarListContainer() {
  const { cars, updateCarList } = useCarList();

  useEffect(() => {
    updateCarList();
  }, [updateCarList]);

  if (cars && cars.length > 0) {
    return <CarList onUpdate={updateCarList} cars={cars} />;
  }
}
