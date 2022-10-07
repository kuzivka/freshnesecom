import { ReactComponent as Account } from '@assets/svg/account.svg';
import { ReactComponent as Cart } from '@assets/svg/cart.svg';
import { ReactComponent as LogoIcon } from '@assets/svg/freshnesecom.svg';
import { PATH } from '@common/enums';
import { Box, Divider, IconButton } from '@mui/material';
import {
  headerContentContainer,
  headerIconButtonsContainer,
} from '@styles/header-styles';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadcrambsString from './BreadcrumbsString';
import CategoryMenus from './CategoryMenus';
import InfoBar from './InfoBar';
import SearchInput from './SearchInput';

export function Header() {
  const navigate = useNavigate();

  const handleCartClick = useCallback(() => {
    navigate(PATH.CART);
  }, [navigate]);

  const handleLogoClick = useCallback(() => {
    navigate(PATH.ALL_PRODUCTS);
  }, [navigate]);

  return (
    <>
      <InfoBar />
      <Divider variant="middle" />
      <Box sx={headerContentContainer}>
        <LogoIcon onClick={handleLogoClick} />
        <SearchInput />
        <Box sx={headerIconButtonsContainer}>
          <IconButton>
            <Account />
          </IconButton>
          <IconButton onClick={handleCartClick}>
            <Cart />
          </IconButton>
        </Box>
      </Box>
      <CategoryMenus />
      <BreadcrambsString />
    </>
  );
}
