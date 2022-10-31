import { C1 } from '@styles/colors';

export const priceSlider = {
  height: '6px',
  '& .MuiSlider-thumb': {
    color: C1.J,
    border: `1px solid ${C1.D}`,
    height: '20px',
  },
  '& .MuiSlider-rail': {
    color: C1.E,
    borderRadius: '12px',
    opacity: '1',
  },
};
export const priceInput = {
  style: {
    fontSize: '14px',
    padding: '12px 16px 12px 20px',
    borderRadius: '12px',
    width: '110px',
  },
};
export const priceInputBase = {
  width: { lg: '110px', xs: '90px' },
  backgroundColor: C1.H,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '12px',
    },
  },
};
export const inputSeparator = { position: 'relative', top: '5px' };
export const priceInputLabel = { fontSize: '12px', fontWeight: '600' };
export const inputsContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
