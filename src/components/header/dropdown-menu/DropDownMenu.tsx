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
} from './DropDownMenuStyles';
import { useDispatch } from 'react-redux';
import { categoryFilter, setFarmFilter } from '@store/reducers/listSlice';

export default function DropDownMenu(props: Category) {
  const { id: categoryId, name, brand } = props;
  const dispatch = useDispatch();

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'categoryMenu',
  });

  const farmChoosingHandler = (brandId: number) => () => {
    dispatch(setFarmFilter(undefined));
    dispatch(setFarmFilter(brandId));
    dispatch(categoryFilter(categoryId));
    return popupState.close;
  };

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
        {brand?.map(({ name, id: farmId }) => (
          <MenuItem
            key={farmId}
            sx={categoryMenuOptions}
            onClick={farmChoosingHandler(farmId)}
          >
            {name}
          </MenuItem>
        ))}
      </HoverMenu>
    </ListItem>
  );
}
