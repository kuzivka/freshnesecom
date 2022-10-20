import { createSlice } from '@reduxjs/toolkit';

type CategoryFilter = number | 'all';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    searchQuery: '',
    categoryFilter: 'all' as CategoryFilter,
    farmFilter: [] as number[],
    rateFilter: [] as number[],
    priceRange: [0, 100],
  },
  reducers: {
    searchProducts: (state, action) => {
      state.searchQuery = action.payload;
    },
    categoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setFarmFilter: (state, action) => {
      state.farmFilter.push(action.payload);
    },
    setOneFarmFilter: (state, action) => {
      state.farmFilter = [action.payload];
    },
    resetFarms: (state) => {
      state.farmFilter = [];
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
      state.searchQuery = '';
    },
  },
});

export default productListSlice.reducer;
export const {
  searchProducts,
  categoryFilter,
  setFarmFilter,
  setOneFarmFilter,
  resetFarms,
  setRateFilter,
  setPriceRange,
  resetAll,
} = productListSlice.actions;
