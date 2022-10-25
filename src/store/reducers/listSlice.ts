import { SortBy } from '@common/enums';
import { createSlice } from '@reduxjs/toolkit';

export type ISortBy = `${SortBy}`;

export interface IFilters {
  searchQuery: '';
  categoryFilter: number | 'all';
  farmFilter: number[];
  rateFilter: number[];
  priceRange: number[];
  sortBy: ISortBy;
}

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    searchQuery: '',
    categoryFilter: 'all',
    farmFilter: [],
    rateFilter: [],
    priceRange: [],
    sortBy: 'unset',
  } as IFilters,
  reducers: {
    searchProducts: (state, action) => {
      state.searchQuery = action.payload;
    },
    categoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setFarmFilter: (state, action) => {
      state.farmFilter = action.payload;
    },
    setRateFilter: (state, action) => {
      state.rateFilter = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    resetAll: (state) => {
      state.categoryFilter = 'all';
      state.farmFilter = [];
      state.rateFilter = [];
      state.searchQuery = '';
    },
    setSortingOrder: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export default productListSlice.reducer;
export const {
  searchProducts,
  categoryFilter,
  setFarmFilter,
  setRateFilter,
  setPriceRange,
  resetAll,
  setSortingOrder,
} = productListSlice.actions;
