import { Product } from '@common/type';
import { Box, Card } from '@mui/material';
import {
  cardContainer,
  productInfoContainer,
} from '@styles/all-products/productListItem';
import CardImage from './CardImage';
import ProductDescription from './ProductDescription';
import ProductPriceInfo from './ProductPriceInfo';

interface ProductListItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  const isPcsAvailable =
    !!(product.price.pcs && product.stock.pcs) ||
    !(product.price.kg && product.stock.kg);

  return (
    <Card variant="outlined" sx={cardContainer}>
      <CardImage image={product.img[0]} />
      <Box sx={productInfoContainer}>
        <ProductDescription product={product} pcs={isPcsAvailable} />
        <ProductPriceInfo product={product} pcs={isPcsAvailable} />
      </Box>
    </Card>
  );
}
