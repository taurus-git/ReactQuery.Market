import { useQuery } from '@tanstack/react-query';
import { fetchSingleProduct } from '../api/productsApi';
import { singleProductKeys } from '../api/queryKeys';
import { TIME } from '@shared/types/time.types';

export const useSingleProduct = (id: number) => {
  return useQuery({
    queryKey: singleProductKeys.detail(id),
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
    staleTime: TIME.HOUR,
  });
};
