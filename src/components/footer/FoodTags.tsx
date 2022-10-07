import { Chip, Typography, Box } from '@mui/material';
import { footerTagsContainer, footerTagsTitle } from '@styles/footer-styles';
import { food } from './constants';

export default function FoodTags() {
  return (
    <>
      <Typography sx={footerTagsTitle} variant="h6">
        Product tags
      </Typography>
      <Box sx={footerTagsContainer}>
        {food.map((name, i) => (
          <Chip key={i} label={name} />
        ))}
      </Box>
    </>
  );
}
