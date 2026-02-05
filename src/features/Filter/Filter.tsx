import React from 'react';

export const Filter = () => {
  return (
    <fieldset>
      <legend>Категории</legend>

      <label>
        <input type="radio" name="category" value="smartphones" />
        Smartphones
      </label>

      <label>
        <input type="radio" name="category" value="laptops" />
        Laptops
      </label>

      <label>
        <input type="radio" name="category" value="fragrances" />
        Fragrances
      </label>
    </fieldset>
  );
};
