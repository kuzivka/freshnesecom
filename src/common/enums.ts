export enum PATH {
  ALL_PRODUCTS = '/',
  PRODUCT = '/product-page/:id',
  CART = '/shopping-cart',
}

export enum SortBy {
  unset = 'unset',
  byRateAsc = 'byRateAsc',
  byRateDsc = 'byRateDesc',
  byNameAZ = 'byNameAZ',
  byNameZA = 'byNameZA',
  lowestPrice = 'lowestPrice',
  highestPrice = 'highestPrice',
}
