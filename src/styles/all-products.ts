import { C1, C2 } from './colors';
import { hideOverflow } from './mixins';

export const productDetailsButton = {
  backgroundColor: C2.A,
  border: `2px solid ${C2.B}`,
  borderRadius: '12px',
  width: '100%',
  fontWeight: '700',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: C2.B,
  },
};
export const addToFavouriteButton = {
  backgroundColor: C1.F,
  borderRadius: '12px',
  width: '100%',
  color: C1.A,
  p: '6px 12px',
  fontWeight: '700',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: C1.E,
  },
};

export const cardDescriptionList = {
  textTransform: 'capitalize',
  ...hideOverflow,
  minWidth: '100px',
  width: '50%',
  fontFamily: 'Open Sans',
  fontSize: '14px',
  color: C1.C,
};
export const productCardName = {
  fontWeight: '700',
  fontSize: '18px',
  mb: '4px',
};

export const productCardDescription = {
  mb: '8px',
  fontFamily: 'Open Sans',
  fontSize: '12px',
  ...hideOverflow,
};
export const productCardDescriptionContainer = {
  padding: '6px 0',
  '&:last-child p:last-child': {
    color: C2.A,
  },
};

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
