import { createSlice } from '@reduxjs/toolkit';

type CategoryFilter = number | 'all';

export interface Filters{
  searchQuery: '',
    categoryFilter: CategoryFilter
    farmFilter: number[],
    rateFilter:number[],
    priceRange: number[],
}

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    searchQuery: '',
    categoryFilter: 'all' as CategoryFilter,
    farmFilter: [] as number[],
    rateFilter: [] as number[],
    priceRange: [0, 100],
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
