import { Farm, Product } from '@common/type';
import { Box, Card } from '@mui/material';
import {
  cardContainer,
  productInfoContainer,
} from './ProductListItemStyle';
import CardImage from '../card-image/CardImage';
import ProductDescription from '../product-description/ProductDescription';
import ProductPriceInfo from '../product-price-info/ProductPriceInfo';

interface ProductListItemProps {
  product: Product;
  farmsData: Farm[] | undefined;
}

export function ProductListItem({ product, farmsData }: ProductListItemProps) {
  const isPcsAvailable =
    !!(product.price.pcs && product.stock.pcs) ||
    !(product.price.kg && product.stock.kg);

  return (
    <Card variant="outlined" sx={cardContainer}>
      <CardImage image={product.img[0]} />
      <Box sx={productInfoContainer}>
        <ProductDescription
          product={product}
          farmsData={farmsData}
        />
        <ProductPriceInfo product={product} pcs={isPcsAvailable} />
      </Box>
    </Card>
  );
}
