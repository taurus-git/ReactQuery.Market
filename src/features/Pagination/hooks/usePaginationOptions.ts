import { useSearchParams } from 'react-router-dom';
import { PAGINATION_PARAMS } from '@features/Pagination/types/pagination.types';
import { ITEMS_PER_PAGES } from '@features/Pagination/constants/pagination';
import { useCallback } from 'react';

interface UsePaginationProps {
  limit?: number;
}

export const usePaginationOptions = (options?: UsePaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = options?.limit ? options.limit : ITEMS_PER_PAGES;
  const currentPage = Number(searchParams.get(PAGINATION_PARAMS.page)) || 1;
  const skip = (currentPage - 1) * limit;

  const setPage = useCallback(
    (newPage: number) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (newPage > 1) {
          params.set(PAGINATION_PARAMS.page, String(newPage));
        } else {
          params.delete(PAGINATION_PARAMS.page);
        }

        return params;
      });
    },
    [searchParams],
  );

  return { limit, skip, currentPage, setPage };
};
