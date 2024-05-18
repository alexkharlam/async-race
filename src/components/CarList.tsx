import { useState } from 'react';
import { Race, Cars } from '../types/types.ts';
import usePagination from '../hooks/usePagination.tsx';
import PaginationButtons from './ui/PaginationButtons.tsx';
import CarItem from './CarItem/CarItem.tsx';
import RaceButtons from './RaceButtons.tsx';

type Props = {
  cars: Cars;
  onUpdate: () => void;
};

export default function CarList({ cars, onUpdate }: Props) {
  const [race, setRace] = useState<Race>({
    isRacing: false,
    winner: null,
    isResetted: false,
  });

  const { paginatedData, currentPage, pageCount, setNextPage, setPrevPage } =
    usePagination(cars);

  const handleRace = () => {
    setRace({ isRacing: true, winner: null, isResetted: false });
  };

  const handleReset = () => {
    setRace({
      isRacing: false,
      winner: null,
      isResetted: true,
    });
  };

  const handleFinish = (name: string, id: number) => {
    if (!race.isRacing) return;
    setRace((prevState) => ({
      ...prevState,
      isRacing: false,
      winner: { name, id },
    }));
  };

  return (
    <div className="p-2">
      <p className="text-base mb-3">{`You have ${cars.length} cars!`}</p>
      {race.winner && (
        <p className="text-center text-3xl font-bold">{`Winner is ${race.winner.name}!`}</p>
      )}
      <RaceButtons race={race} onReset={handleReset} onStartRace={handleRace} />

      {paginatedData.map((car) => (
        <CarItem
          onFinish={handleFinish}
          race={race}
          onUpdate={onUpdate}
          key={car.id}
          car={car}
        />
      ))}
      <div className="ml-auto flex justify-end">
        <PaginationButtons
          currentPage={currentPage}
          pageCount={pageCount}
          setNextPage={setNextPage}
          setPrevPage={setPrevPage}
        />
      </div>
    </div>
  );
}
