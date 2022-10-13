import { Box, Button } from '@mui/material';
import { ReactComponent as Arrow } from '@assets/svg/arrow-right.svg';
import { ReactComponent as Heart } from '@assets/svg/heart.svg';
import {
  addToFavouriteButton,
  cardButtonContainer,
  productDetailsButton,
} from '@styles/all-products/cardButtons';

export default function ProductCardButtons() {
  return (
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
  );
}
