import { C1 } from '@styles/colors';

export const searchInput = {
  backgroundColor: C1.H,
  border: `1px solid ${C1.D}`,
  p: '0 12px',
  display: 'flex',
  alignItems: 'center',
  width: 'min(500px, 50vw)',
  height: '42px',
  borderRadius: '12px',
};
export const searchInputSelect = {
  
  width: 'fit-content',
  fontWeight: '800',
  fontSize: {md:'16px', sm:'14px', xs:'12px'},
};
export const searchInputDivider = { height: 28, m: 0.5, };
export const searchInputField = {
  ml: 1,
  flex: 1,
  fontFamily: 'Open Sans',
  fontSize: '14px',
};
export const searchInputButton = { p: '10px', fontWeight: '500' };
