import { Chip, Typography, Box } from '@mui/material';
import { footerTagsContainer, footerTagsTitle } from './FoodTagsStyle';
import { food } from '../constants';

export default function FoodTags() {
  return (
    <>
      <Typography sx={footerTagsTitle} variant="h6">
        Product tags
      </Typography>
      <Box sx={footerTagsContainer}>
        {food.map((name) => (
          <Chip key={name} label={name} />
        ))}
      </Box>
    </>
  );
}
