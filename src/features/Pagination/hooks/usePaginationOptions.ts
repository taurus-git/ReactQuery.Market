import { useSearchParams } from 'react-router-dom';
import { PAGINATION_PARAMS } from '@features/Pagination/types/pagination.types';
import { ITEMS_PER_PAGES } from '@features/Pagination/constants/pagination';

interface UsePaginationProps {
  limit?: number;
}

export const usePaginationOptions = (options?: UsePaginationProps) => {
  const [searchParams] = useSearchParams();

  const limit = options?.limit ? options.limit : ITEMS_PER_PAGES;
  const currentPage = Number(searchParams.get(PAGINATION_PARAMS.page)) || 1;
  const skip = (currentPage - 1) * limit;

  return { limit, skip, currentPage };
};
