import { useSearchParams } from 'react-router-dom';
import { SortBy, SortOption, SortOrder } from '@features/Sort/types/sort.types';

export function useSort() {
  const [searchParams, setSearchParams] = useSearchParams();
  let queryString = '';

  const sortBy = searchParams.get('sortBy') as SortBy | undefined;
  const order = searchParams.get('order') as SortOrder | undefined;

  const setSort = ({ sortBy, order }: SortOption) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (sortBy && order) {
        params.set('sortBy', sortBy);
        params.set('order', order);
      } else {
        params.delete('sortBy');
        params.delete('order');
      }

      return params;
    });
  };

  if (sortBy && order) {
    queryString = `sortBy=${sortBy}&order=${order}`;
  }

  return { searchParams, sortBy, order, setSort, queryString };
}
