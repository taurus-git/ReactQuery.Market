import React, { useCallback } from 'react';
import styles from './Sort.module.scss';
import { SORT_OPTIONS, SortOption } from '@features/Sort/types/sort.types';
import { useSort } from '@features/Sort/hooks/useSort';
import { Icon } from '@shared/ui/Icon/Icon';

interface SortProps {
  children?: React.ReactNode;
  onSelect?: () => void;
  className?: string;
}

export const Sort = ({ children, onSelect, className }: SortProps) => {
  const { sortBy, order, setSort, isSortButtonActive } = useSort();

  console.log(sortBy, order);

  const handleClick = useCallback(
    (option: SortOption) => {
      setSort(option);
      onSelect?.();
    },
    [setSort, onSelect],
  );

  const getSortButtonAttributes = (option: SortOption) => {
    const isSortActive = isSortButtonActive(option);

    const sortButtonClassName = [styles.sort, className, isSortActive && styles.sortActive]
      .filter((v): v is string => !!v)
      .join(' ');

    return { isSortActive, sortButtonClassName };
  };

  return (
    <>
      {SORT_OPTIONS.map((option) => {
        const { isSortActive, sortButtonClassName } = getSortButtonAttributes(option);
        return (
          <button
            key={`${option.sortBy}-${option.order}`}
            className={sortButtonClassName}
            onClick={() => handleClick(option)}
          >
            {children}
            <Icon name={isSortActive ? 'circle_filled' : 'circle'} />
            <span>{option.label}</span>
          </button>
        );
      })}
    </>
  );
};
