import { Box, Typography } from '@mui/material';
import { copyrightsText } from './CopyrightsStyle';

export default function Copyrights() {
  return (
    <Box>
      <Typography sx={copyrightsText} variant="caption">
        Copyright © 2020 petrbilek.com
      </Typography>
    </Box>
  );
}
