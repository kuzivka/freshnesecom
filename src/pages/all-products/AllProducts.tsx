import { productList } from '@common/constants';
import ProductList from '@components/product-list/ProductList';
import { Box } from '@mui/material';

export default function AllProducts() {
  return (
    <Box>
      <ProductList />
    </Box>
  );
}
