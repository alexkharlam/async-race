import { useEffect } from 'react';
import useCarList from '../hooks/useCarList.ts';
import CarList from '../components/CarList/CarList.tsx';
import NewCar from '../components/CarList/NewCar.tsx';
import GenerateCars from '../components/CarList/GenerateCars.tsx';

export default function Garage() {
  const { cars, updateCarList } = useCarList();

  useEffect(() => {
    updateCarList();
  }, [updateCarList]);

  if (!cars || cars.length === 0) {
    return (
      <div className="flex justify-between items-center px-2 my-2">
        <NewCar carsLength={0} onCarsUpdate={updateCarList} />
        <GenerateCars onCarsUpdate={updateCarList} />
      </div>
    );
  }
  if (cars && cars.length > 0) {
    return <CarList onUpdate={updateCarList} cars={cars} />;
  }
}
