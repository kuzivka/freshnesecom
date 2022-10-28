import { Box, Chip, Typography } from '@mui/material';
import { getFilteredProducts } from '@store/selectors/getFilteredProducts';
import { useSelector } from 'react-redux';
import {
  chip,
  productListTitle,
  productListTitleContainer,
  titleSpan,
} from './ProductListTitleStyle';

export default function ProductListTitle() {
  const filteredProducts = useSelector(getFilteredProducts);

  return (
    <Box sx={productListTitleContainer}>
      <Typography sx={productListTitle} variant="h2">
        All Products
      </Typography>
      <Chip label={filteredProducts?.length} sx={chip} />
      <Typography sx={titleSpan} variant="caption">
        Products
      </Typography>
    </Box>
  );
}
