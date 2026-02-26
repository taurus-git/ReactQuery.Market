import { ProductsSortParams } from '@features/Sort/types/sort.types';
import { ProductsCategoryParams } from '@features/Products/types/categories.types';
import { ProductsPaginationParams } from '@features/Pagination/types/pagination.types';

export interface Product {
  id: number;
  images: string[];
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  category: string;
  discountPercentage?: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface FetchProductsByCategoryParams {
  slug: string;
  sortBy?: string;
  order?: string;
}

export interface FetchProductsParams
  extends ProductsSortParams, ProductsCategoryParams, ProductsPaginationParams {}
