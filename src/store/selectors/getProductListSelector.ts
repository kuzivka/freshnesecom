import { Product } from '@common/type';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { getRatingValue } from '@utils/getRatingValue';

type Selector<Return> = (state: RootState) => Return | undefined;

export const getProductListSelector = (
  products: Product[] | undefined
): Selector<Product[]> =>
  createSelector(
    [(state: RootState) => state.productList],
    ({ searchQuery, categoryFilter, farmFilter, priceRange, rateFilter }) =>
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
        .filter((product)=>(rateFilter.includes(Math.floor(getRatingValue(product)))||!rateFilter.length))
  );
