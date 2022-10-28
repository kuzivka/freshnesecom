import { Box, Button } from '@mui/material';
import { ReactComponent as Arrow } from '@assets/svg/arrow-right.svg';
import { ReactComponent as Heart } from '@assets/svg/heart.svg';
import {
  addToFavouriteButton,
  buttonTextLong,
  buttonTextShort,
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
        <Box sx={buttonTextLong} component="span">
          Product Details
        </Box>
        <Box sx={buttonTextShort} component="span">
          Details
        </Box>
      </Button>
      <Button
        sx={addToFavouriteButton}
        variant="contained"
        disableElevation
        startIcon={<Heart />}
      >
        <Box sx={buttonTextLong} component="span">
          Add to wish list
        </Box>
        <Box sx={buttonTextShort} component="span">
          wish list
        </Box>
      </Button>
    </Box>
  );
}
