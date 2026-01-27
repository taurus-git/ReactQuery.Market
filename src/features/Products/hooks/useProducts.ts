import { useQuery } from '@tanstack/react-query';
import { productsKeys } from '@features/Products/api/queryKeys';
import { fetchProducts } from '@features/Products/api/productsApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';

export const useProducts = () => {
  return useQuery({
    queryKey: productsKeys.lists(),
    queryFn: () => fetchProducts(),
    refetchOnWindowFocus: true,
    ...QUERY_CONFIG.dynamic,
  });
};
