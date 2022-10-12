import { Product } from '@common/type';
import { Box } from '@mui/material';
import { ProductsContext } from '@pages/all-products/AllProducts';
import { productListContainer } from '@styles/all-products/allProducts';
import { useContext } from 'react';
import { ProductListItem } from './ProductListItem';

export default function ProductList() {
  const products = useContext(ProductsContext);

  return (
    <Box sx={productListContainer}>
      {products?.map((product: Product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Box>
  );
}
