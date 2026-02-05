import { apiClient } from '@services/api/axios.config';
import { PRODUCTS_ENDPOINTS } from './endpoints';
import { Category } from '../types/categories.types';
//import { ProductsResponse } from '../types/products.types';

export const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await apiClient.get(PRODUCTS_ENDPOINTS.CATEGORIES);
  return data;
};

export const fetchCategory = async (slug: string) => {
  const { data } = await apiClient.get(PRODUCTS_ENDPOINTS.CATEGORIES);
  return data.find((category: Category) => category.slug === slug);
};
