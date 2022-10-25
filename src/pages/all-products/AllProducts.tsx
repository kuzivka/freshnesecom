import FilterBar from '@components/filters/filter-bar/FilterBar';
import ProductList from '@components/product-list/product-list/ProductList';
import ProductListTitle from '@components/product-list/product-list-title/ProductListTitle';
import { Box } from '@mui/material';
import { allProductsContent } from './AllProductPageStyle';
import SelectForSorting from '@components/product-list/sorting/SelectForSorting';

export default function AllProducts() {
  return (
    <>
      <ProductListTitle />
      <SelectForSorting />
      <Box sx={allProductsContent}>
        <FilterBar />
        <ProductList />
      </Box>
    </>
  );
}
