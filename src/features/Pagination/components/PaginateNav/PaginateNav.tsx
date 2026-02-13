/*import React from 'react';
import styles from './PaginateNav.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';*/
import { PaginateNavType } from '../../types/pagination.types';

interface PaginateNavProps {
  type: PaginateNavType;
  setPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export const PaginateNav = ({ type, setPage, currentPage, totalPages }: PaginateNavProps) => {
  console.log(type, setPage, currentPage, totalPages);

  /*const onPaginationClick = (type: PaginateNavType, currentPage: number) => {
    const navPage = getPaginationNavPage(type, currentPage);
    setPage(navPage);
  };

  return (
    <button
      className={`${styles.paginationNav}`}
      type={'button'}
      disabled={isPaginationNavDisabled(type, currentPage, totalPages)}
      onClick={() => onPaginationClick(type, currentPage)}
    >
      <Icon name={'shevron'} />
    </button>
  );*/
};
