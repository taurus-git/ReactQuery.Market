import React from 'react';
import { SORT_OPTIONS, SortOption } from '@features/Sort/types/sort.types';
import { useSort } from '@features/Sort/hooks/useSort';

interface SortProps {
  onSelect?: () => void;
}

export const Sort = ({ onSelect }: SortProps) => {
  const { setSort } = useSort();

  const handleClick = (option: SortOption) => {
    setSort(option);
    onSelect?.();
  };

  return (
    <>
      {SORT_OPTIONS.map((option) => (
        <button key={option.label} onClick={() => handleClick(option)}>
          {option.label}
        </button>
      ))}
    </>
  );
};
