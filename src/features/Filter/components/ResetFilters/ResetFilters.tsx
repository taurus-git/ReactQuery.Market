import React from 'react';
import { useResetFilters } from '@features/Filter/hooks/useResetFilters';

export const ResetFilters = () => {
  const { resetFilters } = useResetFilters();

  const handleReset = () => {
    resetFilters();
  };

  return <button onClick={handleReset}>Сбросить фильтр</button>;
};
