import { C1 } from '../colors';
import { greenButton } from '../mixins';

export const addToFavouriteButton = {
  backgroundColor: C1.F,
  borderRadius: '12px',
  width: 'fit-content',
  color: C1.A,
  p: '6px 12px',
  fontWeight: '700',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: C1.E,
  },
};
export const productDetailsButton = {
  ...greenButton,
  width: 'fit-content',
  p: '12px 16px',
};
export const cardButtonContainer = {
  gap: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
