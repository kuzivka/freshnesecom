import { ReactComponent as Arrow } from '@assets/svg/arrow.svg';
import { categories, options } from '@common/constants';
import { Button, List, ListItem, Menu, MenuItem } from '@mui/material';
import {
  categoryMenuOptions,
  headerCategoryMenu,
  headerMenuButton,
} from '@styles/header-styles';
import { useState } from 'react';

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
    <List sx={{ ...headerCategoryMenu }}>
      {categories.map((category) => (
        <ListItem>
          <Button
            sx={{ ...headerMenuButton }}
            id="fade-button"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {category.name}
            <Arrow />
          </Button>
          <Menu
            elevation={0}
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              onMouseLeave: handleClose,
              sx: { ...categoryMenuOptions },
            }}
            onClose={handleClose}
          >
            {options.map((option) => (
              <MenuItem sx={{ ...categoryMenuOptions }} onClick={handleClose}>
                {option.name}
              </MenuItem>
            ))}
          </Menu>
        </ListItem>
      ))}
    </List>
  );
}
