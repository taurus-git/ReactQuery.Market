import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProducts } from '@features/Products/api/productsApi';
import { QUERY_CONFIG } from '@services/query/queryConfig';
import { QUERY_DOMAINS } from '@shared/constants/queryDomains';
import { useProductsParams } from '@features/Products/hooks/useProductsParams';
import { ProductsPaginationParams } from '@features/Pagination/types/pagination.types';
import { useEffect } from 'react';
import { HOME_PAGE_LIMIT } from '@pages/HomePage/config/pages';

export const useProducts = (params?: ProductsPaginationParams) => {
  const queryClient = useQueryClient();
  const options = useProductsParams(params);

  const query = useQuery({
    queryKey: [QUERY_DOMAINS.products, options],
    queryFn: () => fetchProducts(options),
    refetchOnWindowFocus: true,
    ...QUERY_CONFIG.dynamic,
    placeholderData: keepPreviousData,
  });

  const limit = options.limit ? options.limit : HOME_PAGE_LIMIT;
  const currentPage = options.currentPage ? options.currentPage : 1;

  useEffect(() => {
    if (!query.data) return;

    const totalPages = Math.ceil(query.data.total / limit);
    const hasNextPage = currentPage < totalPages;

    if (!hasNextPage) return;

    queryClient.prefetchQuery({
      queryKey: [QUERY_DOMAINS.products, options],
      queryFn: () => fetchProducts(options),
    });
  }, [query.data, currentPage, limit, options, queryClient]);

  return query;
};
