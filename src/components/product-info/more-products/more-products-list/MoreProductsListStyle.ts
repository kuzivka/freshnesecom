import { C1 } from '@styles/colors';
import { greenButton, hideOverflow } from '@styles/mixins';

export const productList = {
  display: 'flex',
  gap: '5%',
  width: '100%',
  overflow: 'hidden',
  flexWrap: 'wrap',
  height: '340px',
  justifyContent: 'flex-start',
};

export const productListItem = {
  width: { sm: 'calc((90%)/3)',md: 'calc((85%)/4)', xl: 'calc((80%)/5)' },
  height: '100%',
  p: 0,
};
export const productCard = {
  height: '100%',
  minWidth: '100px',
  p: 0,
  '&:hover': { cursor: 'pointer' },
};
export const cardImg = { borderRadius: '12px' };
export const cardContent = { pl: 0, pr: 0 };
export const productName = {
  ...hideOverflow,
  fontSize: '14px',
  fontWeight: '500',
};
export const productDescription = { ...hideOverflow, fontSize: '12px', p: 0 };

export const priceContainer = {
  display: 'flex',
  justifyContent: 'space-between',
};
export const prices = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};
export const mainPrice = { fontWeight: '600', fontSize: '18px' };
export const oldPrice = { fontWeight: '600', fontSize: '12px', color: C1.C };
export const buyNowBtn = {
  ...greenButton,
  p: '6px 12px',
  color: C1.J,
  height: 'fit-content',
  fontSize: '14px',
  textTransform: 'none',
};
