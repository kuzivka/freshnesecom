import { ReactComponent as Arrow } from '@assets/svg/arrow.svg';
import {
  Button,
  Fade,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

const categories = [
  { name: 'Category 1' },
  { name: 'Category 2' },
  { name: 'Category 3' },
  { name: 'Category 4' },
  { name: 'Category 5' },
  { name: 'Category 6' },
  { name: 'Category 7' },
  { name: 'Category 8' },
];

export default function CategoryMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <List
      sx={{
        backgroundColor: '#f9f9f9',
        display: 'flex',
        width: '80vw',
        margin: '0 auto',
      }}
    >
      {categories.map((category) => (
        <ListItem>
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {category.name}

            <Arrow />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{ onMouseLeave: handleClose }}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </ListItem>
      ))}
    </List>
  );
}
