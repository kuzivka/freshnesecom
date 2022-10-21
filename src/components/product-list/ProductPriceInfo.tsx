import { Product } from '@common/type';
import { Box, Typography } from '@mui/material';
import {
  cardPriceInfoContainer,
  priceWithoutDiscount,
  productPrice,
  shipingDurationInfo,
  shippingPriceInfo,
} from '@components/product-list/styles/productListItem';
import ProductCardButtons from './ProductCardButtons';

interface ProductPriceInfoProps {
  product: Product;
  pcs: boolean | undefined;
}

export default function ProductPriceInfo({
  product,
  pcs,
}: ProductPriceInfoProps) {
  const price = pcs ? product.price.pcs : product.price.kg;

  const priceWithDiscount =
    product.discount && price
      ? ((price * product.discount) / 100).toFixed(2)
      : price?.toFixed(2);

  const priceBeforeDiscount = price?.toFixed(2);

  const shippingPrice = product.shippingPrice
    ? `Shipping Price: ${product.shippingPrice} USD`
    : 'Free Shipping';

  return (
    <Box sx={cardPriceInfoContainer}>
      <Box>
        <Typography variant="h5" sx={productPrice}>
          {priceWithDiscount} USD
        </Typography>
        {product.discount && (
          <Typography sx={priceWithoutDiscount} variant="caption">
            {priceBeforeDiscount}
          </Typography>
        )}
      </Box>
      <Box>
        <Typography sx={shippingPriceInfo} variant="subtitle2">
          {shippingPrice}
        </Typography>
        <Typography sx={shipingDurationInfo} variant="subtitle2">
          Delivery in 1 day
        </Typography>
      </Box>
      <ProductCardButtons />
    </Box>
  );
}
