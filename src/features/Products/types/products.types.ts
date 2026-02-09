import { SortBy, SortOrder } from '@features/Sort/types/sort.types';

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

export interface FetchProductsParams {
  category?: string;
  sortBy?: SortBy;
  order?: SortOrder;
  limit?: number;
  skip?: number;
}
