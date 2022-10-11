import { Farm, Product } from '@common/type';
import { ReactComponent as Arrow } from '@assets/svg/arrow-right.svg';
import { ReactComponent as Heart } from '@assets/svg/heart.svg';
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
  cardDescriptionList,
  priceWithoutDiscount,
  productCardDescription,
  productCardDescriptionContainer,
  productCardName,
  productDetailsButton,
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
  const price = () => {
    if (product.discount) {
      return ((product.price.pcs * product.discount) / 100).toFixed(2);
    } else return product.price.pcs.toFixed(2);
  };

  const shippingPrice = () => {
    if (product.shippingPrice) {
      return 'Shipping Price: ' + product.shippingPrice + ' USD';
    } else return 'Free Shipping';
  };

  const ratingValue = () => {
    return (
      product.rate.reduce((a: number, b: number) => a + b, 0) /
      product.rate.length
    );
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{ width: '60vw', display: 'flex', borderRadius: '12px' }}
      >
        <CardMedia
          component="img"
          sx={{ width: '30%' }}
          image={product.img[0]}
          alt="Product photo"
        />
        <Box
          sx={{
            display: 'flex',
            flexGrow: '1',
            width: '70%',
            p: 4,
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <Typography sx={productCardName} variant="h5">
              {product.name}
            </Typography>
            <Typography variant="body2" sx={productCardDescription}>
              {product.description}
            </Typography>
            <Rating
              sx={{ color: 'black' }}
              name="read-only"
              value={ratingValue()}
              readOnly
            />
            <List sx={{ width: '100%' }}>
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
          <Box
            sx={{
              width: '35%',
              justifyContent: 'space-between',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box>
              {' '}
              <Typography
                variant="h5"
                sx={{ fontWeight: '600', fontSize: '18px' }}
              >
                {price()} USD
              </Typography>
              {product.discount && (
                <>
                  <Typography sx={priceWithoutDiscount} variant="caption">
                    {product.price.pcs}
                  </Typography>
                </>
              )}
            </Box>
            <Box>
              <Typography sx={shippingPriceInfo} variant="subtitle2">
                {shippingPrice()}
              </Typography>
              <Typography sx={shipingDurationInfo} variant="subtitle2">
                Delivery in 1 day
              </Typography>
            </Box>
            <Box sx={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
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
    </>
  );
}
