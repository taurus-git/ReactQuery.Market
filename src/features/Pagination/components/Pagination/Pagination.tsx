import React from 'react';
import styles from './Pagination.module.scss';
import { PaginateNavTypes, PaginationContext } from '@features/Pagination/types/pagination.types';
import { PaginateNav } from '@features/Pagination/components/PaginateNav/PaginateNav';
import { PaginatePages } from '@features/Pagination/components/PaginatePages/PaginatePages';

interface PaginationProps {
  context: PaginationContext;
}

export const Pagination = ({ context }: PaginationProps) => {
  return (
    <div className={`${styles.pagination} d-flex justify-center align-center flex-wrap`}>
      <PaginateNav context={context} type={PaginateNavTypes.prev} />
      <PaginatePages context={context} />
      <PaginateNav context={context} type={PaginateNavTypes.next} />
    </div>
  );
};
