import React from 'react';
import styles from './HomePage.module.scss';
import { Container } from '@shared/layout/Container/Container';
/*
import { Checkbox } from '@shared/ui/Checkbox/Checkbox';
import { Counter } from '@shared/ui/Counter/Counter';*/
import { HeroSlider } from '@pages/HomePage/components/HeroSlider/HeroSlider';
import { Filter } from '@features/Filter/components/Filter/Filter';
import { ProductGrid } from '@features/Products/components/ProductGrid/ProductGrid';
import { useProducts } from '@features/Products/hooks/useProducts';
import { QueryState } from '@shared/ui/QueryState';
import { Pagination } from '@features/Pagination/components/Pagination/Pagination';
import { ShowMore } from '@features/ShowMore/ShowMore';
import { useCategories } from '@features/Products/hooks/useCategories';
import { usePaginationOptions } from '@features/Pagination/hooks/usePaginationOptions';
import { PaginationContext } from '@features/Pagination/types/pagination.types';
import { HOME_PAGE_LIMIT } from '@pages/HomePage/config/pages';
import { CatalogControls } from '@pages/HomePage/components/CatalogControls/CatalogControls';
import { SortDropdown } from '@features/Sort/components/SortDropdown/SortDropdown';

export const HomePage = () => {
  const { limit, skip, currentPage } = usePaginationOptions({ limit: HOME_PAGE_LIMIT });
  const productsQuery = useProducts({ limit, skip, currentPage });
  const categoriesQuery = useCategories();

  const totalPages = productsQuery.data?.total
    ? Math.ceil(productsQuery.data.total / HOME_PAGE_LIMIT)
    : 0;

  const paginationContext: PaginationContext = {
    currentPage: currentPage,
    totalPages: totalPages,
  };

  return (
    <div>
      <HeroSlider />
      <CatalogControls />
      <Container>
        <div className={`${styles.homeWrapper}`}>
          {/*Desktop sort, filters*/}
          <div className={`${styles.sort}`}>
            <SortDropdown />
          </div>
          <aside className={`${styles.filters}`}>
            <QueryState query={categoriesQuery}>{(data) => <Filter filter={data} />}</QueryState>
          </aside>
          {/*General components*/}
          <div className={`${styles.productList}`}>
            <QueryState query={productsQuery}>
              {(data) => <ProductGrid productsResponse={data} />}
            </QueryState>
          </div>
          {totalPages > 1 && (
            <>
              <div className={`${styles.pagination}`}>
                <QueryState query={productsQuery}>
                  {() => <Pagination context={paginationContext} />}
                </QueryState>
              </div>
              <div className={`${styles.showMore}`}>
                <ShowMore />
              </div>
            </>
          )}

          {/*<h3>Filters</h3>
        <Fieldset>
          <Legend>Бренды</Legend>
          <Checkbox
            id={`category_${value}`}
            checked={false}
            name="category"
            value="helmets"
            label={'Шлемы'}
          >
            <Counter value={205187} />
          </Checkbox>

          <Checkbox
            id={`category_${value}`}
            checked={false}
            name="category"
            value="shoes"
            disabled={true}
            label={'Обувь'}
          >
            <Counter value={47} />
          </Checkbox>

          <Checkbox
            id={`category_${value}`}
            checked={true}
            name="category"
            value="snowboards"
            label={'Сноуборды'}
          >
            <Counter value={995} />
          </Checkbox>
        </Fieldset>*/}
          {/*    <QueryState isLoading={isLoading} isError={isError}>
              {data && <ProductGrid data={data} />}
      </QueryState>*/}
        </div>
      </Container>
    </div>
  );
};
