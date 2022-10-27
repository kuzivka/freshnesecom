import { C1 } from '@styles/colors';
export const categoryMenuContainer = {
  display: 'flex',
  backgroundColor: C1.H,
  maxWidth: { xs: '100%', md: 'none' },
  p: '16px 44px',
  ml: '16px',
  overflowX: 'hidden',
};
export const headerCategoryMenu = {
  display: 'flex',
  flexGrow: '1',
  justifyContent: { xs: '', md: 'space-around' },
  p: 0,
  width: '100%',
  '&::-webkit-scrollbar': { display: 'none' },
  overflowX: 'scroll',
};
