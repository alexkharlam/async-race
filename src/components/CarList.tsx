import { Cars } from '../types/types.ts';
import usePagination from '../hooks/usePagination.tsx';
import PaginationButtons from './ui/PaginationButtons.tsx';
import CarItem from './CarItem/CarItem.tsx';

type Props = {
  cars: Cars;
};

export default function CarList({ cars }: Props) {
  const { paginatedData, currentPage, pageCount, setNextPage, setPrevPage } =
    usePagination(cars);

  return (
    <div className="p-2">
      <p className="text-base mb-3">{`You have ${cars.length} cars!`}</p>

      {paginatedData.map((car) => (
        <CarItem key={car.id} car={car} />
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
