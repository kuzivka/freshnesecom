import { C2 } from './colors';

export const hideOverflow = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
export const greenButton = {
  backgroundColor: C2.A,
  border: `2px solid ${C2.B}`,
  borderRadius: '12px',
  fontWeight: '700',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: C2.B,
  },
};
export const greenChip = {
  height: 'fit-content',
  backgroundColor: C2.E,
  color: C2.A,
  fontWeight: '600',
};
