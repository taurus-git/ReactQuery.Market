import React from 'react';
import { QueryState } from '@shared/ui/QueryState/QueryState';
import { useCategoryProducts } from '@features/Products/hooks/useCategoryProducts';
import { ProductGrid } from '@features/Products/components/ProductGrid/ProductGrid';
import { useCategories } from '@features/Products/hooks/useCategories';
import { useCategory } from '@features/Products/hooks/useCategory';
import { useProducts } from '@features/Products/hooks/useProducts';
import { useSingleProduct } from '@features/Products/hooks/useSingleProduct';

export const HomePage = () => {
  //const { data, isLoading, isError } = useProducts();
  //const { data, isLoading, isError } = useCategoryProducts({ slug: 'smartphones' });
  /*const { data } = useCategory('groceries');*/
  //const { data, isLoading, isError } = useSingleProduct(5);
  return (
    <div>
      <h1 style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-manrope-regular)' }}>
        HomePage
      </h1>
      <h2>Black and white</h2>
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
      </button>

      {/*    <QueryState isLoading={isLoading} isError={isError}>
              {data && <ProductGrid data={data} />}
      </QueryState>*/}
    </div>
  );
};
