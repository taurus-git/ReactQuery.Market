import { useQuery } from '@tanstack/react-query';
import { fetchSingleProduct } from '../api/productsApi';
import { singleProductKeys } from '../api/queryKeys';

export const useSingleProduct = (id: number) => {
  return useQuery({
    queryKey: singleProductKeys.detail(id),
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
  });
};
