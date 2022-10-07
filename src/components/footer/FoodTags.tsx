import { Chip, Typography, Box } from '@mui/material';

export default function FoodTags() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 36px',
      }}
    >
      <Typography variant="h6">Product tags</Typography>
      {food.map((name, i) => (
        <Chip key={i} label={name} />
      ))}
    </Box>
  );
}
const food = [
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
  'Product',
];
