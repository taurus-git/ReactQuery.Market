import { ProductsSortParams } from '@features/Sort/types/sort.types';
import { ProductsCategoryParams } from '@features/Products/types/categories.types';
import { ProductsPaginationParams } from '@features/Pagination/types/pagination.types';

export interface Product {
  id: number;
  title: string;
  price: number;
  [key: string]: unknown;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface FetchProductsParams
  extends ProductsSortParams, ProductsCategoryParams, ProductsPaginationParams {}
