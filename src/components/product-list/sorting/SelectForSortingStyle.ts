import { C1 } from '@styles/colors';

export const selectForSorting = {
  border: `1px solid ${C1.D}`,
  display: 'flex',
  borderRadius: '12px',
  backgroundColor: C1.H,
  p: '9px 16px',
  alignItems: 'center',
  gap: { xs: '12px', md: '24px' },
};
export const selectContainer = {
  display: 'flex',
  p: { xs: '8px 20px', sm: '16px 48px' },
  justifyContent: 'space-between',
  gap: '12px',
};
export const selectCaption = { fontSize: { xs: '12px', md: '14px' } };
export const selectSorting = {
  maxWidth: {xs:'100px', sm:'fit-content'},
  p: 0,
  fontSize: '12px',
  fontWeight: '600',
};
export const sortingOption = {
  fontSize: '12px',
  fontWeight: '600',
};
