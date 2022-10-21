import { Box, Chip, Typography } from '@mui/material';
import { getProductListSelector } from '@selectors/getProductListSelector';
import { useGetProductsQuery } from '@services/ecommerce';
import {
  chip,
  productListTitle,
  productListTitleContainer,
  titleSpan
} from '@styles/all-products/productListTitle';
import { useSelector } from 'react-redux';

export default function ProductListTitle() {
  const { data: allProducts } = useGetProductsQuery();
  const filteredProducts = useSelector(getProductListSelector(allProducts));

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
