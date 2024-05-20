import { useState } from 'react';
import { Car } from '../types/types.ts';
import { PAGE_LIMIT } from '../data/config.ts';

function usePagination(items: Car[]) {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(items.length / PAGE_LIMIT);

  const setNextPage = () => {
    if (currentPage === pageCount - 1) return;

    setCurrentPage(currentPage + 1);
  };

  const setPrevPage = () => {
    if (currentPage === 0) return;

    setCurrentPage(currentPage - 1);
  };

  const getPaginatedData = () => {
    const start = currentPage * PAGE_LIMIT;
    const end = start + PAGE_LIMIT;
    return items.slice(start, end);
  };

  const paginatedData = getPaginatedData();

  return { currentPage, pageCount, setNextPage, setPrevPage, paginatedData };
}

export default usePagination;
