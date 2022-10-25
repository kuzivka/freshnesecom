import { SortBy } from '@common/enums';
import { Product } from '@common/type';
import { createSelector } from '@reduxjs/toolkit';
import { IFilters } from '@store/reducers/listSlice';
import { RootState } from '@store/store';
import { getPrice } from '@utils/getPrice';
import { getRatingValue } from '@utils/getRatingValue';

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
        (getPrice(b).priceWithDiscount || getPrice(b).price) -
        (getPrice(a).priceWithDiscount || getPrice(a).price)
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
    }: IFilters
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
