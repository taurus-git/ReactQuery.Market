import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@features/Products/api/productsApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';
import { useProductsParams } from '@features/Products/hooks/useProductsParams';

export const useProducts = () => {
  const params = useProductsParams();

  return useQuery({
    queryKey: [QUERY_DOMAINS.products, params],
    queryFn: () => fetchProducts(params),
    refetchOnWindowFocus: true,
    ...QUERY_CONFIG.dynamic,
  });
};
