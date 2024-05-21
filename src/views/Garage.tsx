import { useEffect } from 'react';
import useCarList from '../hooks/useCarList.ts';
import CarList from '../components/CarList/CarList.tsx';

export default function Garage() {
  const { cars, updateCarList } = useCarList();

  useEffect(() => {
    updateCarList();
  }, [updateCarList]);

  if (cars && cars.length > 0) {
    return <CarList onUpdate={updateCarList} cars={cars} />;
  }
}
