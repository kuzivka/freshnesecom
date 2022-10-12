import { Product } from '@common/type';
import ProductList from '@components/product-list/ProductList';
import ProductListTitle from '@components/product-list/ProductListTitle';
import { Box } from '@mui/material';
import { useGetProductsQuery } from '@services/ecommerce';
import { createContext } from 'react';

export const ProductContext = createContext<Product[] | undefined>(undefined);

export default function AllProducts() {
  const { data: allProducts } = useGetProductsQuery();

  return (
    <ProductContext.Provider value={allProducts}>
      <Box>
        <ProductListTitle />
        <ProductList />
      </Box>
    </ProductContext.Provider>
  );
}
