import { apiClient } from '@services/api/axios.config';
import { PRODUCTS_ENDPOINTS } from './endpoints';
import {
  Product,
  ProductsResponse,
  FetchProductsParams,
} from '@features/Products/types/products.types';
import { CategoryProductsParams } from '@features/Products/types/categories.types';

export const fetchProducts = async (params: FetchProductsParams): Promise<ProductsResponse> => {
  const { category, ...queryParams } = params;

  try {
    if (category) {
      const { data } = await apiClient.get(`${PRODUCTS_ENDPOINTS.CATEGORY}/${category}`, {
        params: queryParams,
      });
      return data;
    }
    const { data } = await apiClient.get(PRODUCTS_ENDPOINTS.PRODUCTS, { params: queryParams });
    return data;
  } catch (error) {
    console.error('Error fetching products with error', error);
    throw error;
  }
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
