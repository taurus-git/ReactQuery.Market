import { useSearchParams } from 'react-router-dom';
import { SORT_PARAMS, SortBy, SortOption, SortOrder } from '@features/Sort/types/sort.types';

export function useSort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get(SORT_PARAMS.sortBy) as SortBy | undefined;
  const order = searchParams.get(SORT_PARAMS.order) as SortOrder | undefined;

  const setSort = ({ sortBy, order }: SortOption) => {
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
  };

  return { sortBy, order, setSort };
}
