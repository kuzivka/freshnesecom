import { ReactComponent as Account } from '@assets/svg/account.svg';
import { ReactComponent as Cart } from '@assets/svg/cart.svg';
import { ReactComponent as LogoIcon } from '@assets/svg/freshnesecom.svg';
import { Box, Divider, IconButton } from '@mui/material';
import {
  headerContentContainer,
  headerIconButtonsContainer,
} from '@styles/header-styles';
import BreadcrambsString from './BreadcrumbsString';
import CategoryMenu from './CategoryMenu';
import InfoBar from './InfoBar';
import SearchInput from './SearchInput';

export function Header() {
  return (
    <>
      <InfoBar />
      <Divider variant="middle" />
      <Box sx={{ ...headerContentContainer }}>
        <LogoIcon />
        <SearchInput />
        <Box sx={{ ...headerIconButtonsContainer }}>
          <IconButton>
            <Account />
          </IconButton>
          <IconButton>
            <Cart />
          </IconButton>
        </Box>
      </Box>
      <CategoryMenu />
      <BreadcrambsString />
    </>
  );
}
