import { Product } from '@common/type';
import StarRating from '@components/rating/StarRating';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface ProductHeaderProps {
  product: Product;
}

export default function ProductHeader({ product }: ProductHeaderProps) {
  return (
    <>
      <Box>
        <Typography
          sx={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '32px' }}
          variant="h2"
        >
          {product.name}
        </Typography>
        <StarRating black value={product.averageRate} />

        <Box component="span">{`(${product.rate.length} customers review)`}</Box>
      </Box>
      <Typography sx={{ fontFamily: 'Open Sans', fontSize:'17px' }} variant="body1">
        {product.description}
      </Typography>
    </>
  );
}
