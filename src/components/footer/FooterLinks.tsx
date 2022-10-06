import { Box, Link, List, ListItem, Typography } from '@mui/material';

export default function FooterLinks() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {links.map((block) => (
        <Box>
          <Typography component="div" variant="h6">
            {block.title}
          </Typography>
          <List>
            {block.links.map((link) => (
              <ListItem sx={{p:'16px 0px'}}>
                <Link sx={{ color: '#6A983C', fontSize: '14px' }} href={link.link}>
                  {link.resource}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}

const links = [
  {
    title: 'Get in Touch',
    links: [
      { resource: 'About Us', link: '#' },
      { resource: 'Careers', link: '#' },
      { resource: 'Press Releases', link: '#' },
      { resource: 'Blog', link: '#' },
    ],
  },
  {
    title: 'Connections',
    links: [
      { resource: 'Facebook', link: '#' },
      { resource: 'Instagram', link: '#' },
      { resource: 'Twitter', link: '#' },
      { resource: 'YouTube', link: '#' },
      { resource: 'Linkedin', link: '#' },
    ],
  },
  {
    title: 'Earnings',
    links: [
      { resource: 'Become an Affiliate', link: '#' },
      { resource: 'Advertise your product', link: '#' },
      { resource: 'Sell on Market', link: '#' },
    ],
  },
  {
    title: 'Account',
    links: [
      { resource: 'Your Account', link: '#' },
      { resource: 'Returns Centre', link: '#' },
      { resource: '100 % purchase protection', link: '#' },
      { resource: 'Chat with us', link: '#' },
      { resource: 'Help', link: '#' },
    ],
  },
];
