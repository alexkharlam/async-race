import { Cars } from '../../types/types.ts';
import usePagination from '../../hooks/usePagination.tsx';
import PaginationButtons from '../ui/PaginationButtons.tsx';
import CarItem from '../CarItem/CarItem.tsx';
import RaceButtons from './RaceButtons.tsx';
import useRace from '../../hooks/useRace.tsx';
import NewCar from '../NewCar.tsx';
import GenerateCars from '../GenerateCars.tsx';

type Props = {
  cars: Cars;
  onUpdate: () => void;
};

export default function CarList({ cars, onUpdate }: Props) {
  const { race, startRace, resetRace, handleCarFinished } = useRace();
  const { paginatedData, currentPage, pageCount, setNextPage, setPrevPage } =
    usePagination(cars);

  return (
    <div className="p-2">
      <p className="text-base mb-3">{`You have ${cars.length} cars!`}</p>
      {race.winner && (
        <p className="text-center text-3xl font-bold">{`Winner is ${race.winner.name}!`}</p>
      )}
      <NewCar onCarsUpdate={onUpdate} />
      <GenerateCars onCarsUpdate={onUpdate} />
      <RaceButtons race={race} onReset={resetRace} onStartRace={startRace} />

      {paginatedData.map((car) => (
        <CarItem
          onFinish={handleCarFinished}
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
