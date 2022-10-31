import { C1 } from '@styles/colors';
import { greenButton } from '@styles/mixins';

export const addToFavouriteButton = {
  backgroundColor: C1.F,
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
    backgroundColor: { md: C1.E, xs: C1.F },
  },
};
export const productDetailsButton = {
  ...greenButton,
  width: { xs: '100%', md: 'fit-content' },
  p: '12px 16px',
};
export const cardButtonContainer = {
  display: 'flex',
  gap: '12px',
  flexGrow: '1',
  flexDirection: { xs: 'column', sm: 'column' },
  alignItems: 'center',
  justifyContent: 'end',
};
export const buttonTextLong = { display: { md: 'flex', xs: 'none' } };
export const buttonTextShort = { display: { md: 'none', xs: 'flex' } };
