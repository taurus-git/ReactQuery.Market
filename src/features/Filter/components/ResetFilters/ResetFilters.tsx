import React from 'react';
import { useResetFilters } from '@features/Filter/hooks/useResetFilters';

interface ResetFiltersProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const ResetFilters = ({ className, disabled, onClick }: ResetFiltersProps) => {
  const { resetFilters } = useResetFilters();

  const handleReset = () => {
    resetFilters();
    onClick?.();
  };

  return (
    <button className={className ? className : ''} disabled={disabled} onClick={handleReset}>
      Сбросить фильтр
    </button>
  );
};
