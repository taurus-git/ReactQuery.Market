import React from 'react';
import { QueryState } from '@shared/ui/QueryState';
import { useCategoryProducts } from '@features/Products/hooks/useCategoryProducts';
import { ProductGrid } from '@features/Products/components/ProductGrid';
import { useCategories } from '@features/Products/hooks/useCategories';
import { useCategory } from '@features/Products/hooks/useCategory';
import { useProducts } from '@features/Products/hooks/useProducts';
import { useSingleProduct } from '@features/Products/hooks/useSingleProduct';
import SingleProductPage from '@pages/SingleProductPage';

export const HomePage = () => {
  //const { data, isLoading, isError } = useProducts();
  //const { data, isLoading, isError } = useCategoryProducts({ slug: 'smartphones' });
  /*const { data } = useCategory('groceries');*/
  const { data, isLoading, isError } = useSingleProduct(5);
  console.log(data);
  return (
    <div>
      <h4>HomePage</h4>
      <SingleProductPage />
      {/*    <QueryState isLoading={isLoading} isError={isError}>
              {data && <ProductGrid data={data} />}
      </QueryState>*/}
    </div>
  );
};
