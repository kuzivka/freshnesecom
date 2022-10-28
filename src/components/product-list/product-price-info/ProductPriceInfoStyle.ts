import { C1 } from '@styles/colors';

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
export const priceInfo = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
  justifyContent: 'space-evenly',
};
export const priceInfoContent = { display: 'flex', flexDirection: 'column' };
export const cardPriceInfoContainer = {
  width: { sm: '35%' },
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: { sm: 'column' },
};
