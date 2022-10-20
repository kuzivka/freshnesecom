import { Product } from '@common/type';

export function productsMinMaxPrice(products: Product[] | undefined) {
  const prices = products?products.map((product) => product.price.pcs ?? product.price.kg):[3,1000]
    
  const min = Math.floor(Math.min(...prices));
  const max = Math.ceil(Math.max(...prices));
  return { min, max };
}
