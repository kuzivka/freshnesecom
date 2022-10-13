import { Box, Typography } from '@mui/material';
import { copyrightsText, copyrightsContainer } from '@styles/footer/footerStyles';

export default function Copyrights() {
  return (
    <Box sx={copyrightsContainer}>
      <Typography sx={copyrightsText} variant="caption">
        Copyright © 2020 petrbilek.com
      </Typography>
    </Box>
  );
}
