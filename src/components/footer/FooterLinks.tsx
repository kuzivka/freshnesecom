import { Box, Link, List, ListItem, Typography } from '@mui/material';
import {
  footerLinksContainer,
  footerLinksLink,
  footerLinksTitle,
} from '@styles/footer-styles';

import { links } from './constants';

export default function FooterLinks() {
  return (
    <Box sx={footerLinksContainer}>
      {links.map(({ title, links }, index) => (
        <Box key={index}>
          <Typography component="div" variant="h6" sx={footerLinksTitle}>
            {title}
          </Typography>
          <List>
            {links.map(({ link, resource }) => (
              <ListItem key={resource} sx={footerLinksLink}>
                <Link href={link}>{resource}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}
