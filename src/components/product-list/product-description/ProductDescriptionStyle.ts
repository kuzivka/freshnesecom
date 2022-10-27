import { C1, C2 } from '@styles/colors';
import { hideOverflow } from '@styles/mixins';

export const cardDescriptionList = {
  ...hideOverflow,
  minWidth: '100px',
  width: {xs:'100%',sm:'50%'},
  fontFamily: 'Open Sans',
  fontSize: '14px',
  color: C1.C,
  '&::first-letter': {
    textTransform: 'uppercase',
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
};
export const productDescriptionContainer = {
  display: 'flex',
  flexDirection: 'column',
  width: {xs:'100%',sm:'50%'},
  ...hideOverflow

};
export const cardRating = { color: 'black' };
