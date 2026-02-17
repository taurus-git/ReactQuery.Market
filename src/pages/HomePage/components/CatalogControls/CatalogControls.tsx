import React, { useState } from 'react';
import styles from './CatalogControls.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';
import { FullScreenPanel } from '@shared/ui/FullScreenPanel/FullScreenPanel';
import { CloseButton } from '@shared/ui/CloseButton/CloseButton';
import { Sort } from '@features/Sort/components/Sort/Sort';
import { QueryState } from '@shared/ui/QueryState';
import { Filter } from '@features/Filter/components/Filter/Filter';
import { useCategories } from '@features/Products/hooks/useCategories';

export const CatalogControls = () => {
  const categoriesQuery = useCategories();

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleSort = () => {
    setIsSortOpen((prev) => !prev);
  };

  const handleToggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };
  return (
    <>
      <div className={`${styles.catalogControls} d-flex`}>
        <button
          className={`${styles.sortButton} d-flex align-center position-relative`}
          onClick={handleToggleSort}
        >
          <span>Сорировать</span>
          <Icon name={'shevron'} size={12} />
        </button>
        <button className={`${styles.filterButton}`} onClick={handleToggleFilter}>
          <span>Фильтры</span>
        </button>
      </div>
      {/*Mobile modal*/}
      {isSortOpen && (
        <FullScreenPanel>
          <CloseButton className={`position-absolute close`} onClose={handleToggleSort} />
          <div className={`${styles.sortWrapper} h-100 p-12 d-flex flex-column flex-wrap`}>
            <Sort onSelect={handleToggleSort} />
          </div>
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
    </>
  );
};
