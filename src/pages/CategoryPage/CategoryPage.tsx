import React from 'react';
import styles from './CategoryPage.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { useParams } from 'react-router-dom';
import { useCategoryProducts } from '@features/Products/hooks/useCategoryProducts';
import { ProductGrid } from '@features/Products/components/ProductGrid/ProductGrid';
import { QueryState } from '@shared/ui/QueryState';
import { SortDropdown } from '@features/Sort/components/SortDropdown/SortDropdown';

export const CategoryPage = () => {
  const { slug } = useParams();
  if (!slug) return null;

  const query = useCategoryProducts(String(slug));
  const categoryName: string = query.data?.products[0]?.category || slug;

  return (
    <div>
      <Container>
        <h1 className={`${styles.header}`}>{categoryName}</h1>
        {/*sort*/}
        <div className={`${styles.sort}`}>
          <SortDropdown />
        </div>
        {/*products*/}
        <div className={`${styles.productList}`}>
          <QueryState query={query}>{(data) => <ProductGrid productsResponse={data} />}</QueryState>
        </div>
        {/*pagination*/}
      </Container>
    </div>
  );
};
