import { productList } from '@common/constants';
import { PATH } from '@common/enums';
import { ProductListItem } from '@components/product-list-item/ProductListItem';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AllProducts() {
  return (
    <Box>
      {productList.map((product) => (
        <ProductListItem>{product.name}</ProductListItem>
      ))}
      <Link to={PATH.CART}>Cart</Link>
    </Box>
  );
}
