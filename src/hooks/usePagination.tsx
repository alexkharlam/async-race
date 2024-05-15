import { useState } from 'react';
import config from '../data/config.ts';
import { Cars } from '../types/types.ts';

const { PAGE_LIMIT } = config;

function usePagination(items: Cars) {
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
