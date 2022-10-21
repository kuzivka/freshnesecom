import { Product } from '@common/type';

export const getRatingValue = (product: Product) =>
  Math.floor(product.rate.reduce((a: number, b: number) => a + b, 0) / product.rate.length)
