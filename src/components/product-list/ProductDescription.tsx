import { Product } from '@common/type';
import { Box, List, ListItem, Rating, Typography } from '@mui/material';
import { useGetFarmsQuery } from '@services/ecommerce';
import {
  cardDescriptionList,
  cardRating,
  productCardDescription,
  productCardDescriptionContainer,
  productCardName,
  productDescriptionContainer,
} from '@styles/all-products/productDescription';

interface ProductDescriptionProps {
  product: Product;
  pcs: boolean | undefined;
}

export default function ProductDescription({
  product,
  pcs,
}: ProductDescriptionProps) {
  const { data: farmsData } = useGetFarmsQuery();
  const ratingValue =
    product.rate.reduce((a: number, b: number) => a + b, 0) /
    product.rate.length;

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
