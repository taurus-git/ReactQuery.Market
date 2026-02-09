import { queryOptions } from '@tanstack/react-query';
import { categoriesKeys } from '@features/Products/api/queryKeys';
import { fetchCategories } from '@features/Products/api/categoriesApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';

export const categoriesQueries = {
  all: () =>
    queryOptions({
      queryKey: categoriesKeys.lists(),
      queryFn: () => fetchCategories(),
      ...QUERY_CONFIG.critical,
    }),
};
