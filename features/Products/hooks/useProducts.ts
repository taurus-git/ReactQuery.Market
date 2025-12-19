import { TIME } from '@shared/types/time.types';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, productsKeys } from '@features/Products/api';

export const useProducts = () => {
  return useQuery({
    queryKey: productsKeys.lists(),
    queryFn: () => fetchProducts(),
  });
};
