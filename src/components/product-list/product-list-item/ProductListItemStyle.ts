export const cardContainer = {
  minWidth: 'min(880px, fit-content)',
  width: {lg:'880px', md:'600px', sm:'80vw', xs:'80vw'},
  display: 'flex',
  flexDirection:{xs:'column', sm:'row'},
  borderRadius: '12px',
  maxHeight: {sm:'fit-content', xs:'90vh'},
  height:{xs:'60vh', sm:'fit-content'}
};

export const productInfoContainer = {
  display: 'flex',flexDirection:{xs:'column', sm:'row'},
  flexGrow: '1',
  width: {xs:'100%',sm:'70%'},
  p: 4,
  justifyContent: 'space-between',
};
