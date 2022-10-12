import { ReactComponent as Arrow } from '@assets/svg/arrow-right.svg';
import { ReactComponent as Heart } from '@assets/svg/heart.svg';
import { Farm, Product } from '@common/type';
import {
  Box,
  Button,
  Card,
  CardMedia,
  List,
  ListItem,
  Rating,
  Typography,
} from '@mui/material';
import {
  addToFavouriteButton,
  cardButtonContainer,
  cardContainer,
  cardDescriptionList,
  cardImage,
  cardImageContainer,
  cardPriceInfoContainer,
  cardRating,
  priceWithoutDiscount,
  productCardDescription,
  productCardDescriptionContainer,
  productCardName,
  productDescriptionContainer,
  productDetailsButton,
  productInfoContainer,
  productPrice,
  shipingDurationInfo,
  shippingPriceInfo,
} from '@styles/all-products';

interface ProductListItemProps {
  product: Product;
  farms: Farm[];
}

export function ProductListItem(props: ProductListItemProps) {
  const { product, farms } = props;

  const farmName = () => {
    const farm = farms.find((farm) => farm.id === product.farm);
    return farm?.name ?? 'unknown';
  };

  const description = {
    Freshness: product.freshness,
    Farm: farmName(),
    Delivery: product.delivery,
    Stock: `${product.stock} pcs`,
  };

  const price = product.discount
    ? ((product.price.pcs * product.discount) / 100).toFixed(2)
    : product.price.pcs.toFixed(2);

  const shippingPrice = product.shippingPrice
    ? 'Shipping Price: ' + product.shippingPrice + ' USD'
    : 'Free Shipping';

  const ratingValue =
    product.rate.reduce((a: number, b: number) => a + b, 0) /
    product.rate.length;

  return (
    <Card variant="outlined" sx={cardContainer}>
      <Box sx={cardImageContainer}>
        <CardMedia
          component="img"
          sx={cardImage}
          image={product.img[0]}
          alt="Product photo"
        />
      </Box>

      <Box sx={productInfoContainer}>
        <Box sx={productDescriptionContainer}>
          <Typography sx={productCardName} variant="h5">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={productCardDescription}>
            {product.description}
          </Typography>
          <Rating
            sx={cardRating}
            name="read-only"
            value={ratingValue}
            readOnly
          />
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
        <Box sx={cardPriceInfoContainer}>
          <Box>
            <Typography variant="h5" sx={productPrice}>
              {price} USD
            </Typography>
            {product.discount && (
              <Typography sx={priceWithoutDiscount} variant="caption">
                {product.price.pcs}
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
          <Box sx={cardButtonContainer}>
            <Button
              sx={productDetailsButton}
              variant="contained"
              disableElevation
              endIcon={<Arrow />}
            >
              Product Details
            </Button>
            <Button
              sx={addToFavouriteButton}
              variant="contained"
              disableElevation
              startIcon={<Heart />}
            >
              Add to wish list
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
