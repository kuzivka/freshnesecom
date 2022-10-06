import { Box, Divider, Link, Typography } from '@mui/material';
import { ReactComponent as LogoIcon } from '@assets/svg/freshnesecom.svg';
import SearchInput from './SearchInput';
import { ReactComponent as Cart } from '@assets/svg/cart.svg';
import { ReactComponent as Account } from '@assets/svg/account.svg';
import CategoryMenu from './CategoryMenu';
import BreadcrambsString from './BreadcrumbsString';
import InfoBar from './InfoBar';

export function Header() {
  return (
    <>
      <InfoBar />
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <LogoIcon />
        <SearchInput />
        <Box>
          <Account />
          <Cart />
        </Box>
      </Box>
      <CategoryMenu />
      <BreadcrambsString />
    </>
  );
}
