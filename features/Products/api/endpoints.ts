import { API_BASE_URL } from '@shared/constants/api';

export const PRODUCTS_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  CATEGORIES: `${API_BASE_URL}/products/categories`,
} as const;
