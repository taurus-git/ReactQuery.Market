export interface Product {
  id: number;
  title: string;
  price: number;
  [key: string]: unknown;
}

export interface ProductsInCategory {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
