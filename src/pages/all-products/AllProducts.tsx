import { productList } from '@common/constants';
import { ProductListItem } from '@components/product-list-item/ProductListItem';
import { Box } from '@mui/material';

export default function AllProducts() {
  return (
    <Box>
      {productList.map((product) => (
        <ProductListItem key={product.id}>{product.name}</ProductListItem>
      ))}
    </Box>
  );
}
