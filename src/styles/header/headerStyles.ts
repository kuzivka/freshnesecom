import { C1 } from '../colors';

export const infoBarContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '52px',
  alignItems: 'center',
  padding: '0 20px',
  '> *': {
    fontSize: '12px',
  },
};
export const infoBarContactInfo = {
  fontSize: '12px',
};
export const infoBarContactsContainer = {
  display: 'flex',
  flexDirection: 'row',
  gap: '33px',
};
export const infoBarLinksContainer = {
  display: 'flex',
  flexDirection: 'row',
  gap: '38px',
};
export const searchInput = {
  backgroundColor: C1.H,
  border: `1px solid ${C1.D}`,
  p: '0 12px',
  display: 'flex',
  alignItems: 'center',
  width: 500,
  height: '42px',
  borderRadius: '12px',
};
export const headerContentContainer = {
  pl: '26px',
  pb: '10px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export const headerIconButtonsContainer = {
  display: 'flex',
  gap: '30px',
};
export const headerMenuButton = {
  textTransform: 'capitalize',
  color: C1.A,
  gap: '5px',
  p: 0,
  '&:hover': {
    backgroundColor: C1.H,
  },
};
export const headerCategoryMenu = {
  backgroundColor: C1.H,
  display: 'flex',
  justifyContent: 'space-around',
  margin: '0 auto',
  flexWrap: 'wrap',
  width: '100%',
  p: '16px 45px',
};
export const categoryMenuOptions = { backgroundColor: C1.H };
export const breadcrumbs = {
  p: '16px',
  pl: '36px',
  '& >*': { textTransform: 'capitalize' },
};
export const searchInputSelect = {
  width: 150,
  fontWeight: '800',
  fontSize: '16px',
};
export const searchInputDivider = { height: 28, m: 0.5 };
export const searchInputField = {
  ml: 1,
  flex: 1,
  fontFamily: 'Open Sans',
  fontSize: '14px',
};
export const searchInputButton = { p: '10px', fontWeight: '500' };
export const selectArrowIcon = { height: '50%', right: '5px' };
export const selectMenuItem = {
  width: 'fit-content',
  height: 'fit-content',
  p: 0,
};
