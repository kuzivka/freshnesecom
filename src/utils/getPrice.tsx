import { Product } from '@common/type';

export const getPrice = (product: Product) => {
  if (product.price.pcs && product.stock.pcs) {
    return {
      unit: 'pcs',
      price: product.price.pcs,
      priceWithDiscount: product.discount
        ? (product.price.pcs * product.discount) / 100
        : null,
    };
  } else {
    return { unit: 'kg', price: product.price.kg };
  }
};
