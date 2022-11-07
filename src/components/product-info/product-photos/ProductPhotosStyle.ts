import { greenChip } from '@styles/mixins';

export const chips = {
  ...greenChip,
  p: '4px 10px',
  '& .MuiChip-label': { p: 0 },
};
export const imgStyle = {
  height: '420px',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '12px',
} as const;

export const smallImg = {
  height: '220px',
  objectFit: 'cover',
  width: '100%',
  borderRadius: '12px',
} as const;

export const productPhotosContainer = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

export const chipContainer = { display: 'flex', pr: '16px', gap: '12px' };
export const bigPhoto = { borderRadius: '12px' };
