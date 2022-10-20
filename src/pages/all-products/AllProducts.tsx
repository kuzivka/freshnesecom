import FilterBar from '@components/filters/FilterBar';
import ProductList from '@components/product-list/ProductList';
import ProductListTitle from '@components/product-list/ProductListTitle';
import { Box } from '@mui/material';
import { allProductsContent } from '@styles/all-products/allProducts';

export default function AllProducts() {
  return (
    <>
      <ProductListTitle />
      <Box sx={allProductsContent}>
        <FilterBar />
        <ProductList />
      </Box>
    </>
  );
}
