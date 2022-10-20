import { createSlice } from '@reduxjs/toolkit';

type CategoryFilter = number | 'all';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    searchQuery: '',
    categoryFilter: 'all' as CategoryFilter,
    farmFilter: [] as number[],
    priceRange: [0, 100],
  },
  reducers: {
    searchProducts: (state, action) => {
      state.searchQuery = action.payload;
    },
    categoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    addFarmFilter: (state, action) => {
      state.farmFilter.push(action.payload);
    },
    deleteFarmFilter: (state, action) => {
      const farmsSet = new Set(state.farmFilter);
      farmsSet.delete(action.payload);
      state.farmFilter = Array.from(farmsSet);
    },
    setOneFarmFilter: (state, action) => {
      state.farmFilter = [action.payload];
    },
    resetFarms: (state) => {
      state.farmFilter = [];
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    resetAll:(state) => {
      state.categoryFilter = 'all';
      state.farmFilter = [];
      state.searchQuery = ''
    }
  },
});

export default productListSlice.reducer;
export const {
  searchProducts,
  categoryFilter,
  addFarmFilter,
  deleteFarmFilter,
  setOneFarmFilter,
  resetFarms,
  setPriceRange, resetAll
} = productListSlice.actions;
