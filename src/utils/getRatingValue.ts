import { Product } from '@common/type';

export const getRatingValue = (product: Product) =>
  Math.round(product.rate.reduce((a: number, b: number) => a + b, 0) / product.rate.length)
