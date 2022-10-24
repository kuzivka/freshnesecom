import { Product } from '@common/type';
import { createSelector } from '@reduxjs/toolkit';
import { Filters } from '@store/reducers/listSlice';
import { RootState } from '@store/store';
import { getRatingValue } from '@utils/getRatingValue';
import { SortBy } from '@common/enums';
import { getPrice } from '@utils/getPrice';

const applySorting = (sortBy: string) => (a: Product, b: Product) => {
  switch (sortBy) {
    case SortBy.byRateAsc: {
      return b.averageRate - a.averageRate;
    }
    case SortBy.byRateDsc: {
      return a.averageRate - b.averageRate;
    }
    case SortBy.byNameAZ: {
      return a.name.localeCompare(b.name);
    }
    case SortBy.byNameZA: {
      return b.name.localeCompare(a.name);
    }
    case SortBy.lowestPrice: {
      return (
        (getPrice(a).priceWithDiscount || getPrice(a).price) -
        (getPrice(b).priceWithDiscount || getPrice(b).price)
      );
    }
    case SortBy.highestPrice: {
      return (
        (getPrice(a).priceWithDiscount || getPrice(a).price) -
        (getPrice(b).priceWithDiscount || getPrice(b).price)
      );
    }
    default:
      return 0;
  }
};

export const getFilteredProducts = createSelector<any, Product[]>(
  (state: RootState) => state.ecommerce.queries['getProducts(undefined)']?.data,
  (state: RootState) => state.productList,
  (
    products: Product[],
    {
      searchQuery,
      categoryFilter,
      farmFilter,
      priceRange,
      rateFilter,
      sortBy,
    }: Filters
  ) => {
    const sortByFunc = applySorting(sortBy);
    return products
      ?.filter(({ name }) => name.toLocaleLowerCase().includes(searchQuery))
      .filter(
        (product) =>
          product.category === categoryFilter || categoryFilter === 'all'
      )
      .filter(
        (product) => farmFilter.includes(product.farm) || !farmFilter.length
      )
      .filter(
        (product) =>
          ((product.price.pcs || product.price.kg) >= Math.min(...priceRange) &&
            (product.price.pcs || product.price.kg) <=
              Math.max(...priceRange)) ||
          !priceRange.length
      )
      .filter(
        (product) =>
          rateFilter.includes(Math.floor(getRatingValue(product))) ||
          !rateFilter.length
      )
      .sort(sortByFunc);
  }
);
