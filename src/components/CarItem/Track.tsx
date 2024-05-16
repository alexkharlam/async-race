import classNames from 'classnames';
import { RefObject } from 'react';
import carIcon from '../../assets/car-icon.svg';
import { Car, CarStatus } from '../../types/types.ts';
import CarInfo from './CarInfo.tsx';

type Props = {
  carRef: RefObject<HTMLImageElement>;
  car: Car;
  status: CarStatus;
};

export default function Track({ carRef, car, status }: Props) {
  const trackLength = 800;

  const containerClass = classNames(
    'border-t-2 border-b-2 relative pl-1 border-l-2',
    { 'border-gray-400': status === 'ready' },
    { 'border-green-500': status === 'finished' },
    { 'border-red-400': status === 'broken' },
  );

  return (
    <div style={{ width: `${trackLength + 60}px` }} className={containerClass}>
      <img
        className="z-50"
        alt="Car track"
        ref={carRef}
        width="60"
        src={carIcon}
      />
      <CarInfo car={car} />
    </div>
  );
}
