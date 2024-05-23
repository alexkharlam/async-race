import { Car } from '../../types/types.ts';
import usePagination from '../../hooks/usePagination.ts';
import PaginationButtons from '../ui/PaginationButtons.tsx';
import CarItem from '../CarItem/CarItem.tsx';
import useRaceStatus from '../../hooks/useRaceStatus.ts';
import WinnerMessage from './WinnerMessage.tsx';
import useRaceRefs from '../../hooks/useRaceRefs.ts';
import ManageCarList from './ManageCarList.tsx';

type Props = {
  cars: Car[];
  onCarsUpdate: () => void;
};

export default function CarList({ cars, onCarsUpdate }: Props) {
  const { raceStatus, setRaceResetted, setRaceStarted, handleCarFinished } = useRaceStatus();
  const { paginatedData, currentPage, pageCount, setNextPage, setPrevPage } = usePagination(cars);
  const { carsRefs, startCar, stopCar } = useRaceRefs(
    paginatedData,
    setRaceStarted,
    setRaceResetted,
  );

  return (
    <div className="p-2 relative">
      <ManageCarList
        allCarsLength={cars.length}
        raceStatus={raceStatus}
        onUpdate={onCarsUpdate}
        onStartRace={startCar}
        onResetRace={stopCar}
      />

      {paginatedData.map((car, index) => (
        <CarItem
          ref={carsRefs.current[index]}
          onFinish={handleCarFinished}
          onUpdate={onCarsUpdate}
          key={car.id}
          car={car}
        />
      ))}
      <PaginationButtons
        raceStatus={raceStatus}
        currentPage={currentPage}
        pageCount={pageCount}
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
      />
      {raceStatus.winner && <WinnerMessage name={raceStatus.winner.name} />}
    </div>
  );
}
