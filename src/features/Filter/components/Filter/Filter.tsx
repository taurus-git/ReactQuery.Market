import React from 'react';
import { Category } from '@features/Products/types/categories.types';
import { FILTER_PARAMS } from '@features/Filter/types/filter.types';
import { useCategoryFilter } from '@features/Filter/hooks/useCategoryFilter';
import { ResetFilters } from '@features/Filter/components/ResetFilters/ResetFilters';

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
    <fieldset>
      <ResetFilters onClick={onSelect} />
      <legend>Категории</legend>

      {filter.map(({ slug, name }) => (
        <label key={slug}>
          <input
            type="radio"
            name={FILTER_PARAMS.category}
            value={slug}
            checked={category === slug}
            onChange={() => handleChange(slug)}
          />
          {name}
        </label>
      ))}
    </fieldset>
  );
};
