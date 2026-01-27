import { useQuery } from '@tanstack/react-query';
import { categoryProductsKeys } from '../api/queryKeys';
import { fetchCategoryProducts } from '../api/productsApi';
import { CategoryProductsParams } from '@features/Products/types/categories.types';
import { QUERY_CONFIG } from '@services/query/queryConfig';

export const useCategoryProducts = (params: CategoryProductsParams) => {
  return useQuery({
    queryKey: categoryProductsKeys.list(params),
    queryFn: () => fetchCategoryProducts(params),
    enabled: !!params.slug,
    ...QUERY_CONFIG.dynamic,
  });
};
