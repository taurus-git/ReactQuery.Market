import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SORT_PARAMS, SortBy, SortOption, SortOrder } from '@features/Sort/types/sort.types';
import { PAGINATION_PARAMS } from '@features/Pagination/types/pagination.types';

export const useSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = (searchParams.get(SORT_PARAMS.sortBy) as SortBy) ?? undefined;
  const order = (searchParams.get(SORT_PARAMS.order) as SortOrder) ?? undefined;

  const setSort = useCallback(
    ({ sortBy, order }: SortOption) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (sortBy && order) {
          params.delete(PAGINATION_PARAMS.page);
          params.set(SORT_PARAMS.sortBy, sortBy);
          params.set(SORT_PARAMS.order, order);
        } else {
          params.delete(SORT_PARAMS.sortBy);
          params.delete(SORT_PARAMS.order);
        }

        return params;
      });
    },
    [setSearchParams],
  );

  const isSortButtonActive = useCallback(
    (option: SortOption) => {
      if (option.sortBy && option.order) {
        return option.sortBy === sortBy && option.order === order;
      }
    },
    [sortBy, order],
  );

  return { sortBy, order, setSort, isSortButtonActive };
};
