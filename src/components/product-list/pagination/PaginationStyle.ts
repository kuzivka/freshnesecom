import { C1, C2 } from '@styles/colors';
import { greenButton, greenChip } from '@styles/mixins';

export const paginationContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  p: '16px 45px',
  alignItems: 'center',
};
export const pagesCaption = {
  fontSize: '12px',
  color: C1.C,
  fontFamily: 'Open Sans',
  pr: '8px',
};
export const pagesList = { display: 'flex', gap: '8px', p: 0 };
export const pagesListItem = { p: 0 };
export const pageNumberButton = {
  lineClamp: '1',
  fontWeight: '400',
  fontSize: '12px',
  color: C1.A,
  p: 0,
  fontFamily: 'Open Sans',
  border: 'none',
  background: 'none',
  minWidth: 'fit-content',
};
export const selectedPage = { color: C2.A };
export const pageListContainer = {
  display: 'flex',
  alignItems: 'center',
  flexGrow: '1',
};
export const showMoreButton = {
  ...greenButton,
  color: C1.J,
  textTransform: 'none',
  gap: '6px',
  p: '12px 16px',
};
export const showMoreButtonIcon = { marginRight: '8px' };
export const productsLeftContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '4px',
  flexGrow: '1',
};
export const productsLeftChip = { ...greenChip };
