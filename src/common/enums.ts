export enum PATH {
  ALL_PRODUCTS = '/',
  PRODUCT = '/product-page/:id',
  CART = '/shopping-cart',
}

export enum SortBy {
  unset =' Select',
  byRateAsc = 'By rate (asc)',
  byRateDsc = 'By rate (dsc)',
  byNameAZ = 'Name A-Z',
  byNameZA = 'Name Z-A',
  lowestPrice = 'Lowest price',
  highestPrice = 'Highest price',
}
