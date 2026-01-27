import { useQuery } from '@tanstack/react-query';
import { fetchSingleProduct } from '../api/productsApi';
import { singleProductKeys } from '../api/queryKeys';
import { QUERY_CONFIG } from '@services/query/queryConfig';

export const useSingleProduct = (id: number) => {
  return useQuery({
    queryKey: singleProductKeys.detail(id),
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
    refetchOnMount: true,
    ...QUERY_CONFIG.dynamic,
  });
};
