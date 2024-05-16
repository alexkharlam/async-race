import { FaCarSide } from 'react-icons/fa';
import classNames from 'classnames';
import { RefObject } from 'react';
import { Car, CarStatus } from '../../types/types.ts';
import CarInfo from './CarInfo.tsx';
import config from '../../data/config.ts';

const { TRACK_LENGTH } = config;

type Props = {
  carRef: RefObject<HTMLImageElement>;
  car: Car;
  status: CarStatus;
};

export default function Track({ carRef, car, status }: Props) {
  const containerClass = classNames(
    'border-t-2 border-b-2 relative pl-1 border-l-2',
    { 'border-gray-400': status === 'ready' },
    { 'border-green-500': status === 'finished' },
    { 'border-red-400': status === 'broken' },
  );

  return (
    <div style={{ width: `${TRACK_LENGTH + 60}px` }} className={containerClass}>
      <div ref={carRef}>
        <FaCarSide color={car.color} size={60} className="z-10" />
      </div>
      <CarInfo car={car} />
    </div>
  );
}
