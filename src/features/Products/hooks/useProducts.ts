import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@features/Products/api/productsApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';
import { useSort } from '@features/Sort/hooks/useSort';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';

export const useProducts = () => {
  const { sortBy, order, queryString } = useSort();

  return useQuery({
    queryKey: [QUERY_DOMAINS.products, { sortBy, order }],
    queryFn: () => fetchProducts(queryString),
    refetchOnWindowFocus: true,
    ...QUERY_CONFIG.dynamic,
  });
};
