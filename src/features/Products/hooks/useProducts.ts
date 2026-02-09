import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@features/Products/api/productsApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';
import { useSort } from '@features/Sort/hooks/useSort';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';
import { useCategoryFilter } from '@features/Filter/hooks/useCategoryFilter';

export const useProducts = () => {
  const { sortBy, order } = useSort();
  const { category } = useCategoryFilter();

  return useQuery({
    queryKey: [QUERY_DOMAINS.products, { category, sortBy, order }],
    queryFn: () => fetchProducts({ category, sortBy, order }),
    refetchOnWindowFocus: true,
    ...QUERY_CONFIG.dynamic,
  });
};
