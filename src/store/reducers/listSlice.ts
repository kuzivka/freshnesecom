import { createSlice } from '@reduxjs/toolkit';

export interface Filters {
  searchQuery: '';
  categoryFilter: number | 'all';
  farmFilter: number[];
  rateFilter: number[];
  priceRange: number[];
  sortBy:
    | 'byRate'
    | 'byNameAZ'
    | 'nameZA'
    | 'lowestPrice'
    | 'highestPrice'
    | '';
}

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    searchQuery: '',
    categoryFilter: 'all',
    farmFilter: [],
    rateFilter: [],
    priceRange: [],
    sortBy: '',
  } as Filters,
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
    setSortingOrder: (state, action) => (state.sortBy = action.payload),
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
} = productListSlice.actions;
