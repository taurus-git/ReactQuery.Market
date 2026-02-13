import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FILTER_PARAMS } from '@features/Filter/types/filter.types';
import { SORT_PARAMS } from '@features/Sort/types/sort.types';
import { PAGINATION_PARAMS } from '@features/Pagination/types/pagination.types';

export const useResetFilters = () => {
  const [, setSearchParams] = useSearchParams();

  const resetFilters = useCallback(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      params.delete(FILTER_PARAMS.category);
      params.delete(SORT_PARAMS.sortBy);
      params.delete(SORT_PARAMS.order);
      params.delete(PAGINATION_PARAMS.page);

      return params;
    });
  }, [setSearchParams]);

  return { resetFilters };
};
