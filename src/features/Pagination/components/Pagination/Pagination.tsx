import React from 'react';
import styles from './Pagination.module.scss';
import { dots } from '@features/Pagination/constants/pagination';
import { useSetPage } from '@features/Pagination/hooks/useSetPage';
import { PaginationContext } from '@features/Pagination/types/pagination.types';
import { createPagination } from '@features/Pagination/utils/paginationUtils';

interface PaginationProps {
  context: PaginationContext;
}

export const Pagination = ({ context }: PaginationProps) => {
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
        {/*<li className={`${styles.paginationItem}`}>
          <PaginateNav
            type={PaginateNavTypes.prev}
            setPage={setPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </li>*/}
        {pages.map((page) => {
          if (page === dots) {
            return <span>{dots}</span>;
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
        {/*<li>
          <PaginateNav
            type={PaginateNavTypes.next}
            setPage={setPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </li>*/}
      </ul>
    </nav>
  );
};
