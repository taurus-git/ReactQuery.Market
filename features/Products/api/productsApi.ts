import axios from 'axios';
import { PRODUCTS_ENDPOINTS } from './index';
import { ProductFilter } from '../types/products.types';
import { apiClient } from '@services/api/axios.config';

//export const fetchProducts = async (filters: ProductFilter) => {
export const fetchProducts = async () => {
  //const { category } = filters;

  /*if (category) {
    const { data } = await apiClient.get(PRODUCTS_ENDPOINTS.PRODUCTS);

    return data;
  }*/

  const { data } = await apiClient.get(PRODUCTS_ENDPOINTS.PRODUCTS);

  return data;
};
