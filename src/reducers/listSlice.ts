import { createSlice } from '@reduxjs/toolkit';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    // chosenCategory: '',
    searchQuery: '',
  },
  reducers: {
    searchProducts: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export default productListSlice.reducer;
export const { searchProducts } = productListSlice.actions;
