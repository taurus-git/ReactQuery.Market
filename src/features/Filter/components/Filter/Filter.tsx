import React from 'react';
import styles from './Filter.module.scss';
import { Category } from '@features/Products/types/categories.types';
import { useCategoryFilter } from '@features/Filter/hooks/useCategoryFilter';
import { ResetFilters } from '@features/Filter/components/ResetFilters/ResetFilters';
import { RadioButton } from '@shared/ui/RadioButton/RadioButton';

interface FilterProps {
  filter: Category[];
  onSelect?: () => void;
}

export const Filter = ({ filter, onSelect }: FilterProps) => {
  const { category, setCategory } = useCategoryFilter();

  const handleChange = (slug: string) => {
    setCategory(slug);
    onSelect?.();
  };

  return (
    <>
      <ResetFilters
        className={`${styles.resetFilter} btn btn--size-md btn--font-md btn--light`}
        disabled={!category}
        onClick={onSelect}
      />
      <legend className={`${styles.filterLegend} fw-bold`}>Категории товаров</legend>

      {filter.map(({ slug, name }) => (
        <RadioButton
          key={slug}
          className={`${styles.filterButton}`}
          active={category === slug}
          onClick={() => handleChange(slug)}
        >
          <span>{name}</span>
        </RadioButton>
      ))}
    </>
  );
};
