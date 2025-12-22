import { TIME } from '@shared/types/time.types';
import { useQuery } from '@tanstack/react-query';
import { productsKeys } from '@features/Products/api/queryKeys';
import { fetchProducts } from '@features/Products/api/productsApi';

export const useProducts = () => {
  return useQuery({
    queryKey: productsKeys.lists(),
    queryFn: () => fetchProducts(),
  });
};
