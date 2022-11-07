import { Farm, Product } from '@common/type';
import { Box, Card, CardActionArea } from '@mui/material';
import {
  cardContainer,
  imageClickContainer,
  productInfoContainer,
} from './ProductListItemStyle';
import CardImage from '../card-image/CardImage';
import ProductDescription from '../product-description/ProductDescription';
import ProductPriceInfo from '../product-price-info/ProductPriceInfo';
import { useNavigate } from 'react-router-dom';

interface ProductListItemProps {
  product: Product;
  farmsData: Farm[] | undefined;
}

export function ProductListItem({ product, farmsData }: ProductListItemProps) {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`product-page/${product.id}`);
  };

  return (
    <Card variant="outlined" sx={cardContainer}>
      <CardActionArea sx={imageClickContainer} onClick={handleImageClick}>
        <CardImage image={product.img[0]} />
      </CardActionArea>
      <Box sx={productInfoContainer}>
        <ProductDescription product={product} farmsData={farmsData} />
        <ProductPriceInfo product={product} />
      </Box>
    </Card>
  );
}
