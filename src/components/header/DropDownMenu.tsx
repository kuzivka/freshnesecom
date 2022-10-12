import { ReactComponent as Arrow } from '@assets/svg/arrow.svg';
import { Category } from '@common/type';
import { Button, ListItem, MenuItem } from '@mui/material';
import {
  bindHover,
  bindMenu,
  usePopupState,
} from 'material-ui-popup-state/hooks';
import HoverMenu from 'material-ui-popup-state/HoverMenu';

import {
  categoryMenuOptions,
  headerMenuButton,
  selectMenuItem,
} from '@styles/header/headerStyles';

export default function DropDownMenu(props: Category) {
  const { name, brand } = props;

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'categoryMenu',
  });

  return (
    <ListItem sx={selectMenuItem}>
      <Button {...bindHover(popupState)} sx={headerMenuButton}>
        {name}
        <Arrow />
      </Button>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        elevation={0}
      >
        {brand?.map(({ name, id }) => (
          <MenuItem
            key={id}
            sx={categoryMenuOptions}
            onClick={popupState.close}
          >
            {name}
          </MenuItem>
        ))}
      </HoverMenu>
    </ListItem>
  );
}
