import { Category, Farm, Product } from '@common/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ecommerceApi = createApi({
  reducerPath: 'ecommerce',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://633c403574afaef164055348.mockapi.io/api/',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], null>({
      query: () => '/categories',
    }),
    getProducts: builder.query<Product[], null>({
      query: () => '/products',
    }),
    getFarms: builder.query<Farm[], null>({
      query: () => `/brand`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery, useGetFarmsQuery } =
  ecommerceApi;
