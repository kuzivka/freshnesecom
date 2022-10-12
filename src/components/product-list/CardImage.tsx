import { Box, CardMedia } from '@mui/material';
import { cardImage, cardImageContainer } from '@styles/all-products/cardImage';

interface CardImageProps {
  image: string;
}

export default function CardImage({ image }: CardImageProps) {
  return (
    <Box sx={cardImageContainer}>
      <CardMedia
        component="img"
        sx={cardImage}
        image={image}
        alt="Product photo"
      />
    </Box>
  );
}
