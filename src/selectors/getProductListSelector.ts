import { Product } from '@common/type';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

type Selector<Return> = (state: RootState) => Return | undefined;

export const selectProductListSelector = (
  products: Product[] | undefined
): Selector<Product[]> =>
  createSelector(
    [(state: RootState) => state.productList],
    ({ searchQuery, categoryFilter, farmFilter, priceRange }) =>
      products
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
            (product.price.pcs || product.price.kg) >= Math.min(...priceRange) &&
            (product.price.pcs || product.price.kg) <= Math.max(...priceRange)
        )
  );
