import { C1 } from '@styles/colors';
import { hideOverflow } from '@styles/mixins';

export const searchInput = {
  backgroundColor: C1.H,
  border: `1px solid ${C1.D}`,
  p: '0 12px',
  display: 'flex',
  alignItems: 'center',
  width: 'min(500px, 70vw)',
  height: '42px',
  borderRadius: '12px',
};
export const searchInputSelect = {
  
};
export const searchInputDivider = { height: 28, m: 0.5 };
export const searchInputField = {
  ml: 1,
  flex: 1,
  fontFamily: 'Open Sans',
  fontSize: '14px',
  input: { ...hideOverflow },
};
export const searchInputButton = { p: '10px', fontWeight: '500' };
export const menuItem = {
  fontSize: { xs: '12px', md: '14px' },
  p: '4px 4px',
  minHeight: 'fit-content',
};
