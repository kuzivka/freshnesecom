import { C1, C2 } from './colors';
import { greenButton, greenChip, hideOverflow } from './mixins';

export const productListTitleContainer = {
  p: '8px 45px',
  display: 'flex',
  alignItems: 'center',
};
export const productListTitle = {
  flexGrow: '1',
  fontWeight: '600',
  fontSize: '32px',
};
export const productDetailsButton = {
  width: '100%',
  ...greenButton,
};
export const productListContainer = {
  p: '64px 45px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  alignItems: 'center',
};
export const cardContainer = {
  width: '60vw',
  display: 'flex',
  borderRadius: '12px',
};
export const cardImageContainer = { width: '30%', position: 'relative' };
export const cardImage = {
  borderRadius: '12px',
  position: 'absolute',
  height: '-webkit-fill-available',
};
export const productInfoContainer = {
  display: 'flex',
  flexGrow: '1',
  width: '70%',
  p: 4,
  justifyContent: 'space-between',
};
export const productDescriptionContainer = {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
};
export const cardRating = { color: 'black' };
export const cardButtonContainer = {
  gap: '12px',
  display: 'flex',
  flexDirection: 'column',
};
export const cardPriceInfoContainer = {
  width: '35%',
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'column',
};
export const productPrice = { fontWeight: '600', fontSize: '18px' };
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
  fontWeight: '600',
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
export const chip = {
  ...greenChip,
};
export const titleSpan = { p: 1, color: C1.C };
