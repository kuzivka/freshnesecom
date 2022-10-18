import { createSlice } from '@reduxjs/toolkit';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    searchQuery: '',
    categoryFilter: 0,
  },
  reducers: {
    searchProducts: (state, action) => {
      state.searchQuery = action.payload;
    },
    categoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
  },
});

export default productListSlice.reducer;
export const { searchProducts, categoryFilter } = productListSlice.actions;
