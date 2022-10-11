import { Box, Chip, Typography } from '@mui/material';
import { ProductContext } from '@pages/all-products/AllProducts';
import { chip, titleSpan } from '@styles/all-products';
import { useContext } from 'react';

export default function ProductListTitle() {
  const products = useContext(ProductContext);
  return (
    <Box sx={{ p: '8px 45px', display: 'flex', alignItems: 'center' }}>
      <Typography
        sx={{ flexGrow: '1', fontWeight: '600', fontSize: '32px' }}
        variant="h2"
      >
        All Products
      </Typography>
      <Chip label={products?.length} sx={chip} />
      <Typography sx={titleSpan} variant="caption">
        Products
      </Typography>
    </Box>
  );
}
