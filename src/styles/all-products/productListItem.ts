import { C1, C2 } from '../colors';
import { greenButton, hideOverflow } from '../mixins';

export const cardContainer = {
  width: '60vw',
  display: 'flex',
  borderRadius: '12px',
};

export const productInfoContainer = {
  display: 'flex',
  flexGrow: '1',
  width: '70%',
  p: 4,
  justifyContent: 'space-between',
};


export const cardPriceInfoContainer = {
  width: '35%',
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'column',
};
export const productPrice = { fontWeight: '600', fontSize: '18px' };


export const priceWithoutDiscount = {
  fontWeight: '600',
  fontSize: '12px',
  textDecorationLine: 'line-through',
  color: C1.C,
};

export const shippingPriceInfo = {
  fontWeight: '600',
  fontSize: '12px',
  color: C1.C,
};
export const shipingDurationInfo = {
  fontWeight: '400',
  fontSize: '12px',
  color: C1.C,
  fontFamily: 'Open Sans',
};
