import React from 'react';
import { SORT_OPTIONS } from '@features/Sort/types/sort.types';
import { useSort } from '@features/Sort/hooks/useSort';

export const Sort = () => {
  const { setSort } = useSort();

  return (
    <>
      {SORT_OPTIONS.map((option) => (
        <button key={option.label} onClick={() => setSort(option)}>
          {option.label}
        </button>
      ))}
    </>
  );
};
