import { Product } from '@common/type';
import ProductList from '@components/product-list/ProductList';
import ProductListTitle from '@components/product-list/ProductListTitle';
import { Box } from '@mui/material';
import { selectProductListSelector } from '@selectors/getProductListSelector';
import { useGetProductsQuery } from '@services/ecommerce';
import { createContext } from 'react';
import { useSelector } from 'react-redux';

export const ProductsContext = createContext<Product[] | undefined>(undefined);

export default function AllProducts() {
  const { data: allProducts } = useGetProductsQuery();
  const filteredProducts = useSelector(selectProductListSelector(allProducts));

  return (
    <ProductsContext.Provider value={filteredProducts}>
      <Box>
        <ProductListTitle />
        <ProductList />
      </Box>
    </ProductsContext.Provider>
  );
}
