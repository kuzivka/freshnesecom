import { Farm, Product } from '@common/type';
import StarRating from '@components/rating/StarRating';
import { Box, List, ListItem, Typography } from '@mui/material';
import { getPriceAndStock } from '@utils/getPriceAndStock';
import {
  cardDescriptionList,
  productCardDescription,
  productCardDescriptionContainer,
  productCardName,
  productDescriptionContainer,
} from './ProductDescriptionStyle';

interface ProductDescriptionProps {
  product: Product;
  farmsData: Farm[] | undefined;
}

export default function ProductDescription({
  product,
  farmsData,
}: ProductDescriptionProps) {
  const { inStock, unit } = getPriceAndStock(product);
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
    Stock: `${inStock} ${unit}`,
  };
  return (
    <Box sx={productDescriptionContainer}>
      <Typography sx={productCardName} variant="h5">
        {product.name}
      </Typography>
      <Typography variant="body2" sx={productCardDescription}>
        {product.description}
      </Typography>
      <StarRating black value={product.averageRate} />
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
