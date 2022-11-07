import { Product } from '@common/type';
import StarRating from '@components/rating/StarRating';
import { Box, Typography } from '@mui/material';
import {
  productDescription,
  productTitle,
  reviewSpan,
} from './ProductHeaderStyle';

interface ProductHeaderProps {
  product: Product;
}

export default function ProductHeader({ product }: ProductHeaderProps) {
  return (
    <>
      <Box>
        <Typography sx={productTitle} variant="h2">
          {product.name}
        </Typography>
        <StarRating black value={product.averageRate} />

        <Box
          sx={reviewSpan}
          component="span"
        >{`(${product.rate.length} customers review)`}</Box>
      </Box>
      <Typography sx={productDescription} variant="body1">
        {product.description}
      </Typography>
    </>
  );
}
