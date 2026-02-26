import { apiClient } from '@services/api/axios.config';
import { PRODUCTS_ENDPOINTS } from './endpoints';
import {
  Product,
  ProductsResponse,
  FetchProductsParams,
  FetchProductsByCategoryParams,
} from '@features/Products/types/products.types';

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

export const fetchProductsByCategory = async (
  params: FetchProductsByCategoryParams,
): Promise<ProductsResponse> => {
  const { slug, ...queryParams } = params;
  try {
    const { data } = await apiClient.get(`${PRODUCTS_ENDPOINTS.CATEGORY}/${slug}`, {
      params: queryParams,
    });
    return data;
  } catch (error) {
    console.error('Error fetching category products with error', error);
    throw error;
  }
};

export const fetchSingleProduct = async (id: number): Promise<Product> => {
  const { data } = await apiClient.get(`${PRODUCTS_ENDPOINTS.PRODUCTS}/${id}`);
  return data;
};
