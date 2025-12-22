import { useQuery } from '@tanstack/react-query';
import { categoryKeys, fetchCategory } from '../api';

export const useCategory = (slug: string) => {
  return useQuery({
    queryKey: categoryKeys.detail(slug),
    queryFn: () => fetchCategory(slug),
    enabled: !!slug,
  });
};
