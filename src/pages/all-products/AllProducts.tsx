import { PATH } from '@common/enums';
import { Box, List, ListItem } from '@mui/material';
import { ProductListItem } from '@components/product-list-item/ProductListItem';
import { Link } from 'react-router-dom';
import { productList } from '@common/constants';

export default function AllProducts() {
  return (
    <Box>
      <List>
        <ListItem>
          <Link to={PATH.CART}>Shopping Cart</Link>
        </ListItem>
        <ListItem>
          <Link to={PATH.PRODUCT}>Product</Link>
        </ListItem>
      </List>
      {productList.map((product) => (
        <ProductListItem>{product.name}</ProductListItem>
      ))}
    </Box>
  );
}
