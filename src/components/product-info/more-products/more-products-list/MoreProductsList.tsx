import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useGetProductsQuery } from '@services/ecommerce';
import { getPriceAndStock } from '@utils/getPriceAndStock';
import { useNavigate } from 'react-router-dom';
import {
  buyNowBtn,
  cardContent,
  cardImg,
  mainPrice,
  oldPrice,
  priceContainer,
  prices,
  productCard,
  productDescription,
  productList,
  productListItem,
  productName,
} from './MoreProductsListStyle';

interface MoreProductsListProps {
  categoryId: number;
  productId: number;
}

export default function MoreProductsList({
  categoryId,
  productId,
}: MoreProductsListProps) {
  const navigate = useNavigate();
  const { data: productsByCategory } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.filter(
        (product) =>
          product.category === categoryId && Number(product.id) !== productId
      ),
    }),
  });

  const cardClickHandler = (productId: number) => () => {
    navigate(`/product-page/${productId}`);
  };

  return (
    <List sx={productList}>
      {productsByCategory?.map((product) => (
        <ListItem sx={productListItem}>
          <Card
            onClick={cardClickHandler(product.id)}
            elevation={0}
            sx={productCard}
          >
            <CardMedia
              sx={cardImg}
              component="img"
              image={product.img[0]}
              height="50%"
            />

            <CardContent sx={cardContent}>
              <Typography sx={productName} gutterBottom variant="h5">
                {product.name}
              </Typography>
              <Typography sx={productDescription} variant="body2">
                {product.description}
              </Typography>
            </CardContent>
            <Box sx={priceContainer}>
              <Box sx={prices}>
                <Typography sx={mainPrice}>
                  {getPriceAndStock(product).priceWithDiscount.toFixed(2)} USD
                </Typography>
                {product.discount && (
                  <Typography sx={oldPrice}>
                    {getPriceAndStock(product).price}
                  </Typography>
                )}
              </Box>
              <Button sx={buyNowBtn} size="small" color="primary">
                Buy now
              </Button>
            </Box>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}
