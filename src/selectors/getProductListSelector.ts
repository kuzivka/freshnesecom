import { Category, Product } from '@common/type';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

type Selector<Return> = (state: RootState) => Return | undefined;

// const

export const selectProductListSelector = (
  products: Product[] | undefined,
  // categories: Category[]
): Selector<Product[]> =>
  createSelector(
    [(state: RootState) => state.productList],
    ({ searchQuery, categoryFilter }) =>
      products
        ?.filter(({ name }) => name.toLocaleLowerCase().includes(searchQuery))
        .filter(
          (product) =>
            product.category === categoryFilter || categoryFilter === 0
        )
  );
