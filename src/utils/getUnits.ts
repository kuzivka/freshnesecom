import { Product } from '@common/type';

export const getUnits = (product: Product) => {
  let result = [];
  for (const [key, value] of Object.entries(product.stock)) {
    if (value) {
      result.push(key);
    }
  }
  return result;
};
