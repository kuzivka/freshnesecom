import { Product } from '@common/type';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

type Selector<S> = (state: RootState) => S | undefined;

export const selectProductListSelector = (
  products: Product[] | undefined
): Selector<Product[]> =>
  createSelector(
  [(state: RootState) => state.productList.searchQuery],
  (searchQuery) => products?.filter(({ name }) => name.toLocaleLowerCase().includes(searchQuery)
  )
);

// (productList: Product[] | undefined) => (state: RootState) => {
//   return productList?.filter(({ name }) =>
//     name.toLocaleLowerCase().includes(state.productList.searchQuery)
//   );
// };
