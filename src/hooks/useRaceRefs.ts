import { RefObject, createRef, useRef } from 'react';
import { RefType } from '../components/CarItem/CarItem.tsx';
import { Car } from '../types/types.ts';

const useRaceRefs = (
  paginatedData: Car[],
  setRaceStarted: () => void,
  setRaceStopped: () => void,
) => {
  const carsRefs = useRef<RefObject<RefType>[]>([]);

  if (carsRefs.current.length !== paginatedData.length) {
    carsRefs.current = Array(paginatedData.length)
      .fill(null)
      .map((_, i) => carsRefs.current[i] || createRef());
  }

  const startCar = () => {
    setRaceStarted();
    carsRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.handleStart();
      }
    });
  };

  const stopCar = () => {
    setRaceStopped();
    carsRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.handleStop();
      }
    });
  };

  return { carsRefs, startCar, stopCar };
};

export default useRaceRefs;
