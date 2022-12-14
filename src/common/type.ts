export interface Category {
  id: number;
  name: string;
  brand: Farm[];
}
export interface Price {
  pcs: number | null;
  kg: number;
  box: number;
  pckg: number;
}
export interface Farm {
  id: number;
  name: string;
  categoryId: number;
}
export interface Stock {
  pcs: number | null;
  kg: number;
  box: number;
  pckg: number;
}
export interface Product {
  id: number;
  name: string;
  farm: number;
  description: string;
  img: string[];
  discount: number | null;
  price: Price;
  rate: number[];
  freshness: string;
  color: string;
  stock: Stock;
  country: string;
  delivery: string;
  shippingPrice: string;
  reviews: string[];
  question: string[];
  category: number;
  averageRate: number;
  size: string;
  deliveryIn: number;
  origins: string;
  recipe: string;
}
