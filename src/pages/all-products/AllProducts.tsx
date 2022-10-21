import FilterBar from '@components/filters/filter-bar/FilterBar';
import ProductList from '@components/product-list/product-list/ProductList';
import ProductListTitle from '@components/product-list/product-list-title/ProductListTitle';
import { Box } from '@mui/material';
import { allProductsContent } from './AllProductPageStyle';

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
