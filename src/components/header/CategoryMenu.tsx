import { useState } from 'react';
import { ReactComponent as Arrow } from '@assets/svg/arrow.svg';
import { categories, options } from '@common/constants';
import { Button, Fade, List, ListItem, Menu, MenuItem } from '@mui/material';
import {
  categoryMenuOptions,
  headerCategoryMenu,
  headerMenuButton,
} from '@styles/header-styles';
import { useGetCategoriesQuery } from '@services/ecommerce';

export default function CategoryMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { data, error, isLoading } = useGetCategoriesQuery(undefined);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) {
    return <h1>'Гей люди, та доки то буде....'</h1>
  }

  return (
    <List sx={{ ...headerCategoryMenu }}>
      {data && data.map(({name}) => (
        <ListItem>
          <Button
            sx={{ ...headerMenuButton }}
            id="fade-button"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {name}
            <Arrow />
          </Button>
          <Menu
            elevation={0}
            id="fade-menu"
            anchorEl={anchorEl}
            TransitionComponent={Fade}
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
