import { useEffect, useState } from 'react';
import { Cars } from '../types/types.ts';
import { getCars } from '../utils/api.ts';
import CarList from './CarList.tsx';

export default function CarListContainer() {
  const [cars, setCars] = useState<Cars>();

  useEffect(() => {
    const init = async () => {
      const { data } = await getCars();
      setCars(data);
    };

    init();
  }, []);

  if (cars && cars.length > 0) return <CarList cars={cars} />;
}
