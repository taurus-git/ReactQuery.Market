import { useQuery } from '@tanstack/react-query';
import { categoriesQueries } from '@features/Products/api/categoriesQueries';

export const useCategories = () => {
  return useQuery(categoriesQueries.all());
};
