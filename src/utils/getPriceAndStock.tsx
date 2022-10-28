import { Product } from '@common/type';

export const getPriceAndStock = (product: Product) => {
  if (product.price.pcs && product.stock.pcs) {
    const price = product.price.pcs;
    return {
      unit: 'pcs',
      price: price,
      priceWithDiscount:
        product.discount && price ? (price * product.discount) / 100 : price,
      inStock: product.stock.pcs,
    };
  } else {
    const price = product.price.kg;

    return {
      unit: 'kg',
      price: price,
      priceWithDiscount:
        product.discount && price ? (price * product.discount) / 100 : price,
      inStock: product.stock.kg,
    };
  }
};
