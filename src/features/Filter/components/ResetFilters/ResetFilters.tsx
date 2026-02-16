import React from 'react';
import { useResetFilters } from '@features/Filter/hooks/useResetFilters';

interface ResetFiltersProps {
  onClick?: () => void;
}

export const ResetFilters = ({ onClick }: ResetFiltersProps) => {
  const { resetFilters } = useResetFilters();

  const handleReset = () => {
    resetFilters();
    onClick?.();
  };

  return <button onClick={handleReset}>Сбросить фильтр</button>;
};
