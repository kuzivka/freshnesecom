import { Box, Button } from '@mui/material';
import { ReactComponent as Arrow } from '@assets/svg/arrow-right.svg';
import { ReactComponent as Heart } from '@assets/svg/heart.svg';
import {
  addToFavouriteButton,
  cardButtonContainer,
  productDetailsButton,
} from './ProductCardButtonsStyle';

export default function ProductCardButtons() {
  return (
    <Box sx={cardButtonContainer}>
      <Button
        sx={productDetailsButton}
        variant="contained"
        disableElevation
        endIcon={<Arrow />}
      >
        <Box component="span">
          <Box component="span">Product </Box>Details
        </Box>
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
