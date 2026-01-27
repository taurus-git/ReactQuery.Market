import { useQuery } from '@tanstack/react-query';
import { categoriesKeys } from '../api/queryKeys';
import { fetchCategories } from '../api/categoriesApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';

export const useCategories = () => {
  return useQuery({
    queryKey: categoriesKeys.lists(),
    queryFn: () => fetchCategories(),
    ...QUERY_CONFIG.critical,
  });
};
