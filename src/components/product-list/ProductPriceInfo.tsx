import { Product } from '@common/type';
import { Box, Typography } from '@mui/material';
import {
  cardPriceInfoContainer,
  priceWithoutDiscount,
  productPrice,
  shipingDurationInfo,
  shippingPriceInfo,
} from '@styles/all-products/productListItem';
import ProductCardButtons from './ProductCardButtons';

interface ProductPriceInfoProps {
  product: Product;
  pcs: boolean | undefined;
}

export default function ProductPriceInfo({
  product,
  pcs,
}: ProductPriceInfoProps) {
  const price = () => {
    if (pcs) {
      const priceNumber =
        product.discount && product.price.pcs
          ? ((product.price.pcs * product.discount) / 100).toFixed(2)
          : product.price.pcs;
      return priceNumber;
    } else {
      const priceNumber =
        product.discount && product.price.kg
          ? ((product.price.kg * product.discount) / 100).toFixed(2)
          : product.price.kg;
      return priceNumber;
    }
  };

  const shippingPrice = product.shippingPrice
    ? 'Shipping Price: ' + product.shippingPrice + ' USD'
    : 'Free Shipping';
  return (
    <Box sx={cardPriceInfoContainer}>
      <Box>
        <Typography variant="h5" sx={productPrice}>
          {price()} USD
        </Typography>
        {product.discount && (
          <Typography sx={priceWithoutDiscount} variant="caption">
            {price()}
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
