import { Category, Farm, Product } from '@common/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getRatingValue } from '@utils/getRatingValue';

export const ecommerceApi = createApi({
  reducerPath: 'ecommerce',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://633c403574afaef164055348.mockapi.io/api/',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/categories',
    }),
    getFarms: builder.query<Farm[], void>({
      query: () => `/brand`,
    }),
    getSelectedProduct: builder.query<Product, string>({
      query: (id: string) => `products/${id}`,
      transformResponse: (response: Product) => {
        return {
          ...response,
          id: Number(response.id),
          averageRate: getRatingValue(response),
        };
      },
    }),
    getProducts: builder.query<Product[], void>({
      query: () => '/products',

      transformResponse: (response: Product[]) => {
        return response.map((product) => ({
          ...product,
          averageRate: getRatingValue(product),
        }));
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetFarmsQuery,
  useGetSelectedProductQuery,
} = ecommerceApi;
