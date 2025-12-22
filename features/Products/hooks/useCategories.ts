import { useQuery } from '@tanstack/react-query';
import { categoriesKeys, fetchCategories } from '../api';

export const useCategories = () => {
  return useQuery({
    queryKey: categoriesKeys.lists(),
    queryFn: () => fetchCategories(),
  });
};
