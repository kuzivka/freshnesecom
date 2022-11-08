import { C1 } from '@styles/colors';

export const tabsContainer = { width: '100%' };
export const tabs = {
  width: '100%',
  display: 'flex',

  '& .MuiTabs-indicator': {
    backgroundColor: C1.A,
    height: '1.5px',
    bottom: '6px',
  },
  '& .MuiTabs-flexContainer': {
    borderBottom: `2px solid ${C1.E}`,
  },
};
export const tabTitle = {
  '&.Mui-selected': {
    color: C1.A,
  },
  alignItems: 'center',
  minWidth: 'fit-content',
  width: 'calc(100%/3)',
  p: 0,
  pl: 1,
  textTransform: 'capitalize',
  color: C1.A,
  fontWeight: '600',
  fontSize: { xs: '14px', md: '18px' },
  minHeight: '0',
  height: '40px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
};
export const tabPanelWithGap = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxHeight: '200px',
  overflowY: 'scroll',
  p: '18px',
  overflow: '-moz-scrollbars-none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};
export const reviewContainer = {
  width: '90%',
  border: '1px solid grey',
  p: '12px',

  borderRadius: '12px',
};
export const descriptionTitles = {
  fontWeight: '500',
  fontSize: '14px',
  pt: '32px',
  pb: '8px',
  pl: 0,
};
export const descriptionText = { fontSize: '14px', fontFamily: 'Open Sans' };
export const noItemsMessage = { color: C1.D, textAlign: 'center' };
