import React from 'react';
import { PaginationContext } from '@features/Pagination/types/pagination.types';
import styles from './PaginatePages.module.scss';
import { createPagination } from '@features/Pagination/utils/paginationUtils';
import { useSetPage } from '@features/Pagination/hooks/useSetPage';
import { dots } from '@features/Pagination/constants/pagination';

interface PaginatePagesProps {
  context: PaginationContext;
}

export const PaginatePages = ({ context }: PaginatePagesProps) => {
  const { currentPage } = context;
  const pagination = createPagination(context);
  const pages = pagination.getPagination();

  const paginateClassName = (page: number) => {
    let buttonClass = `${styles.paginationButton}`;
    if (page === currentPage) {
      buttonClass += ` ${styles.paginationButtonActive}`;
    }

    return buttonClass;
  };

  const { setPage } = useSetPage();

  return (
    <nav>
      <ul className={`${styles.pagination}`}>
        {pages.map((page) => {
          if (page === dots) {
            return <span key={page}>{dots}</span>;
          }

          return (
            <li key={page}>
              <button
                type={'button'}
                className={paginateClassName(Number(page))}
                onClick={() => setPage(Number(page))}
                disabled={currentPage == page}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
