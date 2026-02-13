import { PAGINATION_PARAMS } from '@features/Pagination/types/pagination.types';
import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export const useSetPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setPage = useCallback(
    (newPage: number) => {
      console.log(newPage);
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

  return { setPage };
};
