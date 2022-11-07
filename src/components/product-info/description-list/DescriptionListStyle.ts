import { C1 } from '@styles/colors';
import { hideOverflow } from '@styles/mixins';

export const descriptionList = {
  height: '140px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '50%',
  gap: '12px',
};
export const descriptionProperty = {
  ...hideOverflow,
  width: '50%',
  color: C1.C,
  fontSize: '14px',
  fontFamily: 'Open Sans',
};
export const descriptionListItem = { p: 0 };
export const descriptionValue = {
  ...hideOverflow,
  fontSize: '14px',
  fontFamily: 'Open Sans',
  width: '50%',
};
