import classNames from 'classnames';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { Race } from '../../types/types.ts';

type Props = {
  setPrevPage: () => void;
  setNextPage: () => void;
  currentPage: number;
  pageCount: number;
  race: Race;
};

export default function PaginationButtons({
  setNextPage,
  setPrevPage,
  currentPage,
  pageCount,
  race,
}: Props) {
  const buttonClass = classNames(
    'bg-rose-700 rounded-full text-gray-200 p-1 hover:bg-rose-800 disabled:bg-gray-500',
  );

  return (
    <div className="flex gap-2 items-center p-2 justify-center">
      <button
        onClick={setPrevPage}
        disabled={currentPage === 0 || race.isRacing}
        className={buttonClass}
        type="button"
      >
        <ArrowLeft />
      </button>
      <p className="text-base">
        <span>Page: </span>
        {currentPage + 1}
      </p>
      <button
        onClick={setNextPage}
        disabled={currentPage === pageCount - 1 || race.isRacing}
        className={buttonClass}
        type="button"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
