import FilterBar from '@components/filters/FilterBar';
import ProductList from '@components/product-list/ProductList';
import ProductListTitle from '@components/product-list/ProductListTitle';
import { Box } from '@mui/material';

export default function AllProducts() {
  return (
    <>
      <ProductListTitle />
      <Box sx={{ display: 'flex', p: '44px 64px', gap:'32px'}}>
        <FilterBar />
        <ProductList />
      </Box>
    </>
  );
}
