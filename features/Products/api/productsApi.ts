import { PRODUCTS_ENDPOINTS } from './index';
import { apiClient } from '@services/api/axios.config';
import { CategoryProductsParams, ProductsInCategory } from '@features/Products/types';

export const fetchProducts = async (): Promise<ProductsInCategory> => {
  const { data } = await apiClient.get(PRODUCTS_ENDPOINTS.PRODUCTS);
  return data;
};

export const fetchCategoryProducts = async (
  params: CategoryProductsParams,
): Promise<ProductsInCategory> => {
  const { data } = await apiClient.get(`${PRODUCTS_ENDPOINTS.CATEGORY}/${params.slug}`);
  return data;
};
