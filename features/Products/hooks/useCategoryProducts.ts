import { useQuery } from '@tanstack/react-query';
import { categoryProductsKeys, fetchCategoryProducts } from '../api';
import { CategoryProductsParams } from '@features/Products/types';
import { TIME } from '@shared/types/time.types';

export const useCategoryProducts = (params: CategoryProductsParams) => {
  return useQuery({
    queryKey: categoryProductsKeys.list(params),
    queryFn: () => fetchCategoryProducts(params),
    enabled: !!params.slug,
  });
};
