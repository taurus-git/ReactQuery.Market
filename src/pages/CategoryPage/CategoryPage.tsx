import React from 'react';
import styles from './CategoryPage.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { useParams } from 'react-router-dom';
import { useCategoryProducts } from '@features/Products/hooks/useCategoryProducts';
import { ProductGrid } from '@features/Products/components/ProductGrid/ProductGrid';
import { QueryState } from '@shared/ui/QueryState';
import { SortDropdown } from '@features/Sort/components/SortDropdown/SortDropdown';
import { HOME_PAGE_LIMIT } from '@pages/HomePage/config/pages';
import { PaginationContext } from '@features/Pagination/types/pagination.types';
import { usePaginationOptions } from '@features/Pagination/hooks/usePaginationOptions';
import { Pagination } from '@features/Pagination/components/Pagination/Pagination';
import { useProductsParams } from '@features/Products/hooks/useProductsParams';
import { ErrorMessage } from '@shared/ui/ErrorMessage';

export const CategoryPage = () => {
  const { slug } = useParams();
  if (!slug) return <ErrorMessage />;

  const { limit, skip, currentPage } = usePaginationOptions({ limit: HOME_PAGE_LIMIT });
  const params = useProductsParams({ limit, skip, currentPage });
  const query = useCategoryProducts({ ...params, slug });
  const categoryName: string = query.data?.products[0]?.category || slug;

  const totalPages = query.data?.total ? Math.ceil(query.data.total / HOME_PAGE_LIMIT) : 0;

  const paginationContext: PaginationContext = {
    currentPage: currentPage,
    totalPages: totalPages,
  };

  return (
    <div>
      <Container>
        <div className={`${styles.categoryWrapper}`}>
          <h1 className={`${styles.header}`}>{categoryName}</h1>

          <div className={`${styles.sort}`}>
            <SortDropdown />
          </div>

          <div className={`${styles.productList}`}>
            <QueryState query={query}>
              {(data) => <ProductGrid productsResponse={data} />}
            </QueryState>
          </div>

          {totalPages > 1 && (
            <>
              <div className={`${styles.pagination}`}>
                <QueryState query={query}>
                  {() => <Pagination context={paginationContext} />}
                </QueryState>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
