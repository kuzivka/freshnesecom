import { Box, Link, Typography } from '@mui/material';
import {
  infoBarContactInfo,
  infoBarContactsContainer,
  infoBarContainer,
  infoBarLinksContainer,
} from '@styles/header/headerStyles';

export default function InfoBar() {
  return (
    <Box sx={infoBarContainer}>
      <Box sx={infoBarContactsContainer}>
        <Link>Chat With Us</Link>
        <Typography sx={infoBarContactInfo} variant="body2">
          +420 336 775 664
        </Typography>
        <Typography sx={infoBarContactInfo} variant="body2">
          info@freshnesecom.com
        </Typography>
      </Box>
      <Box sx={infoBarLinksContainer}>
        <Link>Blog</Link>
        <Link>About Us</Link>
        <Link>Careers</Link>
      </Box>
    </Box>
  );
}
