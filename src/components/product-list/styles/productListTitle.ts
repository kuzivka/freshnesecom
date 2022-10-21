import { C1 } from '../../../styles/colors';
import { greenChip } from '../../../styles/mixins';

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
export const chip = {
  ...greenChip,
};
export const titleSpan = { p: 1, color: C1.C };
