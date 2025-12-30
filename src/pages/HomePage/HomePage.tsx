import React from 'react';
/*import { QueryState } from '@shared/ui/QueryState/QueryState';
import { useCategoryProducts } from '@features/Products/hooks/useCategoryProducts';
import { ProductGrid } from '@features/Products/components/ProductGrid/ProductGrid';
import { useCategories } from '@features/Products/hooks/useCategories';
import { useCategory } from '@features/Products/hooks/useCategory';
import { useProducts } from '@features/Products/hooks/useProducts';
import { useSingleProduct } from '@features/Products/hooks/useSingleProduct';
import { Icon } from '@shared/ui/Icon/Icon';*/
import { Fieldset } from '@shared/ui/Fieldset/Fieldset';
import { Legend } from '@shared/ui/Legend/Legend';
import { Checkbox } from '@shared/ui/Checkbox/Checkbox';
import { Counter } from '@shared/ui/Counter/Counter';

export const HomePage = () => {
  //const { data, isLoading, isError } = useProducts();
  //const { data, isLoading, isError } = useCategoryProducts({ slug: 'smartphones' });
  /*const { data } = useCategory('groceries');*/
  //const { data, isLoading, isError } = useSingleProduct(5);
  const value = '';
  return (
    <div>
      <h1 style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-manrope-regular)' }}>
        HomePage
      </h1>
      {/*<h2>Black and white</h2>
      <button className="btn btn--size-md btn--font-md btn--dark">Click me</button>
      <p>1</p>
      <button disabled={true} className="btn btn--size-md btn--font-md btn--dark">
        Click me
      </button>
      <p>1111</p>
      <button className="btn btn--size-md btn--font-md btn--light">Click me</button>
      <p>1</p>
      <button disabled={true} className="btn btn--size-md btn--font-md btn--light">
        Click me
      </button>

      <h2>Red and white</h2>
      <button className="btn btn--size-lg btn--font-lg btn--cta-dark">Click me</button>
      <p>1</p>
      <button disabled={true} className="btn btn--size-lg btn--font-lg btn--cta-dark">
        Click me
      </button>
      <p>111</p>
      <button className="btn btn--size-lg btn--font-lg btn--cta-light">Click me</button>
      <p>1</p>
      <button disabled={true} className="btn btn--size-lg btn--font-lg btn--cta-light">
        Click me
      </button>*/}

      {/*<h2>Icons</h2>*/}
      {/*<button>*/}
      {/*  <Icon name="account" size={24} color="var(--color-red)" />*/}
      {/*</button>*/}
      {/*<button>*/}
      {/*  <Icon name="star" size={24} />*/}
      {/*</button>*/}

      <h3>Filters</h3>
      <Fieldset>
        <Legend>Бренды</Legend>
        <Checkbox
          id={`category_${value}`}
          checked={false}
          name="category"
          value="helmets"
          label={'Шлемы'}
        >
          <Counter value={205187} />
        </Checkbox>

        <Checkbox
          id={`category_${value}`}
          checked={false}
          name="category"
          value="shoes"
          disabled={true}
          label={'Обувь'}
        >
          <Counter value={47} />
        </Checkbox>

        <Checkbox
          id={`category_${value}`}
          checked={true}
          name="category"
          value="snowboards"
          label={'Сноуборды'}
        >
          <Counter value={995} />
        </Checkbox>
      </Fieldset>
      {/*    <QueryState isLoading={isLoading} isError={isError}>
              {data && <ProductGrid data={data} />}
      </QueryState>*/}
    </div>
  );
};
