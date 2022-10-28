import { Box, Link, List, ListItem, Typography } from '@mui/material';
import {
  footerLinksContainer,
  footerLinksLink,
  footerLinksTitle,
  linksList,
} from './FooterLinksStyle';

import { links } from '../constants';

export default function FooterLinks() {
  return (
    <Box sx={footerLinksContainer}>
      {links.map(({ title, links }) => (
        <Box key={title}>
          <Typography component="div" variant="h6" sx={footerLinksTitle}>
            {title}
          </Typography>
          <List sx={linksList}>
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
