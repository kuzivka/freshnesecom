import { Box, Chip, Typography } from '@mui/material';
import { ProductContext } from '@pages/all-products/AllProducts';
import {
  chip,
  productListTitle,
  productListTitleContainer,
  titleSpan,
} from '@styles/all-products';
import { useContext } from 'react';

export default function ProductListTitle() {
  const products = useContext(ProductContext);
  return (
    <Box sx={productListTitleContainer}>
      <Typography sx={productListTitle} variant="h2">
        All Products
      </Typography>
      <Chip label={products?.length} sx={chip} />
      <Typography sx={titleSpan} variant="caption">
        Products
      </Typography>
    </Box>
  );
}
