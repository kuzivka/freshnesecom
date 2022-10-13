import { C1 } from '../colors';
import { greenButton } from '../mixins';

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
export const productDetailsButton = {
  width: '100%',
  ...greenButton,
};
export const cardButtonContainer = {
  gap: '12px',
  display: 'flex',
  flexDirection: 'column',
};
