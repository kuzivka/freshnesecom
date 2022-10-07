import { ReactComponent as Arrow } from '@assets/svg/arrow.svg';
import { Category } from '@common/type';
import { Button, Fade, ListItem, Menu, MenuItem } from '@mui/material';
import { categoryMenuOptions, headerMenuButton } from '@styles/header-styles';
import { MouseEvent, useState } from 'react';

export default function DropDownMenu(props: Category) {
  const { name, brand } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isExpaned = () => (open ? 'true' : undefined);
  return (
    <ListItem>
      <Button
        sx={headerMenuButton}
        id="fade-button"
        aria-haspopup="true"
        aria-expanded={isExpaned()}
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
          sx: categoryMenuOptions,
        }}
        onClose={handleClose}
      >
        {brand.map(({ name, id }) => (
          <MenuItem key={id} sx={categoryMenuOptions} onClick={handleClose}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </ListItem>
  );
}
