import { Product } from '@common/type';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

type Selector<Return> = (state: RootState) => Return | undefined;

export const selectProductListSelector = (
  products: Product[] | undefined
): Selector<Product[]> =>
  createSelector(
    [(state: RootState) => state.productList.searchQuery],
    (searchQuery) =>
      products?.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchQuery)
      )
  );
