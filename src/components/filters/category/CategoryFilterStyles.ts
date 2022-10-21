import { C2 } from '@styles/colors';
import { greenChip } from '@styles/mixins';

export const categoryListItem = {
  p: 0,
  display: 'flex',
  justifyContent: 'space-between',
};
export const categoryLabel = {
  ml: '0',
};
export const categoryName = {
  fontSize: '14px',
  fontFamily: 'Open Sans',
};
export const categoryCheckbox = { display: 'none' };
export const checkedCategoryName = {
  color: C2.A,
  fontWeight: '600',
  fontSize: '14px',
  fontFamily: 'Open Sans',
};
export const chip = {
  ...greenChip,
};
