import { C1, C2 } from '@styles/colors';
import { hideOverflow } from '@styles/mixins';

export const cardDescriptionList = {
  minWidth: '80px',
  width: { xs: '100px', sm: '50%' },
  fontFamily: 'Open Sans',
  fontSize: '14px',
  color: C1.C,
  ...hideOverflow,
  '&::first-letter': {
    textTransform: 'uppercase',
  },
  '&:last-child': {
    width: '100%',
    ...hideOverflow,
  },
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
    textTransform: 'lowercase',
  },
  ...hideOverflow,
};
export const productDescriptionContainer = {
  display: 'flex',
  flexDirection: 'column',
  width: { xs: '100%', sm: '50%' },
};
export const cardRating = { color: 'black' };
