import React, { useState } from 'react';
import styles from './HomePage.module.scss';
import { Container } from '@shared/layout/Container/Container';
/*
import { Checkbox } from '@shared/ui/Checkbox/Checkbox';
import { Counter } from '@shared/ui/Counter/Counter';*/
import { HeroSlider } from '@pages/HomePage/components/HeroSlider/HeroSlider';
import { FullScreenPanel } from '@shared/ui/FullScreenPanel/FullScreenPanel';
import { CloseButton } from '@shared/ui/CloseButton/CloseButton';
import { Sort } from '@features/Sort/components/Sort/Sort';
import { Icon } from '@shared/ui/Icon/Icon';
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

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleSort = () => {
    setIsSortOpen((prev) => !prev);
  };

  const handleToggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div>
      <HeroSlider />
      <Container>
        <div className={`${styles.homeWrapper}`}>
          {/*Mobile buttons*/}
          <button className={`${styles.sortButton}`} onClick={handleToggleSort}>
            <div>Сорировать</div>
            <Icon name={'shevron'} />
          </button>
          <button className={`${styles.filterButton}`} onClick={handleToggleFilter}>
            <div>Фильтры</div>
          </button>
          {/*Mobile modal*/}
          {isSortOpen && (
            <FullScreenPanel>
              <CloseButton className={`position-absolute close`} onClose={handleToggleSort} />
              <Sort onSelect={handleToggleSort} />
            </FullScreenPanel>
          )}
          {isFilterOpen && (
            <FullScreenPanel>
              <CloseButton className={`position-absolute close`} onClose={handleToggleFilter} />
              <div className={`${styles.filterCategory}`}>
                <QueryState query={categoriesQuery}>
                  {(data) => <Filter onSelect={handleToggleFilter} filter={data} />}
                </QueryState>
              </div>
            </FullScreenPanel>
          )}
          {/*Desktop sort, filters*/}
          <div className={`${styles.sort}`}>
            <Sort /> {/*Make sort in [frame] For Desktop*/}
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
        </div>
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
      </Container>
    </div>
  );
};
