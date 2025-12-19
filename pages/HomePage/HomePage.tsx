import React from 'react';
import { QueryState } from '@shared/ui/QueryState';
import { useCategoryProducts } from '@features/Products/hooks/useCategoryProducts';
import { ProductGrid } from '@features/Products/components/ProductGrid';

export const HomePage = () => {
  /*const { data, isLoading, isError } = useProducts();*/
  const { data, isLoading, isError } = useCategoryProducts({ slug: 'smartphones' });
  console.log(data);
  return (
    <div>
      <h4>HomePage</h4>
      <QueryState isLoading={isLoading} isError={isError}>
        {data && <ProductGrid data={data} />}
      </QueryState>
    </div>
  );
};
