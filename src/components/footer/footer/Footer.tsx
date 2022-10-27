import { Box } from '@mui/material';
import Copyrights from '../copyrights/Copyrights';
import FoodTags from '../footer-tags/FoodTags';
import FooterLinks from '../footer-links/FooterLinks';
import { footerContainer } from './FooterStyle';

export function Footer() {
  return (
    <Box sx={footerContainer}>
      <FooterLinks />
      <FoodTags />
      <Copyrights />
    </Box>
  );
}
