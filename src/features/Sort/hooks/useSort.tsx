import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SORT_PARAMS, SortBy, SortOption, SortOrder } from '@features/Sort/types/sort.types';

export const useSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = useMemo(
    () => searchParams.get(SORT_PARAMS.sortBy) as SortBy | undefined,
    [searchParams],
  );
  const order = useMemo(
    () => searchParams.get(SORT_PARAMS.order) as SortOrder | undefined,
    [searchParams],
  );

  const setSort = useCallback(
    ({ sortBy, order }: SortOption) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (sortBy && order) {
          params.set(SORT_PARAMS.sortBy, sortBy);
          params.set(SORT_PARAMS.order, order);
        } else {
          params.delete(SORT_PARAMS.sortBy);
          params.delete(SORT_PARAMS.order);
        }

        return params;
      });
    },
    [searchParams],
  );

  return { sortBy, order, setSort };
};
