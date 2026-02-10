import { useMemo } from 'react';
import { useSort } from '@features/Sort/hooks/useSort';
import { useCategoryFilter } from '@features/Filter/hooks/useCategoryFilter';
import { FetchProductsParams } from '@features/Products/types/products.types';
import { ProductsPaginationParams } from '@features/Pagination/types/pagination.types';

export const useProductsParams = (params?: ProductsPaginationParams): FetchProductsParams => {
  const { sortBy, order } = useSort();
  const { category } = useCategoryFilter();

  return useMemo(
    () => ({
      sortBy,
      order,
      category,
      limit: params?.limit,
      skip: params?.skip,
    }),
    [sortBy, order, category, params?.limit, params?.skip],
  );
};
