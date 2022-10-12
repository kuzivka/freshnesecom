import { Box, CardMedia } from '@mui/material';
import { cardImage, cardImageContainer } from '@styles/all-products/cardImage';

interface CardImageProps {
  image: string;
}

export default function CardImage(props: CardImageProps) {
  return (
    <Box sx={cardImageContainer}>
      <CardMedia
        component="img"
        sx={cardImage}
        image={props.image}
        alt="Product photo"
      />
    </Box>
  );
}
