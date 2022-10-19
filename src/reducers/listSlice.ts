import { createSlice } from '@reduxjs/toolkit';

type CategoryFilter = number | undefined;

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    searchQuery: '',
    categoryFilter: undefined as CategoryFilter,
    farmFilter: [] as number[],
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
    resetFarms: (state)=>{
      state.farmFilter = []
    }
  },
});

export default productListSlice.reducer;
export const {
  searchProducts,
  categoryFilter,
  addFarmFilter,
  deleteFarmFilter,
  setOneFarmFilter, resetFarms
} = productListSlice.actions;
