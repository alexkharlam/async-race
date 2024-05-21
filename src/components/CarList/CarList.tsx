import { Car } from '../../types/types.ts';
import usePagination from '../../hooks/usePagination.ts';
import PaginationButtons from '../ui/PaginationButtons.tsx';
import CarItem from '../carItem/CarItem.tsx';
import RaceButtons from './RaceButtons.tsx';
import useRace from '../../hooks/useRace.ts';
import NewCar from './NewCar.tsx';
import GenerateCars from './GenerateCars.tsx';
import WinnerMessage from './WinnerMessage.tsx';

type Props = {
  cars: Car[];
  onUpdate: () => void;
};

export default function CarList({ cars, onUpdate }: Props) {
  const { race, startRace, resetRace, handleCarFinished } = useRace();
  const { paginatedData, currentPage, pageCount, setNextPage, setPrevPage } = usePagination(cars);

  return (
    <div className="p-2 relative">
      <div className="grid md:grid-cols-3 grid-cols-2 grid-rows-2 md:grid-rows-1 items-center mt-2 mb-3.5 gap-y-3 md:gap-y-[0px]">
        <NewCar cars={cars} onCarsUpdate={onUpdate} />
        <RaceButtons race={race} onReset={resetRace} onStartRace={startRace} />
        <GenerateCars onCarsUpdate={onUpdate} />
      </div>

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
      {race.winner && <WinnerMessage name={race.winner.name} />}
    </div>
  );
}
