import { C1 } from '@styles/colors';
import { greenButton } from '@styles/mixins';

export const mainContent = {
  display: 'flex',
  justifyContent: 'space-around',
  p: '16px',
  pr: '24px',
  border: `1px solid ${C1.F}`,
  borderRadius: '12px',
};
export const priceContainer = {
  width: '35%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};
export const productPrice = { fontWeight: '600', fontSize: '26px' };
export const oldPrice = { fontWeight: '600', fontSize: '12px', color: C1.C };
export const selectPaper = {
  backgroundColor: C1.H,
  border: `1px solid ${C1.D}`,
  display: 'flex',
  alignItems: 'center',
  borderRadius: '12px',
  height: 'fit-content',
  width: 'fit-content',
  p: '16px',
  gap: '20px',
};
export const selectUnit = {
  fontWeight: '600',
  fontSize: '12px',
  textTransform: 'capitalize',
  position: 'relative',
  '::before': {
    position: 'absolute',
    left: '-10px',
    content: '""',
    display: 'block',
    height: '18px',
    background: C1.C,
    width: '1px',
  },
  '& .MuiSelect-icon': {
    position: 'absolute',
    top: '40%',
  },
  '& .MuiSelect-select': { pt: 0, pb: 0 },
};
export const selectInput = {
  width: '32px',
  color: C1.C,
  input: {
    fontSize: '14px',
    fontFamily: 'Open Sans',
    p: 0,
    width: 'fit-content',
    caretColor: 'transparent',
    cursor: 'default',
  },
};
export const addToCartBtn = {
  ...greenButton,
  color: C1.J,
  height: 'fit-content',
  p: '12px 16px',
};
export const addToWishListBtn = {
  backgroundColor: C1.J,
  borderRadius: '12px',
  width: { xs: '100%', md: 'fit-content' },
  color: C1.A,
  p: '6px 12px',
  fontWeight: '700',
  textTransform: 'capitalize',
  '&:active': {
    backgroundColor: C1.E,
  },
  '&:hover': {
    backgroundColor: { md: C1.E, xs: C1.J },
  },
};
export const panelContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};
