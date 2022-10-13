import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productListReducer from '@reducers/listSlice';
import { ecommerceApi } from '@services/ecommerce';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  [ecommerceApi.reducerPath]: ecommerceApi.reducer,
  productList: productListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerceApi.middleware),
});
