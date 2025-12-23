import { useQuery } from '@tanstack/react-query';
import { TIME } from '@shared/types/time.types';
import { categoryKeys } from '../api/queryKeys';
import { fetchCategory } from '../api/categoriesApi';

export const useCategory = (slug: string) => {
  return useQuery({
    queryKey: categoryKeys.detail(slug),
    queryFn: () => fetchCategory(slug),
    enabled: !!slug,
    staleTime: TIME.HOUR,
  });
};
