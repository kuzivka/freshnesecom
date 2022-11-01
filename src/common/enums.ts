export const PATH = {
  ALL_PRODUCTS: { path: '/', name: 'All Products' },
  PRODUCT: { path: '/product-page/:id' },
  CART: { path: '/shopping-cart', name: 'Shopping Cart' },
};

export enum SortBy {
  unset = 'unset',
  byRateAsc = 'byRateAsc',
  byRateDsc = 'byRateDesc',
  byNameAZ = 'byNameAZ',
  byNameZA = 'byNameZA',
  lowestPrice = 'lowestPrice',
  highestPrice = 'highestPrice',
}
