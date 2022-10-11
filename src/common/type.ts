

export interface Category {
  id: number;
  name: string;
  brand: Farm[];
}

export interface Product {
  id: number;
  name: string;
  farm: number;
  description: string;
  img: string[];
  discount: number | null;
  price: {
    pcs: number;
    kg: number;
    box: number;
    pckg: number;
  };
  rate: number[];
  freshness: string;
  color: string;
  stock: number;
  country: string;
  delivery: string;
  shippingPrice: string;
  reviews: string[];
  question: string[];
}
export interface Farm {
  id: number;
  name: string;
  categoryId: number;
}
