import { Cars } from '../types/types.ts';
import usePagination from '../hooks/usePagination.tsx';
import PaginationButtons from './ui/PaginationButtons.tsx';

type Props = {
  cars: Cars;
};

export default function CarList({ cars }: Props) {
  const { paginatedData, currentPage, pageCount, setNextPage, setPrevPage } =
    usePagination(cars);

  return (
    <div>
      <PaginationButtons
        currentPage={currentPage}
        pageCount={pageCount}
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
      />

      {paginatedData.map((car) => (
        <p className="mb-2" key={car.id}>
          {car.name}
        </p>
      ))}
    </div>
  );
}
