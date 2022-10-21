import { Farm, Product } from '@common/type';
import { Box, Card } from '@mui/material';
import {
  cardContainer,
  productInfoContainer,
} from '@components/product-list/styles/productListItem';
import CardImage from './CardImage';
import ProductDescription from './ProductDescription';
import ProductPriceInfo from './ProductPriceInfo';

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
          pcs={isPcsAvailable}
          farmsData={farmsData}
        />
        <ProductPriceInfo product={product} pcs={isPcsAvailable} />
      </Box>
    </Card>
  );
}
