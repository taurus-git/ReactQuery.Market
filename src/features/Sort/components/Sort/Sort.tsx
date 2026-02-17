import React, { useCallback } from 'react';
/*import styles from './Sort.module.scss';*/
import { SORT_OPTIONS, SortOption } from '@features/Sort/types/sort.types';
import { useSort } from '@features/Sort/hooks/useSort';
import { RadioButton } from '@shared/ui/RadioButton/RadioButton';

interface SortProps {
  onSelect?: () => void;
  className?: string;
}

export const Sort = ({ onSelect, className }: SortProps) => {
  const { setSort, isSortButtonActive } = useSort();

  const handleClick = useCallback(
    (option: SortOption) => {
      setSort(option);
      onSelect?.();
    },
    [setSort, onSelect],
  );

  const getSortButtonAttributes = (option: SortOption) => {
    const isSortActive = isSortButtonActive(option);
    const sortButtonClassName = [className].filter((v): v is string => !!v).join(' ');

    return { isSortActive, sortButtonClassName };
  };

  return (
    <>
      {SORT_OPTIONS.map((option) => {
        const { isSortActive, sortButtonClassName } = getSortButtonAttributes(option);

        return (
          <RadioButton
            key={`${option.sortBy}-${option.order}`}
            className={sortButtonClassName}
            onClick={() => handleClick(option)}
            active={isSortActive}
          >
            <span>{option.label}</span>
          </RadioButton>
        );
      })}
    </>
  );
};
