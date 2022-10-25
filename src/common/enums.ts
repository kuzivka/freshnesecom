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
// unset =' Select',
// byRateAsc = 'By rate (asc)',
// byRateDsc = 'By rate (desc)',
// byNameAZ = 'Name A-Z',
// byNameZA = 'Name Z-A',
// lowestPrice = 'Lowest price',
// highestPrice = 'Highest price',
