import { apiClient } from '@services/api/axios.config';
import { PRODUCTS_ENDPOINTS } from './endpoints';
import { Product, ProductsResponse } from '@features/Products/types/products.types';
import { CategoryProductsParams } from '@features/Products/types/categories.types';

export const fetchProducts = async (params: string): Promise<ProductsResponse> => {
  if (!params) {
    const { data } = await apiClient.get(PRODUCTS_ENDPOINTS.PRODUCTS);
    return data;
  }

  const { data } = await apiClient.get(`${PRODUCTS_ENDPOINTS.PRODUCTS}?${params}`);
  return data;
};

export const fetchCategoryProducts = async (
  params: CategoryProductsParams,
): Promise<ProductsResponse> => {
  const { data } = await apiClient.get(`${PRODUCTS_ENDPOINTS.CATEGORY}/${params.slug}`);
  return data;
};

export const fetchSingleProduct = async (id: number): Promise<Product> => {
  const { data } = await apiClient.get(`${PRODUCTS_ENDPOINTS.PRODUCTS}/${id}`);
  return data;
};
