import { greenChip } from '@styles/mixins';

export const chips = {
  ...greenChip,
  p: '4px 10px',
  '& .MuiChip-label': { p: 0 },
};
export const imgStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '12px',
} as const;

export const smallImg = {
  height: '100%',
  objectFit: 'cover',
  width: '100%',
  borderRadius: '12px',
} as const;

export const productPhotosContainer = {
  width: { xs: '100%', md: '50%' },
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};
export const smallPhoto = { height: { xs: '100px', sm: '220px' } };
export const chipContainer = { display: 'flex', pr: '16px', gap: '12px' };
export const bigPhoto = {
  borderRadius: '12px',
  height: { xs: '200px', sm: '420px' },
};
