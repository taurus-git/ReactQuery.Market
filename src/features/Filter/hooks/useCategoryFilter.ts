import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FILTER_PARAMS } from '@features/Filter/types/filter.types';
import { SORT_PARAMS } from '@features/Sort/types/sort.types';

export const useCategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = useMemo(
    () => searchParams.get(FILTER_PARAMS.category) || undefined,
    [searchParams],
  );

  const setCategory = useCallback(
    (slug?: string) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (slug) {
          params.delete(SORT_PARAMS.sortBy);
          params.delete(SORT_PARAMS.order);
          params.set(FILTER_PARAMS.category, slug);
        } else {
          params.delete(FILTER_PARAMS.category);
        }

        return params;
      });
    },
    [setSearchParams],
  );

  return { category, setCategory };
};
