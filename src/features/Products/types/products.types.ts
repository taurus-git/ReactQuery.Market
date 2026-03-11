import { ProductsSortParams } from '@features/Sort/types/sort.types';
import { ProductsCategoryParams } from '@features/Products/types/categories.types';
import { ProductsPaginationParams } from '@features/Pagination/types/pagination.types';

export type Dimensions = Record<string, number | string>;

export interface Product {
  id: number;
  images: string[];
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  category: string;
  discountPercentage?: number;
  dimensions?: Dimensions;
  rating?: number;
  reviews?: string[];
  sku?: string;
  weight?: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface FetchProductsByCategoryParams
  extends ProductsPaginationParams, ProductsSortParams {
  slug: string;
}

export interface FetchProductsParams
  extends ProductsSortParams, ProductsCategoryParams, ProductsPaginationParams {}
