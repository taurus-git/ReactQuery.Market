import { useQuery } from '@tanstack/react-query';
import { fetchSingleProduct, singleProductKeys } from '../api';

export const useSingleProduct = (id: number) => {
  return useQuery({
    queryKey: singleProductKeys.detail(id),
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
  });
};
