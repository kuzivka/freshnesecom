import { Product } from '@common/type';
import { Box, Typography } from '@mui/material';
import {
  cardPriceInfoContainer,
  priceInfo,
  priceInfoContent,
  priceWithoutDiscount,
  productPrice,
  shipingDurationInfo,
  shippingPriceInfo,
} from './ProductPriceInfoStyle';
import ProductCardButtons from '../product-card-buttons/ProductCardButtons';
import { getPriceAndStock } from '@utils/getPriceAndStock';

interface ProductPriceInfoProps {
  product: Product;
  pcs: boolean | undefined;
}

export default function ProductPriceInfo({ product }: ProductPriceInfoProps) {
  const { price, priceWithDiscount } = getPriceAndStock(product);

  const priceString = price.toFixed(2);
  const priceWithDiscountString = priceWithDiscount.toFixed(2);

  const shippingPrice = product.shippingPrice
    ? `Shipping Price: ${product.shippingPrice} USD`
    : 'Free Shipping';

  return (
    <Box sx={cardPriceInfoContainer}>
      <Box sx={priceInfo}>
        <Box sx={priceInfoContent}>
          <Typography variant="h5" sx={productPrice}>
            {priceWithDiscountString} USD
          </Typography>
          {product.discount && (
            <Typography sx={priceWithoutDiscount} variant="caption">
              {priceString}
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
      </Box>
      <ProductCardButtons />
    </Box>
  );
}
