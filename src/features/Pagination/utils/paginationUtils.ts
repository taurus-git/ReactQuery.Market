import {
  PaginateNavType,
  PaginateNavTypes,
  PaginationContext,
  PaginationPage,
} from '@features/Pagination/types/pagination.types';
import { dots } from '@features/Pagination/constants/pagination';

export const getPaginationPageClass = () => {};

export const isPaginationPageDisabled = () => {};

export const createPagination = (paginationContext: PaginationContext) => {
  const { currentPage, totalPages } = paginationContext;

  const getPaginationWithDots = () => {
    const pages: PaginationPage[] = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push(dots);
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push(dots);
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const getPagination = () => {
    switch (totalPages >= 2) {
      case totalPages <= 5:
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      case totalPages > 5:
        return getPaginationWithDots();
      default:
        return [];
    }
  };

  const isPaginationNavDisabled = (type: PaginateNavType) => {
    if (type === PaginateNavTypes.prev) {
      return currentPage === 1;
    }
    if (type === PaginateNavTypes.next) {
      return currentPage === totalPages;
    }

    return false;
  };

  const getPaginationNavPage = (type: PaginateNavType) => {
    if (type === PaginateNavTypes.prev) {
      return currentPage - 1;
    }
    if (type === PaginateNavTypes.next) {
      return currentPage + 1;
    }
    return 1;
  };

  return {
    getPagination,
    isPaginationNavDisabled,
    getPaginationNavPage,
  };
};
