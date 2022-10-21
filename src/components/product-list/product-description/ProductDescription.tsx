import { Farm, Product } from '@common/type';
import { Box, List, ListItem, Rating, Typography } from '@mui/material';

import { getRatingValue } from '@utils/getRatingValue';
import {
  cardDescriptionList,
  cardRating,
  productCardDescription,
  productCardDescriptionContainer,
  productCardName,
  productDescriptionContainer,
} from './ProductDescriptionStyle';

interface ProductDescriptionProps {
  product: Product;
  pcs: boolean | undefined;
  farmsData: Farm[] | undefined;
}

export default function ProductDescription({
  product,
  pcs,
  farmsData,
}: ProductDescriptionProps) {
  const ratingValue = getRatingValue(product);

  const farmName = () => {
    if (farmsData) {
      const farm = farmsData.find((farm) => farm.id === product.farm);
      return farm?.name ?? 'unknown';
    }
  };
  const description = {
    Freshness: product.freshness,
    Farm: farmName(),
    Delivery: product.delivery,
    Stock: `${pcs ? product.stock.pcs : product.stock.kg} ${
      pcs ? 'pcs' : 'kg'
    }`,
  };
  return (
    <Box sx={productDescriptionContainer}>
      <Typography sx={productCardName} variant="h5">
        {product.name}
      </Typography>
      <Typography variant="body2" sx={productCardDescription}>
        {product.description}
      </Typography>
      <Rating sx={cardRating} name="read-only" value={ratingValue} readOnly />
      <List>
        {Object.entries(description).map(([objectKey, value]) => (
          <ListItem key={objectKey} sx={productCardDescriptionContainer}>
            <Typography sx={cardDescriptionList} variant="body1">
              {objectKey}
            </Typography>
            <Typography sx={cardDescriptionList} variant="body1">
              {value}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
