import React from 'react';
import styles from './Pagination.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';
import { ProductsResponse } from '@features/Products/types/products.types';
import {
  canGoPrev,
  getPagination,
  getPaginationNavPage,
  isPaginationNavDisabled,
} from '@features/Pagination/utils/paginationUtils';
import { dots, ITEMS_PER_PAGES } from '@features/Pagination/constants/pagination';
import { PaginateNavType, PaginateNavTypes } from '@features/Pagination/types/pagination.types';
import { PaginateNav } from '@features/Pagination/components/PaginateNav/PaginateNav';

interface PaginationProps {
  productsResponse: ProductsResponse;
  currentPage: number;
  setPage: (page: number) => void;
  currentLimit: number;
}

export const Pagination = ({
  productsResponse,
  currentPage,
  setPage,
  currentLimit,
}: PaginationProps) => {
  const { total } = productsResponse;
  const itemsPerPage = currentLimit ? currentLimit : ITEMS_PER_PAGES;
  const totalPages = total ? Math.ceil(total / itemsPerPage) : 0;

  if (totalPages <= 1) return;

  const pagination = getPagination({ currentPage, totalPages });



  return (
    <nav>
      <ul className={`${styles.pagination}`}>
        <li className={`${styles.paginationItem}`}>
          <PaginateNav
            type={PaginateNavTypes.prev}
            setPage={setPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </li>

        {pagination.map((page) => {
          if (page === dots) {
            return <span>{dots}</span>;
          }

          const buttonClassName = () => {
            let buttonClass = `${styles.paginationButton}`;
            if (page === currentPage) {
              buttonClass += ` ${styles.paginationButtonActive}`;
            }

            return buttonClass;
          };

          const buttonDisabled = () => {
            switch (currentPage) {
              case page:
                return true;
              case totalPages:
                return true;
              default:
                return false;
            }
          };

          return (
            <li key={page}>
              <button
                type={'button'}
                className={buttonClassName()}
                onClick={() => setPage(Number(page))}
                disabled={buttonDisabled()}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li>
          <PaginateNav
            type={PaginateNavTypes.next}
            setPage={setPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </li>
      </ul>
    </nav>
  );
};
