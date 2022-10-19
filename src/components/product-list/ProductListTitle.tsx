import { Box, Chip, Typography } from '@mui/material';
import {
  chip,
  productListTitle,
  productListTitleContainer,
  titleSpan,
} from '@styles/all-products/productListTitle';
import { ProductsContext } from '../../App';
import { useContext } from 'react';

export default function ProductListTitle() {
  const products = useContext(ProductsContext);
  return (
    <Box sx={productListTitleContainer}>
      <Typography sx={productListTitle} variant="h2">
        All Products
      </Typography>
      <Chip label={products?.filteredProducts?.length} sx={chip} />
      <Typography sx={titleSpan} variant="caption">
        Products
      </Typography>
    </Box>
  );
}
