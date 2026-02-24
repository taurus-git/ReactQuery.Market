import React from 'react';
import styles from './PaginateNav.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';
import { PaginateNavType, PaginateNavTypes, PaginationContext } from '../../types/pagination.types';
import { createPagination } from '@features/Pagination/utils/paginationUtils';
import { useSetPage } from '@features/Pagination/hooks/useSetPage';

interface PaginateNavProps {
  context: PaginationContext;
  type: PaginateNavType;
}

export const PaginateNav = ({ context, type }: PaginateNavProps) => {
  const { currentPage, totalPages } = context;
  const pagination = createPagination(context);
  const { setPage } = useSetPage();

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  const onPaginationNavClick = () => {
    if (type === PaginateNavTypes.prev) {
      goToPrevPage();
    }
    if (type === PaginateNavTypes.next) {
      goToNextPage();
    }
  };

  const rotateAngle = () => {
    if (type === PaginateNavTypes.prev) {
      return 90;
    }
    if (type === PaginateNavTypes.next) {
      return -90;
    }
  };

  return (
    <button
      className={`${styles.paginationNav} d-flex justify-center align-center`}
      type={'button'}
      disabled={pagination.isPaginationNavDisabled(type)}
      onClick={() => onPaginationNavClick()}
    >
      <Icon name={'shevron'} size={14} rotate={rotateAngle()} />
    </button>
  );
};
