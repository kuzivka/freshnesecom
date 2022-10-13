import { Box, Chip, Typography } from '@mui/material';
import { ProductsContext } from '@pages/all-products/AllProducts';
import {
  chip,
  productListTitle,
  productListTitleContainer,
  titleSpan,
} from '@styles/all-products/productListTitle';
import { useContext } from 'react';

export default function ProductListTitle() {
  const products = useContext(ProductsContext);
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
