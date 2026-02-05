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
