import { useQuery } from '@tanstack/react-query';
import { useSort } from '@features/Sort/hooks/useSort';
import { fetchProductsByCategory } from '../api/productsApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';
import { FILTER_PARAMS } from '@features/Filter/types/filter.types';

export const useCategoryProducts = (slug: string) => {
  const { sortBy, order } = useSort();
  const params = { slug, sortBy, order };

  return useQuery({
    queryKey: [QUERY_DOMAINS.products, FILTER_PARAMS.category, params],
    queryFn: () => fetchProductsByCategory(params),
    enabled: !!slug,
    refetchOnWindowFocus: true,
    ...QUERY_CONFIG.dynamic,
  });
};
