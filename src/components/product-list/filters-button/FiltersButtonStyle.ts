import { C1 } from '@styles/colors';
import { greenButton } from '@styles/mixins';

export const drawerOpenButtonContainer = {display: { md: 'none' }, p: '16px 48px' };
export const drawerContainer = {
  sx: { p: 3, width: { xs: '90vw', sm: '60vw', md: '40vw' } },
};
export const openDrawerButton = {
  
  ...greenButton,
  color: C1.J,
};
