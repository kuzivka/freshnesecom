export const infoBarContainer = {
  display: 'flex',
  flexDirection: { md: 'row', xs: 'column' },
  justifyContent: 'space-between',
  minHeight: { md: '52px', sx: '40px' },
  alignItems: 'center',
  padding: '5px 20px',
  '> *': {
    fontSize: { md: '12px', sm:'10px', xs: '8px' },
  },
};
export const infoBarContactInfo = {
  fontSize: { md: '12px', sm:'10px', xs: '8px' },
};
export const infoBarContactsContainer = {
  display: 'flex',
  gap: { md: '33px', xs: '8px' },
  flexDirection: 'row',
};
export const infoBarLinksContainer = {
  display: 'flex',
  flexDirection: 'row',
  gap: { md: '38px', xs: '10px' },
};
