import classNames from 'classnames';
import { ArrowLeft, ArrowRight } from 'react-feather';

type Props = {
  setPrevPage: () => void;
  setNextPage: () => void;
  currentPage: number;
  pageCount: number;
};

export default function PaginationButtons({
  setNextPage,
  setPrevPage,
  currentPage,
  pageCount,
}: Props) {
  const buttonClass = classNames(
    'bg-rose-700 rounded-full text-gray-200 p-1 hover:bg-rose-800 disabled:bg-gray-500',
  );

  return (
    <div className="flex gap-1 items-center">
      <button
        onClick={setPrevPage}
        disabled={currentPage === 0}
        className={buttonClass}
        type="button"
      >
        <ArrowLeft />
      </button>
      <p className="text-base">
        Page:
        {currentPage + 1}
      </p>
      <button
        onClick={setNextPage}
        disabled={currentPage === pageCount - 1}
        className={buttonClass}
        type="button"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
