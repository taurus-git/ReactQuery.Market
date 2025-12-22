import { useQuery } from '@tanstack/react-query';
import { categoriesKeys } from '../api/queryKeys';
import { fetchCategories } from '../api/categoriesApi';

export const useCategories = () => {
  return useQuery({
    queryKey: categoriesKeys.lists(),
    queryFn: () => fetchCategories(),
  });
};
