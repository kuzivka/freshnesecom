import { ReactComponent as Account } from '@assets/svg/account.svg';
import { ReactComponent as Cart } from '@assets/svg/cart.svg';
import { ReactComponent as LogoIcon } from '@assets/svg/freshnesecom.svg';
import { PATH } from '@common/enums';
import { Box, Divider, IconButton } from '@mui/material';
import {
  headerContent,
  headerContentContainer,
  headerIconButtonsContainer,
} from './HeaderStyles';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BreadcrambsString from '../BreadcrumbsString/BreadcrumbsString';
import CategoryMenus from '../CategoryMenus/CategoryMenus';
import InfoBar from '../InfoBar/InfoBar';
import SearchInput from '../SearchInput/SearchInput';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

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
        <Box sx={headerContent}>
          <LogoIcon onClick={handleLogoClick} />
          {location.pathname === PATH.ALL_PRODUCTS && <SearchInput />}
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
      </Box>
      <BreadcrambsString />
    </>
  );
}
