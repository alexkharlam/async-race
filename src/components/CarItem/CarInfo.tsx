import { Car } from '../../types/types.ts';

type Props = {
  car: Car;
};

export default function CarInfo({ car }: Props) {
  return (
    <p className="absolute top-1/2 left-5 text-3xl font-semibold -translate-y-1/2 opacity-50 -z-50">
      {car.name}
    </p>
  );
}
