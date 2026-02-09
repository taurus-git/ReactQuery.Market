import React from 'react';
import { Category } from '@features/Products/types/categories.types';
import { FILTER_PARAMS } from '@features/Filter/types/filter.types';
import { useCategoryFilter } from '@features/Filter/hooks/useCategoryFilter';
import { ResetFilters } from '@features/Filter/components/ResetFilters/ResetFilters';

interface FilterProps {
  filter: Category[];
}

export const Filter = ({ filter }: FilterProps) => {
  const { category, setCategory } = useCategoryFilter();

  return (
    <fieldset>
      <ResetFilters />
      <legend>Категории</legend>

      {filter.map(({ slug, name }) => (
        <label key={slug}>
          <input
            type="radio"
            name={FILTER_PARAMS.category}
            value={slug}
            checked={category === slug}
            onChange={() => setCategory(slug)}
          />
          {name}
        </label>
      ))}
    </fieldset>
  );
};
