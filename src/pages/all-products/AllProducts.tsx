import { Product } from '@common/type';
import ProductList from '@components/product-list/ProductList';
import ProductListTitle from '@components/product-list/ProductListTitle';
import { Box } from '@mui/material';
import { useGetProductsQuery } from '@services/ecommerce';
import React, { createContext } from 'react';

export const ProductContext = createContext<Product[] | undefined>(undefined);

export default function AllProducts() {
  const { data } = useGetProductsQuery(null);

  return (
    <ProductContext.Provider value={data}>
      <Box>
        <ProductListTitle />
        <ProductList />
      </Box>
    </ProductContext.Provider>
  );
}
