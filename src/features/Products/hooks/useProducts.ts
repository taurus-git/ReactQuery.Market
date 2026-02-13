import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@features/Products/api/productsApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';
import { useProductsParams } from '@features/Products/hooks/useProductsParams';
import { ProductsPaginationParams } from '@features/Pagination/types/pagination.types';

export const useProducts = (params?: ProductsPaginationParams) => {
  const options = useProductsParams(params);

  return useQuery({
    queryKey: [QUERY_DOMAINS.products, options],
    queryFn: () => fetchProducts(options),
    refetchOnWindowFocus: true,
    ...QUERY_CONFIG.dynamic,
  });
};
