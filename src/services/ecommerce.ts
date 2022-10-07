import { Category } from '@common/type';
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
  }),
});

export const { useGetCategoriesQuery } = ecommerceApi;
