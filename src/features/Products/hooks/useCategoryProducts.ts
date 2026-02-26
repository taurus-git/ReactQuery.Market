import { useQuery } from '@tanstack/react-query';
import { fetchProductsByCategory } from '../api/productsApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';
import { FILTER_PARAMS } from '@features/Filter/types/filter.types';
import { FetchProductsByCategoryParams } from '@features/Products/types/products.types';

export const useCategoryProducts = (params: FetchProductsByCategoryParams) => {
  const query = useQuery({
    queryKey: [QUERY_DOMAINS.products, FILTER_PARAMS.category, params],
    queryFn: () => fetchProductsByCategory(params),
    enabled: !!params.slug,
    refetchOnWindowFocus: true,
    ...QUERY_CONFIG.dynamic,
  });

  return query;
};
